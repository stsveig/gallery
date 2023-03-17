import { useCallback, useMemo } from 'react';
import { graphql, usePaginationFragment } from 'react-relay';
import { AutoSizer, Index, InfiniteLoader, List, ListRowRenderer } from 'react-virtualized';
import styled from 'styled-components';

import { VStack } from '~/components/core/Spacer/Stack';
import { SharedCommunitiesListFragment$key } from '~/generated/SharedCommunitiesListFragment.graphql';
import { useIsMobileWindowWidth } from '~/hooks/useWindowSize';
import { getUrlForCommunity } from '~/utils/getCommunityUrlForToken';
import unescape from '~/utils/unescape';

import { COMMUNITIES_PER_PAGE } from '../UserSharedCommunities';
import PaginatedListRow from './SharedInfoListRow';

type Props = {
  queryRef: SharedCommunitiesListFragment$key;
};
export default function SharedCommunitiesList({ queryRef }: Props) {
  const { data, loadNext, hasNext } = usePaginationFragment(
    graphql`
      fragment SharedCommunitiesListFragment on GalleryUser
      @refetchable(queryName: "RefetchableSharedCommunitiesListFragment") {
        sharedCommunities(first: $sharedCommunitiesFirst, after: $sharedCommunitiesAfter)
          @connection(key: "SharedCommunitiesListFragment_sharedCommunities") {
          edges {
            node {
              __typename
              name
              description
              contractAddress {
                address
              }
              chain
            }
          }
        }
      }
    `,
    queryRef
  );

  const sharedCommunities = useMemo(
    () => data.sharedCommunities?.edges ?? [],
    [data.sharedCommunities?.edges]
  );

  const rowCount = hasNext ? sharedCommunities.length + 1 : sharedCommunities.length;

  const handleLoadMore = useCallback(async () => {
    loadNext(COMMUNITIES_PER_PAGE);
  }, [loadNext]);

  const isRowLoaded = ({ index }: { index: number }) =>
    !hasNext || index < sharedCommunities.length;

  const getRowHeight = useCallback(
    ({ index }: Index) => {
      const community = sharedCommunities[index]?.node;
      if (!community) {
        return 0;
      }

      const unescapedDescription = community.description ? unescape(community.description) : '';
      const descriptionFirstLine = unescapedDescription.split('\n')[0] ?? '';

      if (!community.name && !descriptionFirstLine.length) {
        return 0;
      }

      if (descriptionFirstLine.length === 0) {
        return 40;
      }

      return 56;
    },
    [sharedCommunities]
  );

  const rowRenderer = useCallback<ListRowRenderer>(
    ({ index, key, style }: { index: number; key: string; style: React.CSSProperties }) => {
      const community = sharedCommunities[index]?.node;
      if (!community) {
        return null;
      }

      const unescapedDescription = community.description ? unescape(community.description) : '';
      const descriptionFirstLine = unescapedDescription.split('\n')[0] ?? '';

      const communityUrlPath =
        community.contractAddress?.address && community.chain
          ? getUrlForCommunity(community.contractAddress?.address, community.chain)
          : null;

      if (!community.name && !descriptionFirstLine) {
        return null;
      }

      return (
        <div style={style} key={key}>
          <PaginatedListRow
            title={community.name ?? ''}
            subTitle={descriptionFirstLine}
            href={communityUrlPath}
          />
        </div>
      );
    },
    [sharedCommunities]
  );

  const isMobile = useIsMobileWindowWidth();

  return (
    <StyledList fullscreen={isMobile} gap={24}>
      <AutoSizer>
        {({ width, height }) => (
          <InfiniteLoader
            isRowLoaded={isRowLoaded}
            loadMoreRows={handleLoadMore}
            rowCount={rowCount}
          >
            {({ onRowsRendered, registerChild }) => (
              <List
                ref={registerChild}
                onRowsRendered={onRowsRendered}
                rowRenderer={rowRenderer}
                width={width}
                height={height}
                rowHeight={getRowHeight}
                rowCount={sharedCommunities.length}
              />
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>

      <VStack></VStack>
    </StyledList>
  );
}

const StyledList = styled(VStack)<{ fullscreen: boolean }>`
  width: 375px;
  max-width: 375px;
  margin: 4px;
  height: ${({ fullscreen }) => (fullscreen ? '100%' : '640px')};
`;