import { useSetContentIsLoaded } from 'contexts/shimmer/ShimmerContext';
import styled from 'styled-components';
// import { Nft } from 'types/Nft';
import { useEffect } from 'react';
import { graphql, useFragment } from 'react-relay';
import { NftDetailModelFragment$key } from '../../../__generated__/NftDetailModelFragment.graphql';

type Props = {
  nftRef: NftDetailModelFragment$key;
};

// TODO: Clean this up once fixed
// https://github.com/google/model-viewer/issues/1502

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerJSX &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface ModelViewerJSX {
  src: string;
  poster?: string;
  class: string;
}

function NftDetailModel({ nftRef }: Props) {
  const setContentIsLoaded = useSetContentIsLoaded();
  useEffect(setContentIsLoaded, [setContentIsLoaded]);

  const { modelUrl } = useFragment(
    graphql`
      fragment NftDetailModelFragment on ThreeDModelNft {
        modelUrl
      }
    `,
    nftRef
  );

  return (
    <StyledNftDetailModel>
      <model-viewer class="model-viewer" auto-rotate camera-controls src={modelUrl ?? ''} />
    </StyledNftDetailModel>
  );
}

const StyledNftDetailModel = styled.div`
  width: 100%;
  height: 100%;
`;

export default NftDetailModel;
