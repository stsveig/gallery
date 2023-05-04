import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { Suspense, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { graphql, useFragment, useLazyLoadQuery } from 'react-relay';

import { USERS_PER_PAGE } from '~/components/Trending/constants';
import { LoadingTrendingPage } from '~/components/Trending/LoadingTrendingPage';
import { SuggestedSection } from '~/components/Trending/SuggestedSection';
import { TrendingSection } from '~/components/Trending/TrendingSection';
import { TwitterSection } from '~/components/Trending/TwitterSection';
import { ExploreScreenFragment$key } from '~/generated/ExploreScreenFragment.graphql';
import { ExploreScreenQuery } from '~/generated/ExploreScreenQuery.graphql';
import { SuggestedSectionQueryFragment$key } from '~/generated/SuggestedSectionQueryFragment.graphql';
import { TrendingSectionFragment$key } from '~/generated/TrendingSectionFragment.graphql';
import { TrendingSectionQueryFragment$key } from '~/generated/TrendingSectionQueryFragment.graphql';
import { TwitterSectionQueryFragment$key } from '~/generated/TwitterSectionQueryFragment.graphql';

type ExploreScreenInnerProps = {
  queryRef: ExploreScreenFragment$key;
};

function ExploreScreenInner({ queryRef }: ExploreScreenInnerProps) {
  const query = useFragment(
    graphql`
      fragment ExploreScreenFragment on Query {
        trendingUsers5Days: trendingUsers(input: { report: LAST_5_DAYS }) {
          ... on TrendingUsersPayload {
            __typename
            ...TrendingSectionFragment
          }
        }
        trendingUsersAllTime: trendingUsers(input: { report: ALL_TIME }) {
          ... on TrendingUsersPayload {
            __typename
            ...TrendingSectionFragment
          }
        }

        viewer {
          __typename
          ... on Viewer {
            socialAccounts @required(action: THROW) {
              twitter {
                __typename
              }
            }
          }
        }

        ...TrendingSectionQueryFragment
        ...SuggestedSectionQueryFragment
        ...TwitterSectionQueryFragment
      }
    `,
    queryRef
  );

  type ListItemType =
    | { kind: 'twitter'; queryRef: TwitterSectionQueryFragment$key }
    | { kind: 'suggested'; queryRef: SuggestedSectionQueryFragment$key }
    | {
        kind: 'trending-section';
        title: string;
        description: string;
        queryRef: TrendingSectionQueryFragment$key;
        userRefs: TrendingSectionFragment$key;
      };

  const renderItem = useCallback<ListRenderItem<ListItemType>>(
    ({ item }) => {
      if (item.kind === 'twitter') {
        return (
          <TwitterSection
            title="Twitter Friends"
            description="Curators you know from Twitter"
            queryRef={query}
          />
        );
      } else if (item.kind === 'suggested') {
        return (
          <SuggestedSection
            title="In your orbit"
            description="Curators you may enjoy based on your activity"
            queryRef={query}
          />
        );
      } else if (item.kind === 'trending-section') {
        return (
          <TrendingSection
            title={item.title}
            description={item.description}
            queryRef={item.queryRef}
            trendingUsersRef={item.userRefs}
          />
        );
      }

      return null;
    },
    [query]
  );

  const items = useMemo((): ListItemType[] => {
    const items: ListItemType[] = [];

    if (query.viewer?.__typename === 'Viewer') {
      if (query.viewer.socialAccounts.twitter?.__typename) {
        items.push({ kind: 'twitter', queryRef: query });
      }

      items.push({ kind: 'suggested', queryRef: query });
    }

    if (query.trendingUsers5Days?.__typename === 'TrendingUsersPayload') {
      items.push({
        kind: 'trending-section',
        title: 'Weekly leaderboard',
        description: 'Trending curators this week',
        queryRef: query,
        userRefs: query.trendingUsers5Days,
      });
    }

    if (query.trendingUsersAllTime?.__typename === 'TrendingUsersPayload') {
      items.push({
        kind: 'trending-section',
        title: 'Hall of Fame',
        description: 'Top curators with the most all-time views',
        queryRef: query,
        userRefs: query.trendingUsersAllTime,
      });
    }

    return items;
  }, [query]);

  return (
    <View className="flex-1">
      <FlashList
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={renderItem}
        data={items}
        estimatedItemSize={300}
      />
    </View>
  );
}

export function ExploreScreen() {
  const query = useLazyLoadQuery<ExploreScreenQuery>(
    graphql`
      query ExploreScreenQuery($twitterListFirst: Int!, $twitterListAfter: String) {
        ...ExploreScreenFragment
      }
    `,
    {
      twitterListFirst: USERS_PER_PAGE,
      twitterListAfter: null,
    }
  );

  return (
    <Suspense fallback={<LoadingTrendingPage />}>
      <ExploreScreenInner queryRef={query} />
    </Suspense>
  );
}