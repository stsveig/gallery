import { Heading, BodyRegular } from 'components/core/Text/Text';
import Spacer from 'components/core/Spacer/Spacer';

import colors from 'components/core/colors';
import breakpoints, { size } from 'components/core/breakpoints';
import styled from 'styled-components';
// import { Nft, Owner } from 'types/Nft';
import Markdown from 'components/core/Markdown/Markdown';
// import { useMemo } from 'react';
import NftAdditionalDetails from './NftAdditionalDetails';
import { fullPageHeightWithoutNavbarAndFooter } from 'components/core/Page/constants';
import { useBreakpoint } from 'hooks/useWindowSize';
import { graphql, useFragment } from 'react-relay';
import { NftDetailTextFragment$key } from '../../../__generated__/NftDetailTextFragment.graphql';
import { NftDetailTextOwnerLinkFragment$key } from '../../../__generated__/NftDetailTextOwnerLinkFragment.graphql';

type Props = {
  nftRef: NftDetailTextFragment$key;
};

function NftDetailText({ nftRef }: Props) {
  // const currentOwner = useMemo((): Owner => {
  //   const owners = nft.ownership_history?.owners;
  //   return owners?.length > 0 ? owners[0] : {};
  // }, [nft]);

  const nft = useFragment(
    graphql`
      fragment NftDetailTextFragment on NftInterface {
        __typename
        name
        tokenCollectionName
        description
        creatorName
        creatorAddress
        ...NftDetailTextOwnerLinkFragment
        ...NftAdditionalDetailsFragment
      }
    `,
    nftRef
  );

  const breakpoint = useBreakpoint();
  const horizontalLayout = breakpoint === size.desktop || breakpoint === size.tablet;

  return (
    <StyledDetailLabel horizontalLayout={horizontalLayout}>
      <Heading>{nft.name}</Heading>
      <Spacer height={16} />
      <BodyRegular>{nft.tokenCollectionName}</BodyRegular>
      <Spacer height={16} />
      <StyledNftDescription color={colors.gray50}>
        <Markdown text={nft.description ?? ''} />
      </StyledNftDescription>
      <Spacer height={32} />
      <BodyRegular color={colors.gray50}>Owned By</BodyRegular>
      {/* <NftOwnerLink owner={currentOwner} ownerAddress={nft.owner_address} /> */}
      <NftOwnerLink nftRef={nft} />
      <Spacer height={16} />
      <BodyRegular color={colors.gray50}>Created By</BodyRegular>
      <BodyRegular>{nft.creatorName ?? nft.creatorAddress}</BodyRegular>
      <Spacer height={32} />
      <NftAdditionalDetails nftRef={nft} />
    </StyledDetailLabel>
  );
}

type NftOwnerProps = {
  nftRef: NftDetailTextOwnerLinkFragment$key;
  // owner: Owner;
  // ownerAddress: string;
};

function NftOwnerLink({ nftRef }: NftOwnerProps) {
  const { owner } = useFragment(
    graphql`
      fragment NftDetailTextOwnerLinkFragment on NftInterface {
        owner {
          __typename
          ... on Wallet {
            address
          }
          ... on GalleryUser {
            username
          }
        }
      }
    `,
    nftRef
  );

  // if (owner.username) {
  if (owner?.__typename === 'GalleryUser') {
    return (
      <StyledLink href={`/${owner.username}`}>
        <BodyRegular>{owner.username}</BodyRegular>
      </StyledLink>
    );
  }

  // use the ownership_history owner's address, fallback to the nft owner address
  // const address = owner?.address ?? ownerAddress;
  if (owner?.__typename === 'Wallet') {
    return (
      <StyledLink
        href={`https://etherscan.io/address/${owner.address}`}
        target="_blank"
        rel="noreferrer"
      >
        <BodyRegular>{owner.address}</BodyRegular>
      </StyledLink>
    );
  }

  // TODO: pair with team to better understand fallbacks requirments
  return null;
}

const StyledDetailLabel = styled.div<{ horizontalLayout: boolean }>`
  display: block;
  max-width: 296px;
  min-width: 296px;
  word-wrap: break-word;

  ${({ horizontalLayout }) =>
    horizontalLayout
      ? `
    max-height: ${fullPageHeightWithoutNavbarAndFooter};
    overflow: scroll;
    padding-right: 16px;
    `
      : `
      margin: 40px 0px;
    `}

  @media only screen and ${breakpoints.tablet} {
    margin-left: 72px;
    margin-top: 0;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledNftDescription = styled(BodyRegular)`
  /* ensures linebreaks are reflected in UI */
  white-space: pre-line;
`;

export default NftDetailText;
