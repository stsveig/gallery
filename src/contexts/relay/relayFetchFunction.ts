import { FetchFunction } from 'relay-runtime';
import { _fetch } from 'contexts/swr/useFetcher';
import { MembershipTier } from 'types/MembershipTier';

/**
 * This is how Relay takes an arbitrary GraphQL request, and asks for a response.
 * Since we don't currently have a GraphQL server, we're shimming a response as
 * an example.
 */

/**
 * make the response nice & real
 */
import { MEMBERSHIP_NFT_GOLD } from 'scenes/MembershipMintPage/cardProperties';

export const relayFetchFunction: FetchFunction = async (request, variables) => {
  if (request.name === 'membersQuery') {
    const response = await _fetch<{ tiers: MembershipTier[] }>('/users/membership', 'some action');

    return {
      data: {
        membershipTiers: response.tiers.map((tier) => ({
          id: tier.id,
          name: tier.name,
          assetUrl: tier.asset_url,
          tokenId: tier.token_id,
          owners: tier.owners
            .filter((owner) => Boolean(owner.username))
            .map((owner) => ({
              id: `${owner.address}:${owner.username}:${owner.user_id}`,
              user: {
                id: owner.user_id,
                username: owner.username,
              },
              previewNfts: owner.preview_nfts,
            })),
        })),
      },
    };
  }

  if (request.name === 'goldQuery') {
    // console.log(variables);
    return {
      data: {
        membershipNftByTitle: {
          __typename: 'MembershipNftMintCard',
          ...MEMBERSHIP_NFT_GOLD,
          id: 'gold',
          price: '50000000000000000',
          canMintToken: true,
          totalSupply: 500,
          remainingSupply: 500,
        },
      },
    };
  }

  // response from using refresh() useRefetchableFragment (@refetchable)
  if (request.name === 'PremiumMembershipMintPageRefresh') {
    return {
      data: {
        node: {
          // __typename:
          // ...MEMBERSHIP_NFT_GOLD,
          //
        },
      },
    };
  }

  throw new Error(`Relay fetch function not yet implemented for: ${request.name}`);
};
