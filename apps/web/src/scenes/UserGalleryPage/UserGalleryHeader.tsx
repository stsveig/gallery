import { graphql, useFragment } from 'react-relay';
import styled from 'styled-components';

import { HStack, VStack } from '~/components/core/Spacer/Stack';
import { GalleryNavLinks } from '~/contexts/globalLayout/GlobalNavbar/GalleryNavbar/GalleryNavLinks';
import { UserGalleryHeaderFragment$key } from '~/generated/UserGalleryHeaderFragment.graphql';
import { UserGalleryHeaderQueryFragment$key } from '~/generated/UserGalleryHeaderQueryFragment.graphql';
import { useIsMobileOrMobileLargeWindowWidth } from '~/hooks/useWindowSize';
import colors from '~/shared/theme/colors';

import { UserNameAndDescriptionHeader } from './UserNameAndDescriptionHeader';
import UserSharedInfo from './UserSharedInfo/UserSharedInfo';
import UserTwitterSection from './UserTwitterSection';

type Props = {
  userRef: UserGalleryHeaderFragment$key;
  queryRef: UserGalleryHeaderQueryFragment$key;
};

export default function UserGalleryHeader({ userRef, queryRef }: Props) {
  const user = useFragment(
    graphql`
      fragment UserGalleryHeaderFragment on GalleryUser {
        username
        dbid

        ...UserNameAndDescriptionHeaderFragment
        ...UserTwitterSectionFragment
        ...UserSharedInfoFragment
        ...GalleryNavLinksFragment
      }
    `,
    userRef
  );

  const query = useFragment(
    graphql`
      fragment UserGalleryHeaderQueryFragment on Query {
        viewer {
          ... on Viewer {
            user {
              dbid
            }
          }
        }
        ...UserNameAndDescriptionHeaderQueryFragment
        ...UserTwitterSectionQueryFragment
        ...UserSharedInfoQueryFragment
      }
    `,
    queryRef
  );

  const loggedInUserId = query.viewer?.user?.dbid;
  const isLoggedIn = Boolean(loggedInUserId);
  const isAuthenticatedUsersPage = loggedInUserId === user?.dbid;
  const isMobile = useIsMobileOrMobileLargeWindowWidth();
  return (
    <VStack gap={12}>
      <UserNameAndDescriptionHeader userRef={user} queryRef={query} />
      {isLoggedIn && !isAuthenticatedUsersPage && (
        <UserSharedInfo userRef={user} queryRef={query} />
      )}
      <UserTwitterSection userRef={user} queryRef={query} />
      {isMobile && (
        <MobileNavLinks align="center" justify="center">
          <GalleryNavLinks username={user.username ?? ''} queryRef={user} />
        </MobileNavLinks>
      )}
    </VStack>
  );
}

const MobileNavLinks = styled(HStack)`
  padding: 16px 0;
  border-bottom: 1px solid ${colors.porcelain};
  border-top: 1px solid ${colors.porcelain};
`;