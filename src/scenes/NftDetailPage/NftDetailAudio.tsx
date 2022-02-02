import styled from 'styled-components';
import ImageWithLoading from 'components/ImageWithLoading/ImageWithLoading';
// import { Nft } from 'types/Nft';
import { useFragment } from 'react-relay';
import { NftDetailAudioFragment$key } from '../../../__generated__/NftDetailAudioFragment.graphql';

type Props = {
  nftRef: NftDetailAudioFragment$key;
};

const FALLBACK_URL = 'https://i.ibb.co/q7DP0Dz/no-image.png';

function NftDetailAudio({ nftRef }: Props) {
  const { imageUrl, audioUrl, name } = useFragment(
    graphql`
      fragment NftDetailAudioFragment on AudioNft {
        audioUrl
        name
        imageUrl
      }
    `,
    nftRef
  );

  return (
    <StyledAudioContainer>
      <ImageWithLoading src={imageUrl ?? FALLBACK_URL} alt={name ?? ''} />
      <StyledAudio controls loop controlsList="nodownload" preload="none" src={audioUrl ?? ''} />
    </StyledAudioContainer>
  );
}

const StyledAudioContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledAudio = styled.audio`
  width: 100%;
  height: 32px;
`;

export default NftDetailAudio;
