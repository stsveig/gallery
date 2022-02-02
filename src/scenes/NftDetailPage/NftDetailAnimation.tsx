import { useSetContentIsLoaded } from 'contexts/shimmer/ShimmerContext';
import styled from 'styled-components';
// import { Nft } from 'types/Nft';

import { graphql, useFragment } from 'react-relay';
import { NftDetailAnimationFragment$key } from '../../../__generated__/NftDetailAnimationFragment.graphql';

type Props = {
  nftRef: NftDetailAnimationFragment$key;
};

function NftDetailAnimation({ nftRef }: Props) {
  const setContentIsLoaded = useSetContentIsLoaded();

  const { iframeUrl } = useFragment(
    graphql`
      fragment NftDetailAnimationFragment on IFrameNft {
        __typename
        iframeUrl
      }
    `,
    nftRef
  );

  return (
    <StyledNftDetailAnimation>
      <StyledIframe src={iframeUrl ?? ''} onLoad={setContentIsLoaded} />
    </StyledNftDetailAnimation>
  );
}

const StyledNftDetailAnimation = styled.div`
  width: 100%;
`;
const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  min-height: 500px;
`;

export default NftDetailAnimation;
