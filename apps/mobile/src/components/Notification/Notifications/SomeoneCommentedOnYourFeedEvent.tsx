import { useMemo } from 'react';
import { Text, View } from 'react-native';
import { useFragment } from 'react-relay';
import { graphql } from 'relay-runtime';

import { Typography } from '~/components/Typography';
import { SomeoneCommentedOnYourFeedEventFragment$key } from '~/generated/SomeoneCommentedOnYourFeedEventFragment.graphql';

type SomeoneCommentedOnYourFeedEventProps = {
  notificationRef: SomeoneCommentedOnYourFeedEventFragment$key;
};

export function SomeoneCommentedOnYourFeedEvent({
  notificationRef,
}: SomeoneCommentedOnYourFeedEventProps) {
  const notification = useFragment(
    graphql`
      fragment SomeoneCommentedOnYourFeedEventFragment on SomeoneCommentedOnYourFeedEventNotification {
        __typename

        comment {
          commenter {
            username
          }
          comment
        }

        feedEvent {
          eventData {
            ... on CollectionCreatedFeedEventData {
              __typename
              collection {
                __typename
                name
              }
            }

            ... on CollectorsNoteAddedToCollectionFeedEventData {
              __typename
              collection {
                __typename
                name
              }
            }

            ... on TokensAddedToCollectionFeedEventData {
              __typename
              collection {
                __typename
                name
              }
            }

            ... on CollectionUpdatedFeedEventData {
              __typename
              collection {
                __typename
                name
              }
            }
          }
        }
      }
    `,
    notificationRef
  );

  const eventType = notification.feedEvent?.eventData?.__typename;

  const verb = useMemo(() => {
    switch (eventType) {
      case 'CollectionCreatedFeedEventData':
      case 'TokensAddedToCollectionFeedEventData':
        return 'commented on your additions to';
      case 'CollectorsNoteAddedToCollectionFeedEventData':
        return 'commented on your note on';
      case 'CollectionUpdatedFeedEventData':
        return 'commented on your updates to';
      default:
        return 'commented on your updates to';
    }
  }, [eventType]);

  // @ts-expect-error: property `collection` does not exist on type { readonly __typename: "%other" };
  const collection = notification.feedEvent?.eventData?.collection;

  return (
    <View className="flex space-y-2">
      <Text>
        <Typography
          font={{
            family: 'ABCDiatype',
            weight: 'Bold',
          }}
          className="text-sm"
        >
          {notification.comment?.commenter ? notification.comment?.commenter.username : 'Someone'}
        </Typography>
        {` ${verb} `}
        {collection ? (
          <Typography
            font={{
              family: 'ABCDiatype',
              weight: 'Bold',
            }}
            className="text-sm underline"
          >
            {collection.name}
          </Typography>
        ) : (
          <Text>your collection</Text>
        )}
      </Text>

      <View className="ml-4 border-l-2 border-[#d9d9d9] pl-2">
        <Text>{notification.comment?.comment ?? ''}</Text>
      </View>
    </View>
  );
}