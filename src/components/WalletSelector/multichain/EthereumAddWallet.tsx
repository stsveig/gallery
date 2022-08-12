import { Button } from 'components/core/Button/Button';
import colors from 'components/core/colors';
import { BaseM, TitleS } from 'components/core/Text/Text';
import { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Web3Error } from 'types/Error';
import Spacer from 'components/core/Spacer/Spacer';
import {
  ADDRESS_ALREADY_CONNECTED,
  CONFIRM_ADDRESS,
  INITIAL,
  PendingState,
  PROMPT_SIGNATURE,
} from 'types/Wallet';
import { useModalActions } from 'contexts/modal/ModalContext';
import ManageWalletsModal from 'scenes/Modals/ManageWalletsModal';
import {
  isEarlyAccessError,
  useTrackAddWalletAttempt,
  useTrackAddWalletError,
  useTrackAddWalletSuccess,
} from 'contexts/analytics/authUtil';
import { captureException } from '@sentry/nextjs';
import { EthereumAddWalletFragment$key } from '__generated__/EthereumAddWalletFragment.graphql';
import { removeNullValues } from 'utils/removeNullValues';
import { useFragment } from 'react-relay';
import { graphql } from 'relay-runtime';
import useCreateNonce from '../mutations/useCreateNonce';
import useAddWallet from '../mutations/useAddWallet';
import { useAccount } from 'wagmi';
import { signMessage } from '@wagmi/core';
import { EthereumError } from './EthereumError';
import { normalizeError } from './normalizeError';

type Props = {
  queryRef: EthereumAddWalletFragment$key;
  reset: () => void;
};

// This Pending screen is dislayed after the connector has been activated, while we wait for a signature
export const EthereumAddWallet = ({ queryRef, reset }: Props) => {
  const { address, connector } = useAccount();
  const account = address?.toLowerCase();
  const isMetamask = connector?.id === 'metaMask';

  const [pendingState, setPendingState] = useState<PendingState>(INITIAL);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<Error>();

  const query = useFragment(
    graphql`
      fragment EthereumAddWalletFragment on Query {
        viewer {
          ... on Viewer {
            user {
              wallets {
                chainAddress @required(action: NONE) {
                  address
                }
              }
            }
          }
        }

        ...ManageWalletsModalFragment
      }
    `,
    queryRef
  );

  const { viewer } = query;

  const authenticatedUserAddresses = useMemo(
    () => removeNullValues(viewer?.user?.wallets?.map((wallet) => wallet?.chainAddress.address)),
    [viewer?.user?.wallets]
  );

  const { showModal } = useModalActions();

  const openManageWalletsModal = useCallback(
    (address: string) => {
      showModal({
        content: <ManageWalletsModal queryRef={query} newAddress={address} />,
        headerText: 'Connect your wallet',
      });
    },
    [showModal, query]
  );

  const createNonce = useCreateNonce();
  const trackAddWalletAttempt = useTrackAddWalletAttempt();
  const trackAddWalletSuccess = useTrackAddWalletSuccess();
  const trackAddWalletError = useTrackAddWalletError();

  /**
   * Add Wallet Pipeline:
   * 1. Fetch nonce from server with provided wallet address
   * 2. Sign nonce with wallet (metamask / walletconnect / etc.)
   * 3. Add wallet address to user's account
   */
  const addWallet = useAddWallet();
  const attemptAddWallet = useCallback(
    async (address: string) => {
      try {
        setIsConnecting(true);
        setPendingState(PROMPT_SIGNATURE);

        trackAddWalletAttempt('Ethereum');
        const { nonce, user_exists: userExists } = await createNonce(address);

        if (userExists) {
          throw { code: 'EXISTING_USER' } as Web3Error;
        }

        const signature = await signMessage({ message: nonce });
        const { signatureValid } = await addWallet({
          authMechanism: {
            eoa: {
              signature,
              nonce,
              chainAddress: {
                address,
                chain: 'Ethereum',
              },
            },
          },
          chainAddress: {
            address,
            chain: 'Ethereum',
          },
        });

        trackAddWalletSuccess('Ethereum');
        openManageWalletsModal(address);
        setIsConnecting(false);

        return signatureValid;
      } catch (error: unknown) {
        setIsConnecting(false);
        trackAddWalletError('Ethereum', error);
        // ignore early access errors
        if (!isEarlyAccessError(error)) {
          // capture all others
          captureException(error);
        }

        // Fall back to generic error message
        if (error instanceof Error) {
          const web3Error: Web3Error = { code: 'AUTHENTICATION_ERROR', ...error };
          setError(web3Error);
        } else {
          setError(normalizeError(error));
        }
      }
    },
    [
      trackAddWalletAttempt,
      createNonce,
      addWallet,
      trackAddWalletSuccess,
      openManageWalletsModal,
      trackAddWalletError,
    ]
  );

  useEffect(() => {
    async function authenticate() {
      if (account) {
        if (authenticatedUserAddresses.includes(account)) {
          setPendingState(ADDRESS_ALREADY_CONNECTED);
          return;
        }

        if (isMetamask) {
          // For metamask, prompt the user to confirm the address provided by the extension is the one they want to connect with
          setPendingState(CONFIRM_ADDRESS);
        } else {
          await attemptAddWallet(account);
        }
      }
    }

    void authenticate();
  }, [account, authenticatedUserAddresses, attemptAddWallet, isMetamask]);

  if (error) {
    return (
      <EthereumError
        error={error}
        reset={() => {
          setError(undefined);
          reset();
        }}
      />
    );
  }

  if (pendingState === ADDRESS_ALREADY_CONNECTED && account) {
    return (
      <div>
        <TitleS>Connect with Ethereum</TitleS>
        <Spacer height={8} />
        <BaseM>The following address is already connected to this account:</BaseM>
        <Spacer height={8} />
        <BaseM color={colors.offBlack}>{account}</BaseM>
        {isMetamask && (
          <>
            <Spacer height={8} />
            <BaseM>
              If you want to connect a different address via Metamask, please switch accounts in the
              extension and try again.
            </BaseM>
          </>
        )}
      </div>
    );
  }

  // right now we only show this case for Metamask
  if (pendingState === CONFIRM_ADDRESS && account) {
    return (
      <div>
        <TitleS>Connect with Ethereum</TitleS>
        <Spacer height={8} />
        <BaseM>Confirm the following wallet address:</BaseM>
        <Spacer height={8} />
        <BaseM color={colors.offBlack}>{account}</BaseM>
        <Spacer height={16} />
        <BaseM>
          If you want to connect a different address via Metamask, please switch accounts in the
          extension and try again.
        </BaseM>
        <Spacer height={24} />
        <StyledButton onClick={() => attemptAddWallet(account)} disabled={isConnecting}>
          {isConnecting ? 'Connecting...' : 'Confirm'}
        </StyledButton>
      </div>
    );
  }

  if (pendingState === PROMPT_SIGNATURE) {
    return (
      <div>
        <TitleS>Connect with Ethereum</TitleS>
        <Spacer height={8} />
        <BaseM>Sign the message with your wallet.</BaseM>
      </div>
    );
  }

  // Default view for when pendingState === INITIAL
  return (
    <div>
      <TitleS>Connect with Ethereum</TitleS>
      <Spacer height={8} />
      <BaseM>Approve your wallet to connect to Gallery.</BaseM>
    </div>
  );
};

const StyledButton = styled(Button)`
  align-self: flex-end;
  padding: 16px;
  width: 100%;
  height: 100%;
`;