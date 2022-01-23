import { DEFAULT_COLUMNS, LAYOUT_GAP_BREAKPOINTS } from 'constants/layout';
import styled from 'styled-components';
import unescape from 'lodash.unescape';
import colors from 'components/core/colors';
import NftPreview from 'components/NftPreview/NftPreview';
import { BodyRegular, TitleSerif } from 'components/core/Text/Text';
import Spacer from 'components/core/Spacer/Spacer';
import breakpoints from 'components/core/breakpoints';
import { useMemo } from 'react';
import Markdown from 'components/core/Markdown/Markdown';
import { graphql, useFragment } from 'react-relay';
import { UserGalleryCollectionFragment$key } from '../../../__generated__/UserGalleryCollectionFragment.graphql';

type Props = {
  collectionRef: UserGalleryCollectionFragment$key;
};

function UserGalleryCollection({ collectionRef }: Props) {
  const { name, collectorsNote, layout, nfts } = useFragment(
    graphql`
      fragment UserGalleryCollectionFragment on GalleryCollection {
        name
        collectorsNote
        layout {
          columns
        }
        nfts {
          id
          ...NftPreviewFragment
        }
      }
    `,
    collectionRef
  );

  const unescapedCollectionName = useMemo(() => unescape(name ?? ''), [name]);
  const unescapedCollectorsNote = useMemo(() => unescape(collectorsNote ?? ''), [collectorsNote]);
  const columns = layout?.columns ?? DEFAULT_COLUMNS;

  return (
    <StyledCollectionWrapper>
      <StyledCollectionHeader>
        <TitleSerif>{unescapedCollectionName}</TitleSerif>
        {unescapedCollectorsNote && (
          <>
            <Spacer height={8} />
            <StyledCollectorsNote color={colors.gray50}>
              <Markdown text={unescapedCollectorsNote} />
            </StyledCollectorsNote>
          </>
        )}
      </StyledCollectionHeader>
      <StyledCollectionNfts columns={columns}>
        {nfts?.map((nft) => {
          if (!nft) {
            return null;
          }

          return <NftPreview key={nft.id} nftRef={nft} />;
        })}
      </StyledCollectionNfts>
    </StyledCollectionWrapper>
  );
}

const StyledCollectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledCollectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  // to appear above content underneath
  z-index: 1;
  margin-bottom: 16px;

  @media only screen and ${breakpoints.mobileLarge} {
    width: 70%;
  }

  @media only screen and ${breakpoints.tablet} {
    width: 70%;
  }
`;

const StyledCollectorsNote = styled(BodyRegular)`
  /* ensures linebreaks are reflected in UI */
  white-space: pre-line;
`;

const StyledCollectionNfts = styled.div<{ columns: number }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${({ columns }) => (columns === 1 ? 'center' : 'initial')};

  // Can't use these for now due to lack of Safari support
  // column-gap: px;
  // row-gap: px;

  @media only screen and ${breakpoints.mobileLarge} {
    margin-left: -${LAYOUT_GAP_BREAKPOINTS.mobileLarge / 2}px;
  }

  @media only screen and ${breakpoints.desktop} {
    margin-left: -${LAYOUT_GAP_BREAKPOINTS.desktop / 2}px;
  }
`;

export default UserGalleryCollection;
