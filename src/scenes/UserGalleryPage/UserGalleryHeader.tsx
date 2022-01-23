import { useMemo } from 'react';
import styled from 'styled-components';
import unescape from 'lodash.unescape';
import { Subdisplay, BodyRegular } from 'components/core/Text/Text';
import Spacer from 'components/core/Spacer/Spacer';
import colors from 'components/core/colors';
import Markdown from 'components/core/Markdown/Markdown';
import { graphql, useFragment } from 'react-relay';
import { UserGalleryHeaderFragment$key } from '../../../__generated__/UserGalleryHeaderFragment.graphql';

type Props = {
  userRef: UserGalleryHeaderFragment$key;
};

function UserGalleryHeader({ userRef }: Props) {
  const { username, bio } = useFragment(
    graphql`
      fragment UserGalleryHeaderFragment on GalleryUser {
        username
        bio
      }
    `,
    userRef
  );

  const unescapedBio = useMemo(() => unescape(bio ?? ''), [bio]);

  return (
    <StyledUserGalleryHeader>
      <Subdisplay>{username}</Subdisplay>
      <Spacer height={8} />
      <StyledUserDetails>
        <StyledBio color={colors.gray50}>
          <Markdown text={unescapedBio} />
        </StyledBio>
      </StyledUserDetails>
    </StyledUserGalleryHeader>
  );
}

const StyledUserGalleryHeader = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const StyledUserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  word-break: break-word;
`;

const StyledBio = styled(BodyRegular)`
  /* ensures linebreaks are reflected in UI */
  white-space: pre-line;
`;

export default UserGalleryHeader;
