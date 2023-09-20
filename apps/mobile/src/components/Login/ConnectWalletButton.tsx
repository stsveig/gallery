import { useNavigation } from '@react-navigation/native';
import { useWalletConnectModal } from '@walletconnect/modal-react-native';
import { ethers } from 'ethers';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLogin } from 'src/hooks/useLogin';

import { useToastActions } from '~/contexts/ToastContext';
import { LoginStackNavigatorProp } from '~/navigation/types';
import { navigateToNotificationUpsellOrHomeScreen } from '~/screens/Login/navigateToNotificationUpsellOrHomeScreen';
import { useTrack } from '~/shared/contexts/AnalyticsContext';
import useCreateNonce from '~/shared/hooks/useCreateNonce';

import { Button } from '../../components/Button';
import { GalleryBottomSheetModalType } from '../GalleryBottomSheet/GalleryBottomSheetModal';
import { WalletSelectorBottomSheet } from './WalletSelectorBottomSheet';

export function ConnectWalletButton() {
  const navigation = useNavigation<LoginStackNavigatorProp>();
  const { address, isConnected, provider } = useWalletConnectModal();
  const createNonce = useCreateNonce();
  const { pushToast } = useToastActions();

  const [isLoading, setIsLoading] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const [login] = useLogin();
  const track = useTrack();

  const web3Provider = useMemo(
    () => (provider ? new ethers.providers.Web3Provider(provider) : undefined),
    [provider]
  );

  const handleSignMessage = useCallback(async () => {
    if (!web3Provider || !address) {
      return;
    }

    const signer = web3Provider.getSigner();
    const { nonce, user_exists: userExist } = await createNonce(address, 'Ethereum');

    try {
      setIsLoading(true);
      setIsSigningIn(true);
      const signature = await signer.signMessage(nonce);

      if (!userExist) {
        setIsLoading(false);
        provider?.disconnect();

        navigation.navigate('OnboardingUsername', {
          authMechanism: {
            authMechanismType: 'eoa',
            chain: 'Ethereum',
            address,
            nonce,
            signature,
            userFriendlyWalletName: 'Unknown',
          },
        });

        return;
      }

      const result = await login({
        eoa: {
          signature,
          nonce,
          chainPubKey: {
            pubKey: address,
            chain: 'Ethereum',
          },
        },
      });

      if (result.kind === 'failure') {
        track('Sign In Failure', { 'Sign in method': 'Wallet Connect', error: result.message });
      } else {
        track('Sign In Success', { 'Sign in method': 'Wallet Connect' });
        await navigateToNotificationUpsellOrHomeScreen(navigation);
      }
    } catch (error) {
      pushToast({
        message: 'The signature was rejected. Try again or use another wallet.',
        withoutNavbar: true,
      });
      provider?.disconnect();
    } finally {
      setIsLoading(false);
      setIsSigningIn(false);
    }
  }, [address, createNonce, login, provider, pushToast, web3Provider, navigation, track]);

  const handleButtonPress = useCallback(() => {
    bottomSheet.current?.present();
  }, []);

  const handleDismiss = useCallback(() => {
    provider?.disconnect();
    setIsLoading(false);
    setIsSigningIn(false);
  }, [provider]);

  useEffect(() => {
    if (isConnected) {
      handleSignMessage();
    } else {
      setIsLoading(false);
      setIsSigningIn(false);
    }
  }, [isConnected, handleSignMessage]);

  const bottomSheet = useRef<GalleryBottomSheetModalType | null>(null);

  return (
    <>
      <Button
        onPress={handleButtonPress}
        text="connect wallet"
        eventElementId={null}
        eventName={null}
        loading={isLoading}
      />
      <WalletSelectorBottomSheet
        ref={bottomSheet}
        isSignedIn={isSigningIn}
        onDismiss={handleDismiss}
      />
    </>
  );
}