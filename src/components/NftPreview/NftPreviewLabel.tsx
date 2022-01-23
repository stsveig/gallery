import colors from 'components/core/colors';
import styled from 'styled-components';
import { BodyRegular } from 'components/core/Text/Text';
import { graphql, useFragment } from 'react-relay';
import { NftPreviewLabel$key } from '../../../__generated__/NftPreviewLabel.graphql';

type Props = {
  nftRef: NftPreviewLabel$key;
  className?: string;
};

function NftPreviewLabel({ nftRef, className }: Props) {
  const { name, tokenCollectionName } = useFragment(
    graphql`
      fragment NftPreviewLabel on Nft {
        ... on NftInterface {
          name
          tokenCollectionName
        }
      }
    `,
    nftRef
  );

  return (
    <StyledNftPreviewLabel className={className}>
      <StyledBodyRegular color={colors.white}>{name}</StyledBodyRegular>
      <StyledBodyRegular color={colors.white}>{tokenCollectionName}</StyledBodyRegular>
    </StyledNftPreviewLabel>
  );
}

export const StyledNftPreviewLabel = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  text-align: right;
  padding: 8px;
  z-index: 10;
  justify-content: end;
  height: 100%;
  // this helps position the label correctly in Safari
  // Safari differs from Chrome in how it renders height: 100% on position: absolute elements
  min-height: 56px;
`;

const StyledBodyRegular = styled(BodyRegular)`
  margin: 0;
`;

export default NftPreviewLabel;
