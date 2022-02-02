import { useSetContentIsLoaded } from 'contexts/shimmer/ShimmerContext';
// import { useMemo } from 'react';
import styled from 'styled-components';
// import { Nft } from 'types/Nft';
// import { getVideoUrl } from 'utils/nft';

import { graphql, useFragment } from 'react-relay';
import { NftDetailVideoFragment$key } from '../../../__generated__/NftDetailVideoFragment.graphql';

type Props = {
  nftRef: NftDetailVideoFragment$key;
  maxHeight: number;
};

function NftDetailVideo({ nftRef, maxHeight }: Props) {
  const setContentIsLoaded = useSetContentIsLoaded();
  // const assetUrl = useMemo(() => getVideoUrl(nft), [nft]);

  const { videoUrl } = useFragment(
    graphql`
      fragment NftDetailVideoFragment on VideoNft {
        videoUrl
      }
    `,
    nftRef
  );

  return (
    <StyledVideo
      src={videoUrl ?? ''}
      muted
      autoPlay
      loop
      playsInline
      controls
      onLoadStart={setContentIsLoaded}
      maxHeight={maxHeight}
    />
  );
}

const StyledVideo = styled.video<{ maxHeight: number }>`
  width: 100%;
  border: none;

  max-height: ${({ maxHeight }) => maxHeight}px;
`;

export default NftDetailVideo;
