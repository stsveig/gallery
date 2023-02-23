import { useCallback } from 'react';
import { graphql, useFragment } from 'react-relay';
import styled from 'styled-components';

import breakpoints from '~/components/core/breakpoints';
import { StyledImageWithLoading } from '~/components/LoadingAsset/ImageWithLoading';
import NftPreview from '~/components/NftPreview/NftPreview';
import { useModalActions } from '~/contexts/modal/ModalContext';
import ShimmerProvider from '~/contexts/shimmer/ShimmerContext';
import { FeedEventNftPreviewWrapperFragment$key } from '~/generated/FeedEventNftPreviewWrapperFragment.graphql';
import NftDetailView from '~/scenes/NftDetailPage/NftDetailView';

type Props = {
  tokenRef: FeedEventNftPreviewWrapperFragment$key;
  maxWidth: number;
  maxHeight: number;
};

// simple wrapper component so the child can pull state from ShimmerProvider
function NftPreviewWithShimmer(props: Props) {
  return (
    <ShimmerProvider>
      <FeedEventNftPreviewWrapper {...props} />
    </ShimmerProvider>
  );
}
function FeedEventNftPreviewWrapper({ tokenRef, maxWidth, maxHeight }: Props) {
  const token = useFragment(
    graphql`
      fragment FeedEventNftPreviewWrapperFragment on CollectionToken {
        ...NftPreviewFragment
        ...NftDetailViewFragment
      }
    `,
    tokenRef
  );

  const { showModal } = useModalActions();

  const handleClick = useCallback(() => {
    showModal({
      content: (
        <StyledNftDetailViewPopover>
          <NftDetailView authenticatedUserOwnsAsset={false} queryRef={token} />
        </StyledNftDetailViewPopover>
      ),
      isFullPage: true,
    });
  }, [showModal, token]);

  return (
    <StyledNftPreviewWrapper
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      onClick={(e) => e.stopPropagation()}
    >
      <NftPreview
        tokenRef={token}
        previewSize={maxWidth}
        onClick={handleClick}
        disableLiverender
        isInFeedEvent
      />
    </StyledNftPreviewWrapper>
  );
}

const StyledNftPreviewWrapper = styled.div<{ maxWidth: number; maxHeight: number }>`
  display: flex;
  width: 100%;

  min-width: 150px;

  ${StyledImageWithLoading} {
    max-height: calc((100vw - 64px) / 3);
    max-width: ${({ maxWidth }) => maxWidth}px;
    max-height: ${({ maxHeight }) => maxHeight}px;
  }
`;

const StyledNftDetailViewPopover = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 80px 0;

  @media only screen and ${breakpoints.desktop} {
    padding: 0;
  }
`;

export default NftPreviewWithShimmer;