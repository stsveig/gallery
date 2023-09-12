import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Linking } from 'react-native';
import { fetchQuery, graphql, useRelayEnvironment } from 'react-relay';

import { DeepLinkRegistrarAuthCheckQuery } from '~/generated/DeepLinkRegistrarAuthCheckQuery.graphql';
import { RootStackNavigatorProp } from '~/navigation/types';
import { useTrack } from '~/shared/contexts/AnalyticsContext';

export function DeepLinkRegistrar() {
  const relayEnvironment = useRelayEnvironment();
  const track = useTrack();
  const navigation = useNavigation<RootStackNavigatorProp>();

  useEffect(() => {
    async function handleDeepLinkToUrl({ url }: { url: string }) {
      track('Deep Link Opened', { url });

      const response = await fetchQuery<DeepLinkRegistrarAuthCheckQuery>(
        relayEnvironment,
        graphql`
          query DeepLinkRegistrarAuthCheckQuery {
            viewer {
              __typename
            }
          }
        `,
        {},
        { fetchPolicy: 'store-or-network' }
      ).toPromise();

      // If the user is not logged in, they cannot handle the deep links
      // This may change in the future when we supported logged out users
      if (response?.viewer?.__typename !== 'Viewer') {
        track('Deep Link Cancelled because signed out', { url });

        return;
      }

      const parsedUrl = new URL(url);

      /**
       * /mobile?marfa=true
       */
      if (parsedUrl.pathname === '/mobile' && parsedUrl.searchParams.get('event') === 'marfa') {
        navigation.navigate('MainTabs', {
          screen: 'HomeTab',
          params: {
            screen: 'Home',
            params: { screen: 'Curated', params: { showMarfaCheckIn: true } },
          },
        });
        return;
      }

      const splitBySlash = parsedUrl.pathname.split('/').filter(Boolean);

      /**
       * /post/:postId
       */
      if (parsedUrl.pathname.includes('post/')) {
        const [, maybePostId] = splitBySlash;

        if (maybePostId) {
          navigation.navigate('MainTabs', {
            screen: 'HomeTab',
            params: {
              screen: 'Post',
              params: { postId: maybePostId },
            },
          });
        }

        return;
      }

      if (splitBySlash.length === 1) {
        const [maybeUsername] = splitBySlash;

        /**
         * /:username
         */
        if (maybeUsername) {
          navigation.navigate('MainTabs', {
            screen: 'HomeTab',
            params: {
              screen: 'Profile',
              params: { username: maybeUsername },
            },
          });
        }
      } else if (splitBySlash.length === 2) {
        const [maybeUsername, maybeCollectionId] = splitBySlash;

        /**
         * /:username/:collectionId
         */
        if (maybeUsername && maybeCollectionId) {
          navigation.navigate('MainTabs', {
            screen: 'HomeTab',
            params: {
              screen: 'Collection',
              params: { collectionId: maybeCollectionId },
            },
          });
        }
      } else if (splitBySlash.length === 3) {
        const [maybeUsername, maybeCollectionIdOrGalleries, maybeTokenIdOrGalleryId] = splitBySlash;

        if (maybeUsername && maybeCollectionIdOrGalleries && maybeTokenIdOrGalleryId) {
          /**
           * /:username/galleries/:galleryId
           */
          if (maybeCollectionIdOrGalleries === 'galleries') {
            navigation.navigate('MainTabs', {
              screen: 'HomeTab',
              params: {
                screen: 'Gallery',
                params: { galleryId: maybeTokenIdOrGalleryId },
              },
            });
            /**
             * /:username/:collectionId/:tokenId
             */
          } else {
            navigation.navigate('MainTabs', {
              screen: 'HomeTab',
              params: {
                screen: 'NftDetail',
                params: {
                  tokenId: maybeTokenIdOrGalleryId,
                  collectionId: maybeCollectionIdOrGalleries,
                  cachedPreviewAssetUrl: null,
                },
              },
            });
          }
        }
      }
    }

    const listener = Linking.addEventListener('url', handleDeepLinkToUrl);

    // Make sure we handle the case where the app is on a cold start
    // and we don't receive an event.
    Linking.getInitialURL().then((maybeUrl) => {
      if (maybeUrl) {
        handleDeepLinkToUrl({ url: maybeUrl });
      }
    });

    return () => listener.remove();
  }, [navigation, relayEnvironment, track]);

  return null;
}
