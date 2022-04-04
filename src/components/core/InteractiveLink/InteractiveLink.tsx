import { ReactNode, useCallback } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useTrack } from 'contexts/analytics/AnalyticsContext';
import { BODY_FONT_FAMILY } from '../Text/Text';
import colors from '../colors';
import transitions from '../transitions';

type Props = {
  to?: string;
  href?: string;
  children: ReactNode;
  size?: string; // 'M', 'L', 'XL'
};

export default function InteractiveLink({ to, href, children }: Props) {
  const track = useTrack();

  const handleClick = useCallback(() => {
    track('Link Click', {
      to: to || href,
    });
  }, []);

  if (!to && !href) {
    console.error('no link provided for InteractiveLink');
  }

  if (to) {
    return (
      <Link href={to} passHref>
        <StyledAnchor onClick={handleClick}>{children}</StyledAnchor>
      </Link>
    );
  }

  if (href) {
    return (
      <StyledAnchor href={href} target="_blank" rel="noreferrer" onClick={handleClick}>
        {children}
      </StyledAnchor>
    );
  }

  return null;
}

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: underline;
`;

const StyledAnchor = styled.a`
  color: inherit;
  text-decoration: underline;
  font-family: ${BODY_FONT_FAMILY};
  font-size: 14px;
  line-height: 18px;
  color: ${colors.shadow};
  transition: color ${transitions.cubic};

  &:hover {
    text-decoration: none;
    color: ${colors.offBlack};
  }
`;