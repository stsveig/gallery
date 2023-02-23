import { Contract } from '@ethersproject/contracts';
import { keccak256 } from '@ethersproject/keccak256';
import { Web3Provider } from '@ethersproject/providers';
import { toUtf8Bytes } from '@ethersproject/strings';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

import GNOSIS_SAFE_CONTRACT_ABI from '~/abis/gnosis-safe-contract.json';
import { Web3Error } from '~/types/Error';

// The hard coded value that Gnosis Safe contract's isValidSignature method returns if the message was signed
// https://github.com/gnosis/safe-contracts/blob/dec13f7cdab62056984343c4edfe40df5a1954dc6/contracts/handler/CompatibilityFallbackHandler.sol#L19
const GNOSIS_VALID_SIGNATURE_MAGIC_VALUE = '0x1626ba7e';
const GNOSIS_SAFE_SIGN_MESSAGE_EVENT_NAME = 'SignMsg';

type Signature = string;

// Externally Owned Accounts will always have Wallet Type ID = 0 because the backend will handle all EOAs the same way.
export const GNOSIS_SAFE_WALLET_TYPE_ID = 1;
// List of contract account wallets that Gallery supports. Used to detect if the user is trying to log in with a contract account

export async function signMessageWithContractAccount(
  address: string,
  nonce: string,
  connector: AbstractConnector
): Promise<Signature> {
  try {
    if (!(connector instanceof WalletConnectConnector)) {
      throw new Error('WalletConnectConnector is required for Contract Accounts');
    }

    // TODO: ensure we have a provider on the connector?

    // This keeps the nonce message intact instead of encrypting it for WalletConnect users
    return (await connector.walletConnectProvider?.connector.signPersonalMessage([
      nonce,
      address,
    ])) as Signature;
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      throw { code: 'REJECTED_SIGNATURE', ...error } as Web3Error;
    } else if (error instanceof Object && isRpcSignatureError(error)) {
      throw { code: 'REJECTED_SIGNATURE' } as Web3Error;
    }

    throw new Error('Unknown error');
  }
}

export async function listenForGnosisSignature(
  address: string,
  nonce: string,
  connector?: AbstractConnector
) {
  if (!(connector instanceof WalletConnectConnector)) {
    throw new Error('WalletConnectConnector is required for listening for Gnosis Safe signature');
  }

  const provider = new Web3Provider(await connector.getProvider());
  const gnosisSafeContract = new Contract(address, GNOSIS_SAFE_CONTRACT_ABI, provider);
  const messageHash = generateMessageHash(nonce);
  // create listener that will listen for the SignMsg event on the Gnosis contract
  const listenToGnosisSafeContract = new Promise((resolve) => {
    gnosisSafeContract.on(GNOSIS_SAFE_SIGN_MESSAGE_EVENT_NAME, async (msgHash: string) => {
      // Upon detecing the SignMsg event, validate that the contract signed the message
      console.log('Gnosis Safe Contract Event: ', GNOSIS_SAFE_SIGN_MESSAGE_EVENT_NAME);
      const messageWasSigned = await validateGnosisSignature(gnosisSafeContract, messageHash);

      if (messageWasSigned) {
        resolve(msgHash);
      }

      // If the message was not signed, keep listening without throwing an error.
      // It's possible that we detected a SignMsg event from an older tx in the queue, since Gnosis requires all txs in its queue to be processed
      // We will keep listening for the event until we detect that the message was signed
    });
  });

  await listenToGnosisSafeContract;
  gnosisSafeContract.removeAllListeners(GNOSIS_SAFE_SIGN_MESSAGE_EVENT_NAME);
}

export async function validateGnosisSignature(gnosisSafeContract: Contract, messageHash: string) {
  const magicValue = await gnosisSafeContract
    .isValidSignature(messageHash, '0x')
    .catch((error: unknown) => {
      console.error(error);
      return false;
    });

  return magicValue === GNOSIS_VALID_SIGNATURE_MAGIC_VALUE;
}

export async function validateNonceSignedByGnosis(
  address: string,
  nonce: string,
  connector: AbstractConnector
) {
  console.log('Querying Gnosis Safe');
  const provider = new Web3Provider(await connector.getProvider());
  const gnosisSafeContract = new Contract(address, GNOSIS_SAFE_CONTRACT_ABI, provider);
  const messageHash = generateMessageHash(nonce);
  return validateGnosisSignature(gnosisSafeContract, messageHash);
}

// Need a better way to type this Web3 stuff
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isRpcSignatureError(error: Record<string, any>) {
  return typeof error === 'object' && error !== null && 'code' in error && error.code === 4001;
}

// Generates the same message hash that is generated by the Wallet Connect personal sign method after the user sees the nonce message
// This is the same value that is passed into the wallet's sign method
function generateMessageHash(nonce: string) {
  const prependedNonce = `\x19Ethereum Signed Message:\n${nonce.length}${nonce}`;
  return keccak256(toUtf8Bytes(prependedNonce));
}