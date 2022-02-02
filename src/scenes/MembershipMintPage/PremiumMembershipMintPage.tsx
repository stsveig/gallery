import { Contract } from '@ethersproject/contracts';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { usePremiumMembershipCardContract } from 'hooks/useContract';
import { useCallback } from 'react';
// import { MembershipNft } from './cardProperties';
import { MembershipMintPage } from 'scenes/MembershipMintPage/MembershipMintPage';
// import {
//   useMembershipMintPageActions,
//   useMembershipMintPageState,
// } from 'contexts/membershipMintPage/MembershipMintPageContext';
import { graphql, useRefetchableFragment } from 'react-relay';
import { PremiumMembershipMintPageFragment$key } from '../../../__generated__/PremiumMembershipMintPageFragment.graphql';

type Props = {
  membershipNftRef: PremiumMembershipMintPageFragment$key;
};

function PremiumMembershipMintPage({ membershipNftRef }: Props) {
  const { account } = useWeb3React<Web3Provider>();
  const contract = usePremiumMembershipCardContract();

  const [membershipNft, refresh] = useRefetchableFragment(
    graphql`
      fragment PremiumMembershipMintPageFragment on MembershipNftMintCard
      @refetchable(queryName: "PremiumMembershipMintPageRefresh") {
        price
        ...MembershipMintPageFragment
      }
    `,
    membershipNftRef
  );

  // const [canMintToken, setCanMintToken] = useState(false);
  // const { price } = useMembershipMintPageState();
  // const { getPrice, getSupply } = useMembershipMintPageActions();

  // // check the contract whether the user's address is allowed to call mint, and set the result in local state
  // const getCanMintToken = useCallback(
  //   async (contract: Contract) => {
  //     if (account) {
  //       const canMintTokenResult = await contract.canMintToken(account, membershipNft.tokenId);
  //       setCanMintToken(canMintTokenResult);
  //     }
  //   },
  //   [account, membershipNft.tokenId]
  // );

  const mintToken = useCallback(
    async (contract: Contract, tokenId: number) =>
      contract.mint(account, tokenId, { value: membershipNft.price }),
    [account, membershipNft.price]
  );

  // Refresh the total supply, remaining supply, etc when we've
  // finished minting the token so the user sees the updated data.
  const onMintSuccess = useCallback(async () => {
    refresh({});
  }, [refresh]);

  // useEffect(() => {
  //   if (contract) {
  //     void getCanMintToken(contract);
  //     getSupply(contract, membershipNft.tokenId);
  //     getPrice(contract, membershipNft.tokenId);
  //   }
  // }, [getCanMintToken, contract, getPrice, getSupply, membershipNft.tokenId]);

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

export default PremiumMembershipMintPage;
