import ActionText from 'components/core/ActionText/ActionText';
import TextButton from 'components/core/Button/TextButton';
import colors from 'components/core/colors';
import Spacer from 'components/core/Spacer/Spacer';
import { BodyRegular } from 'components/core/Text/Text';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
// import { Nft } from 'types/Nft';

import { graphql, useFragment } from 'react-relay';
import { NftAdditionalDetailsFragment$key } from '../../../__generated__/NftAdditionalDetailsFragment.graphql';

type Props = {
  nftRef: NftAdditionalDetailsFragment$key;
};

// The backend converts all token IDs to hexadecimals; here, we convert back
// https://stackoverflow.com/a/53751162
const hexHandler = (str: string) => {
  if (str.length % 2) {
    str = '0' + str;
  }

  const bn = BigInt('0x' + str);
  const d = bn.toString(10);
  return d;
};

// sorry Terence for types
const getOpenseaExternalUrl = (contractAddress: string, openseaTokenId: string) => {
  // const getOpenseaExternalUrl = (nft: Nft) => {
  // const contractAddress = nft.asset_contract.address;
  const tokenId = hexHandler(openseaTokenId);

  // Allows us to get referral credit
  const ref = GALLERY_OS_ADDRESS;

  return `https://opensea.io/assets/${contractAddress}/${tokenId}?ref=${ref}`;
};

const GALLERY_OS_ADDRESS = '0x8914496dc01efcc49a2fa340331fb90969b6f1d2';

function NftAdditionalDetails({ nftRef }: Props) {
  const [showAdditionalDetails, setShowAdditionalDetails] = useState(false);
  const handleToggleClick = useCallback(() => {
    setShowAdditionalDetails((value) => !value);
  }, []);

  const nft = useFragment(
    graphql`
      fragment NftAdditionalDetailsFragment on NftInterface {
        __typename
        assetContract {
          address
        }
        openseaTokenId
        openseaExternalUrl
        externalUrl
      }
    `,
    nftRef
  );

  // Check for contract address befor rendering additional details
  const hasContractAddress = nft.assetContract?.address !== '';

  return (
    <StyledNftAdditionalDetails>
      <TextButton
        text={showAdditionalDetails ? 'Hide Details' : 'Additional Details'}
        onClick={handleToggleClick}
      />
      <Spacer height={12} />
      {showAdditionalDetails && (
        <div>
          {hasContractAddress && (
            <>
              <BodyRegular color={colors.gray50}>Contract address</BodyRegular>
              <StyledLink
                href={`https://etherscan.io/address/${nft.assetContract?.address}`}
                target="_blank"
                rel="noreferrer"
              >
                <BodyRegular>{nft.assetContract?.address}</BodyRegular>
              </StyledLink>
            </>
          )}
          <Spacer height={16} />
          <BodyRegular color={colors.gray50}>Token ID</BodyRegular>
          <BodyRegular>{hexHandler(nft.openseaTokenId ?? '')}</BodyRegular>
          <Spacer height={16} />
          <StyledLinkContainer>
            {hasContractAddress && (
              <>
                {/* TODO: plz take it to the backend */}
                <StyledLink
                  href={
                    nft.openseaExternalUrl ??
                    getOpenseaExternalUrl(
                      nft.assetContract?.address ?? '',
                      nft.openseaTokenId ?? ''
                    )
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <ActionText color={colors.gray50}>View on OpenSea</ActionText>
                </StyledLink>
                <Spacer width={16} />
              </>
            )}
            {nft?.externalUrl !== '' && (
              <StyledLink href={nft.externalUrl ?? ''} target="_blank" rel="noreferrer">
                <ActionText color={colors.gray50}>More Info</ActionText>
              </StyledLink>
            )}
          </StyledLinkContainer>
        </div>
      )}
    </StyledNftAdditionalDetails>
  );
}

const StyledNftAdditionalDetails = styled.div``;

const StyledLink = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledLinkContainer = styled.div`
  display: flex;
`;

export default NftAdditionalDetails;
