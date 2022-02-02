import GalleryRoute from 'scenes/_Router/GalleryRoute';
// import GoldMembershipMintPage from 'scenes/MembershipMintPage/GoldMembershipMintPage';
import PremiumMembershipMintPage from 'scenes/MembershipMintPage/PremiumMembershipMintPage';
import { useLazyLoadQuery } from 'react-relay';
import { graphql } from 'relay-runtime';
import { goldQuery } from '../../__generated__/goldQuery.graphql';
import NotFound from 'scenes/NotFound/NotFound';

export default function GoldMembership() {
  const { membershipNftByTitle } = useLazyLoadQuery<goldQuery>(
    graphql`
      query goldQuery($title: String!) {
        membershipNftByTitle(title: $title) {
          __typename
          ... on NotFound {
            message
          }
          ... on MembershipNftMintCard {
            ...PremiumMembershipMintPageFragment
          }
        }
      }
    `,
    { title: 'gold' }
  );

  if (membershipNftByTitle?.__typename === 'MembershipNftMintCard') {
    return (
      <GalleryRoute
        element={<PremiumMembershipMintPage membershipNftRef={membershipNftByTitle} />}
        navbar={false}
      />
    );
  }

  return <NotFound />;
}
