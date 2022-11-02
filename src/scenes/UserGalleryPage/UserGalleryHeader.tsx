import { ReactNode, useCallback, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import unescape from 'utils/unescape';
import { BaseM, TitleL, TitleM } from 'components/core/Text/Text';
import Markdown from 'components/core/Markdown/Markdown';
import MobileLayoutToggle from './MobileLayoutToggle';
import { DisplayLayout } from 'components/core/enums';
import breakpoints from 'components/core/breakpoints';
import { useFragment } from 'react-relay';
import { graphql } from 'relay-runtime';
import { UserGalleryHeaderFragment$key } from '__generated__/UserGalleryHeaderFragment.graphql';
import TextButton from 'components/core/Button/TextButton';
import { useTrack } from 'contexts/analytics/AnalyticsContext';
import { StyledAnchor } from 'components/core/InteractiveLink/InteractiveLink';
import LinkToNftDetailView from 'scenes/NftDetailPage/LinkToNftDetailView';
import useIs3acProfilePage from 'hooks/oneOffs/useIs3acProfilePage';
import { HStack, VStack } from 'components/core/Spacer/Stack';
import Badge from 'components/Badge/Badge';
import { useIsMobileWindowWidth } from 'hooks/useWindowSize';

type Props = {
  userRef: UserGalleryHeaderFragment$key;
  showMobileLayoutToggle: boolean;
  mobileLayout: DisplayLayout;
  setMobileLayout: (mobileLayout: DisplayLayout) => void;
};

function UserGalleryHeader({
  userRef,
  showMobileLayoutToggle,
  mobileLayout,
  setMobileLayout,
}: Props) {
  const user = useFragment(
    graphql`
      fragment UserGalleryHeaderFragment on GalleryUser {
        username
        dbid
        bio
        badges {
          name
          imageURL
          ...BadgeFragment
        }
      }
    `,
    userRef
  );

  const { username, bio, badges } = user;

  const isMobile = useIsMobileWindowWidth();
  const is3ac = useIs3acProfilePage();

  const unescapedBio = useMemo(() => (bio ? unescape(bio) : ''), [bio]);

  const userBadges = useMemo(() => {
    if (!badges) return [];

    return badges.filter((badge) => badge && badge?.imageURL);
  }, [badges]);

  const [showMore, setShowMore] = useState(false);
  const handleBioClick = useCallback(() => {
    setShowMore((previous) => !previous);
  }, []);

  return (
    <StyledUserGalleryHeader gap={2}>
      <HStack align="center" gap={6}>
        {isMobile ? (
          <StyledUsernameMobile>
            {is3ac ? 'The Unofficial 3AC Gallery' : username}
          </StyledUsernameMobile>
        ) : (
          <StyledUsername>{is3ac ? 'The Unofficial 3AC Gallery' : username}</StyledUsername>
        )}

        {userBadges.map((badge) => (badge ? <Badge key={badge.name} badgeRef={badge} /> : null))}
      </HStack>

      <HStack align="flex-start" justify="space-between">
        <HStack align="center" gap={8} grow>
          <StyledUserDetails>
            {is3ac ? (
              <ExpandableBio text={unescapedBio} />
            ) : (
              <StyledBioWrapper showMore={showMore} onClick={handleBioClick}>
                <Markdown text={unescapedBio} />
              </StyledBioWrapper>
            )}
          </StyledUserDetails>
        </HStack>

        {showMobileLayoutToggle && (
          <StyledButtonsWrapper gap={8} align="center" justify="space-between">
            <MobileLayoutToggle mobileLayout={mobileLayout} setMobileLayout={setMobileLayout} />
          </StyledButtonsWrapper>
        )}
      </HStack>
    </StyledUserGalleryHeader>
  );
}

const ExpandableBio = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncated = useMemo(() => {
    return text.split('\n').slice(0, 5).join('\n');
  }, [text]);

  const track = useTrack();

  const handleClick = useCallback(() => {
    setIsExpanded(true);
    track('Read More Button Click: User Bio');
  }, [track]);

  return (
    <VStack gap={12}>
      <BaseM>
        <Markdown
          text={isExpanded ? text : truncated}
          CustomInternalLinkComponent={NftDetailViewer}
        />
      </BaseM>
      {isExpanded ? null : <TextButton text="Read More" onClick={handleClick} />}
    </VStack>
  );
};

type NftDetailViewerProps = {
  href: string;
  children?: ReactNode;
};

const NftDetailViewer = ({ href, children }: NftDetailViewerProps) => {
  const [, username, collectionId, tokenId] = href.split('/');
  return (
    <LinkToNftDetailView
      username={username ?? ''}
      collectionId={collectionId}
      tokenId={tokenId}
      originPage="gallery"
    >
      <StyledAnchor>{children}</StyledAnchor>
    </LinkToNftDetailView>
  );
};

const StyledBioWrapper = styled(BaseM)<{ showMore: boolean }>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${({ showMore }) =>
    showMore
      ? css`
          -webkit-line-clamp: unset;
        `
      : css`
          // We only care about line clamping on mobile
          @media only screen and ${breakpoints.mobileLarge} {
            -webkit-line-clamp: unset;
          }

          -webkit-line-clamp: 2;
        `}
`;

const StyledUsername = styled(TitleL)`
  overflow-wrap: break-word;
`;

const StyledUsernameMobile = styled(TitleM)`
  font-style: normal;
  overflow-wrap: break-word;
`;

const StyledUserGalleryHeader = styled(VStack)`
  width: 100%;
`;

const StyledButtonsWrapper = styled(HStack)`
  height: 36px;
  @media only screen and ${breakpoints.mobile} {
    height: 28px;
  }
`;

const StyledUserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  word-break: break-word;

  @media only screen and ${breakpoints.tablet} {
    width: 70%;
  }
`;

export default UserGalleryHeader;
