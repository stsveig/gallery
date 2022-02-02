import GalleryRoute from 'scenes/_Router/GalleryRoute';
import NftDetailPageScene from 'scenes/NftDetailPage/NftDetailPage';
// import { GetServerSideProps } from 'next';
import GalleryRedirect from 'scenes/_Router/GalleryRedirect';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { NftIdQuery } from '../../../../__generated__/NftIdQuery.graphql';

type NftDetailPageProps = {
  nftId: string;
};

export default function NftDetailPage({ nftId }: NftDetailPageProps) {
  const { nftById } = useLazyLoadQuery<NftIdQuery>(
    graphql`
      query NftIdQuery($nftId: String!) {
        nftById(nftId: $nftId) {
          __typename
          ... on NotFound {
            message
          }
          ... on GalleryNft {
            __typename
            ...NftDetailPageFragment
          }
        }
      }
    `,
    { nftId }
  );

  if (nftById?.__typename === 'GalleryNft') {
    return <GalleryRoute element={<NftDetailPageScene nftRef={nftById} />} />;
  }

  return <GalleryRedirect to="/" />;
}

// export const getServerSideProps: GetServerSideProps<NftDetailPageProps> = async ({ params }) => ({
//   props: {
//     nftId: params?.nftId ? (params.nftId as string) : undefined,
//   },
// });
