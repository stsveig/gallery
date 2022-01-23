import { NftMediaType } from 'components/core/enums';
import { useMemo } from 'react';
import styled from 'styled-components';

import ImageWithLoading from 'components/ImageWithLoading/ImageWithLoading';
import { Nft } from 'types/Nft';
import { getMediaTypeForAssetUrl, getResizedNftImageUrlWithFallback } from 'utils/nft';
import { useSetContentIsLoaded } from 'contexts/shimmer/ShimmerContext';
import { graphql, useFragment } from 'react-relay';
import { NftPreviewAssetFragment$key } from '../../../__generated__/NftPreviewAssetFragment.graphql';

type Props = {
  nftRef: NftPreviewAssetFragment$key;
  size: number;
};

function NftPreviewAsset({ nftRef, size }: Props) {
  const nft = useFragment(
    graphql`
      fragment NftPreviewAssetFragment on Nft {
        __typename
        ... on ImageNft {
          name
          imageUrl @required(action: THROW)
          ...nftGetResizedNftImageUrlWithFallbackFragment
        }
      }
    `,
    nftRef
  );

  const setContentIsLoaded = useSetContentIsLoaded();

  if (nft.__typename !== 'ImageNft') {
    return null;
  }

  // const nftAssetComponent = useMemo(() => {
  //   if (getMediaTypeForAssetUrl(nft.imageUrl) === NftMediaType.VIDEO) {
  //     return (
  //       <StyledVideo
  //         src={`${nft.image_url}#t=0.5`}
  //         onLoadStart={setContentIsLoaded}
  //         preload="metadata"
  //       />
  //     );
  //   }

  // }, [nft, setContentIsLoaded, size]);

  // return nftAssetComponent;
  return (
    <ImageWithLoading
      src={getResizedNftImageUrlWithFallback(nft, size)}
      alt={nft.name ?? 'NFT Image'}
    />
  );
}

const StyledVideo = styled.video`
  display: flex;
  width: 100%;
`;

export default NftPreviewAsset;
