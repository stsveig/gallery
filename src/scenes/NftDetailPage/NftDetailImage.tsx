import { size } from 'components/core/breakpoints';
import ImageWithLoading from 'components/ImageWithLoading/ImageWithLoading';
import { useBreakpoint } from 'hooks/useWindowSize';
import { graphql, useFragment } from 'react-relay';

//  final imageUrl should come from the backend
import { getResizedImageUrlWithFallback } from 'utils/nft';
import { NftDetailImageFragment$key } from '../../../__generated__/NftDetailImageFragment.graphql';

type Props = {
  nftRef: NftDetailImageFragment$key;
};

export function NftDetailImage({ nftRef }: Props) {
  const { imageUrl, name } = useFragment(
    graphql`
      fragment NftDetailImageFragment on ImageNft {
        imageUrl
        name
      }
    `,
    nftRef
  );

  const breakpoint = useBreakpoint();
  return (
    <ImageWithLoading
      src={getResizedImageUrlWithFallback(imageUrl, 1200)}
      alt={name ?? ''}
      widthType="maxWidth"
      heightType={breakpoint === size.desktop ? 'maxHeightScreen' : undefined}
    />
  );
}
