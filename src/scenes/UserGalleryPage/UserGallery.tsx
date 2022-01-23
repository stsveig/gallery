import { contentSize } from 'components/core/breakpoints';
import styled from 'styled-components';
import Spacer from 'components/core/Spacer/Spacer';
import NotFound from 'scenes/NotFound/NotFound';
import UserGalleryHeader from './UserGalleryHeader';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { UserGalleryQuery } from '../../../__generated__/UserGalleryQuery.graphql';
import EmptyGallery from 'scenes/UserGalleryPage/EmptyGallery';
import UserGalleryCollections from 'scenes/UserGalleryPage/UserGalleryCollections';

type Props = {
  username: string;
};

function UserGallery({ username }: Props) {
  const { userByUsername } = useLazyLoadQuery<UserGalleryQuery>(
    graphql`
      query UserGalleryQuery($username: String!) {
        userByUsername(username: $username) {
          __typename
          ... on NotFound {
            message
          }
          ... on GalleryUser {
            id
            gallery {
              ...UserGalleryCollectionsFragment
            }
            ...UserGalleryHeaderFragment
          }
        }
      }
    `,
    { username }
  );

  if (userByUsername?.__typename !== 'GalleryUser' || userByUsername.gallery === null) {
    return <NotFound />;
  }

  const collectionsView = <UserGalleryCollections galleryRef={userByUsername.gallery} />;

  if (userByUsername?.__typename === 'GalleryUser') {
    return (
      <StyledUserGallery>
        <Spacer height={32} />
        <UserGalleryHeader userRef={userByUsername} />
        {collectionsView}
      </StyledUserGallery>
    );
  }

  return <NotFound />;
}

const StyledUserGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  max-width: ${contentSize.desktop}px;
`;

export default UserGallery;
