import { Web3Provider } from '@ethersproject/providers';
import { MembershipMintPage } from 'scenes/MembershipMintPage/MembershipMintPage';
import { useWeb3React } from '@web3-react/core';
import { useCallback } from 'react';

import {
  // GENERAL_MEMBERSHIP_CONRTACT_ADDRESS,
  useGeneralMembershipCardContract,
} from 'hooks/useContract';

import MerkleTree from './MerkleTree';
import { Contract } from '@ethersproject/contracts';

import { graphql, useRefetchableFragment } from 'react-relay';
import { GeneralMembershipMintPageFragment$key } from '../../../__generated__/GeneralMembershipMintPageFragment.graphql';
import { removeNullValues } from 'utils/removeNullValues';

// import MembershipMintPageProvider, {
// useMembershipMintPageActions,
// } from 'contexts/membershipMintPage/MembershipMintPageContext';
// import { MEMBERSHIP_NFT_GENERAL } from './cardProperties';
// import { getAllowlist } from './GeneralCardAllowlist';

export type AssetContract = {
  address: string;
};

export type OpenseaAsset = {
  asset_contract: AssetContract;
};

// const OPENSEA_API_BASEURL = process.env.NEXT_PUBLIC_OPENSEA_API_BASEURL ?? 'https://api.opensea.io';

function generateMerkleProof(address: string, allowlist: string[]) {
  const merkleTree = new MerkleTree(allowlist);
  return merkleTree.getHexProof(address);
}

// async function detectOwnedGeneralCardsFromOpensea(account: string) {
//   const response = await fetch(
//     `${OPENSEA_API_BASEURL}/api/v1/assets?owner=${account}&asset_contract_addresses=${GENERAL_MEMBERSHIP_CONRTACT_ADDRESS}`,
//     {}
//   );

//   const responseBody = await response.json();
//   return responseBody.assets.length > 0;
// }

type Props = {
  membershipNftRef: GeneralMembershipMintPageFragment$key;
};

function GeneralMembershipMintPage({ membershipNftRef }: Props) {
  const { account } = useWeb3React<Web3Provider>();
  const contract = useGeneralMembershipCardContract();

  // const { getSupply } = useMembershipMintPageActions();

  // const [ownsGeneralCard, setOwnsGeneralCard] = useState(false);

  const [membershipNft, refresh] = useRefetchableFragment(
    graphql`
      fragment GeneralMembershipMintPageFragment on MembershipNftMintCard
      @refetchable(queryName: "GeneralMemberhsipMintPageRefresh") {
        __typename
        allowlist @required(action: THROW)
        ...MembershipMintPageFragment
      }
    `,
    membershipNftRef
  );

  const allowlist = removeNullValues(membershipNft.allowlist);

  // const allowlist = getAllowlist();
  // const onAllowList = useMemo(
  //   () => Boolean(account) && allowlist.includes(account!.toLowerCase()),
  //   [account, allowlist]
  // );

  // const canMintToken = useMemo(
  //   () => !ownsGeneralCard && onAllowList,
  //   [onAllowList, ownsGeneralCard]
  // );

  // useEffect(() => {
  //   async function checkIfUserCanMint(account: string) {
  //     const generalCardDetectedInAccount = await detectOwnedGeneralCardsFromOpensea(account);
  //     setOwnsGeneralCard(generalCardDetectedInAccount);
  //   }

  //   if (account) {
  //     void checkIfUserCanMint(account);
  //   }
  // }, [account]);

  const mintToken = useCallback(
    async (contract: Contract, tokenId: number) => {
      if (contract && account) {
        const merkleProof = generateMerkleProof(account, allowlist);
        return contract.mint(account, tokenId, merkleProof);
      }
    },
    [account, allowlist]
  );

  const onMintSuccess = useCallback(async () => {
    // setOwnsGeneralCard(true);
    refresh({});
  }, [refresh]);

  // useEffect(() => {
  //   if (contract) {
  //     getSupply(contract, MEMBERSHIP_NFT_GENERAL.tokenId);
  //   }
  // }, [getSupply, contract]);

  return (
    <MembershipMintPage
      membershipNftRef={membershipNft}
      // canMintToken={canMintToken}
      contract={contract}
      mintToken={mintToken}
      onMintSuccess={onMintSuccess}
    />
  );
}

// function GeneralMembershipMintPage() {
//   return (
//     <MembershipMintPageProvider>
//       <GeneralMembershipMintPageContent />
//     </MembershipMintPageProvider>
//   );
// }

export default GeneralMembershipMintPage;
