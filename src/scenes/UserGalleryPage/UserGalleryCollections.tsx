import styled from 'styled-components';
import Spacer from 'components/core/Spacer/Spacer';
import { Fragment, useMemo } from 'react';
import EmptyGallery from './EmptyGallery';
import UserGalleryCollection from './UserGalleryCollection';
import { graphql, useFragment } from 'react-relay';
import { UserGalleryCollectionsFragment$key } from '../../../__generated__/UserGalleryCollectionsFragment.graphql';
import { removeNullValues } from 'utils/removeNullValues';

type Props = {
  galleryRef: UserGalleryCollectionsFragment$key;
};

const COLLECTION_SPACING = 48;

function UserGalleryCollections({ galleryRef }: Props) {
  const gallery = useFragment(
    graphql`
      fragment UserGalleryCollectionsFragment on Gallery {
        owner {
          isAuthenticatedUser
        }
        collections {
          id
          hidden
          nfts {
            id
          }
          ...UserGalleryCollectionFragment
        }
      }
    `,
    galleryRef
  );

  const visibleCollections = useMemo(
    () =>
      removeNullValues(gallery.collections ?? []).filter(
        (collection) => !collection.hidden && (collection?.nfts?.length ?? 0) > 0
      ),
    [gallery.collections]
  );

  if (visibleCollections.length === 0) {
    const emptyGalleryMessage = gallery.owner?.isAuthenticatedUser
      ? 'Your gallery is empty. Display your NFTs by creating a collection.'
      : 'Curation in progress.';

    return <EmptyGallery message={emptyGalleryMessage} />;
  }

  return (
    <StyledUserGalleryCollections>
      {visibleCollections.map((collection, index) => {
        if (!collection) {
          return null;
        }

        return (
          <Fragment key={collection.id}>
            <Spacer height={COLLECTION_SPACING} />
            <UserGalleryCollection collectionRef={collection} />
            <Spacer height={index === visibleCollections.length - 1 ? COLLECTION_SPACING : 0} />
          </Fragment>
        );
      })}
    </StyledUserGalleryCollections>
  );
}

const StyledUserGalleryCollections = styled.div`
  width: 100%;
`;

export default UserGalleryCollections;
