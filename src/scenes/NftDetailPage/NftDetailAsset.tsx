import breakpoints, { size } from 'components/core/breakpoints';
// import { NftMediaType } from 'components/core/enums';
import styled from 'styled-components';

// import ImageWithLoading from 'components/ImageWithLoading/ImageWithLoading';
// import { Nft } from 'types/Nft';
// import { getMediaType, getResizedNftImageUrlWithFallback } from 'utils/nft';
import { GLOBAL_FOOTER_HEIGHT, GLOBAL_NAVBAR_HEIGHT } from 'components/core/Page/constants';
import NftDetailAnimation from './NftDetailAnimation';
import NftDetailVideo from './NftDetailVideo';
import NftDetailAudio from './NftDetailAudio';
import NftDetailModel from './NftDetailModel';
import { useBreakpoint } from 'hooks/useWindowSize';
// import { useMemo } from 'react';
import { useContentState } from 'contexts/shimmer/ShimmerContext';

import { graphql, useFragment } from 'react-relay';
import { NftDetailAssetComponentFragment$key } from '../../../__generated__/NftDetailAssetComponentFragment.graphql';
import { NftDetailAssetFragment$key } from '../../../__generated__/NftDetailAssetFragment.graphql';
import { NftDetailImage } from './NftDetailImage';

type NftDetailAssetComponentProps = {
  nftRef: NftDetailAssetComponentFragment$key;
  maxHeight: number;
};

function NftDetailAssetComponent({ nftRef, maxHeight }: NftDetailAssetComponentProps) {
  // const assetType = getMediaType(nft);
  // const breakpoint = useBreakpoint();

  const nft = useFragment(
    graphql`
      fragment NftDetailAssetComponentFragment on Nft {
        __typename
        ... on ImageNft {
          ...NftDetailImageFragment
        }
        ... on AudioNft {
          ...NftDetailAudioFragment
        }
        ... on VideoNft {
          ...NftDetailVideoFragment
        }
        ... on IFrameNft {
          ...NftDetailAnimationFragment
        }
        ... on ThreeDModelNft {
          __typename
          ...NftDetailModelFragment
        }
      }
    `,
    nftRef
  );
  // moved to NftDetailImage.tsx
  // const resizableImage = useMemo(
  //   () => (
  //     <ImageWithLoading
  //       src={getResizedNftImageUrlWithFallback(nft, 1200)}
  //       alt={nft.name}
  //       widthType="maxWidth"
  //       heightType={breakpoint === size.desktop ? 'maxHeightScreen' : undefined}
  //     />
  //   ),
  //   [breakpoint, nft]
  // );

  switch (nft.__typename) {
    case 'ImageNft':
      return <NftDetailImage nftRef={nft} />;
    case 'AudioNft':
      return <NftDetailAudio nftRef={nft} />;
    case 'VideoNft':
      return <NftDetailVideo nftRef={nft} maxHeight={maxHeight} />;
    case 'IFrameNft':
      return <NftDetailAnimation nftRef={nft} />;
    case 'ThreeDModelNft':
      return <NftDetailModel nftRef={nft} />;
    default:
      // TODO: handle it better
      return null;
  }
}

type Props = {
  nftRef: NftDetailAssetFragment$key;
};

// number that determines a reasonable max height for the displayed NFT
let heightWithoutNavAndFooterGutters: number;

if (typeof window !== 'undefined') {
  heightWithoutNavAndFooterGutters =
    window.screen.availHeight - 2 * (GLOBAL_NAVBAR_HEIGHT + GLOBAL_FOOTER_HEIGHT);
}

function NftDetailAsset({ nftRef }: Props) {
  const maxHeight = Math.min(
    heightWithoutNavAndFooterGutters,
    // TODO: this number should be determined by the dimensions of the media itself. once the media is fetched,
    // we should grab its dimensions and set it on the shimmer context. this will allow us to display very large
    // NFTs on very large screens
    600
  );

  const nft = useFragment(
    graphql`
      fragment NftDetailAssetFragment on Nft {
        __typename
        ...NftDetailAssetComponentFragment
      }
    `,
    nftRef
  );

  const { aspectRatioType } = useContentState();
  const breakpoint = useBreakpoint();

  // We do not want to enforce square aspect ratio for iframes https://github.com/gallery-so/gallery/pull/536
  const isIframe = nft.__typename === 'IFrameNft';
  const shouldEnforceSquareAspectRatio =
    breakpoint === size.desktop ||
    breakpoint === size.tablet ||
    (aspectRatioType !== 'wide' && !isIframe);

  return (
    <StyledAssetContainer
      maxHeight={maxHeight}
      shouldEnforceSquareAspectRatio={shouldEnforceSquareAspectRatio}
    >
      <NftDetailAssetComponent nftRef={nft} maxHeight={maxHeight} />
    </StyledAssetContainer>
  );
}

type AssetContainerProps = {
  maxHeight: number;
  shouldEnforceSquareAspectRatio: boolean;
};

const StyledAssetContainer = styled.div<AssetContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ shouldEnforceSquareAspectRatio }) =>
    shouldEnforceSquareAspectRatio ? 'aspect-ratio: 1' : ''};

  @media only screen and ${breakpoints.desktop} {
    width: ${({ maxHeight }) => maxHeight}px;
    height: ${({ maxHeight }) => maxHeight}px;
  }
`;

export default NftDetailAsset;
