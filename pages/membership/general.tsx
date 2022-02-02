import GalleryRoute from 'scenes/_Router/GalleryRoute';
import GeneralMembershipMintPage from 'scenes/MembershipMintPage/GeneralMembershipMintPage';

import GalleryRedirect from 'scenes/_Router/GalleryRedirect';
// import { FeatureFlag } from 'components/core/enums';
// import { isFeatureEnabled } from 'utils/featureFlag';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { generalQuery } from '__generated__/generalQuery.graphql';

export default function General() {
  const { membershipNftByTitle } = useLazyLoadQuery<generalQuery>(
    graphql`
      query generalQuery($title: String!) {
        membershipNftByTitle(title: $title) {
          __typename
          ... on NotFound {
            message
          }
          ... on MembershipNftMintCard {
            isFeatureEnabled
            ...GeneralMembershipMintPageFragment
          }
        }
      }
    `,
    {
      title: 'general',
    }
  );

  if (membershipNftByTitle?.__typename === 'MembershipNftMintCard') {
    if (!membershipNftByTitle.isFeatureEnabled) {
      return <GalleryRedirect to="/" />;
    }

    return (
      <GalleryRoute
        element={<GeneralMembershipMintPage membershipNftRef={membershipNftByTitle} />}
        navbar={false}
      />
    );
  }

  // if (!isFeatureEnabled(FeatureFlag.GENERAL_MEMBERSHIP_MINT)) {
  // return <GalleryRedirect to="/" />;
  // }
}
