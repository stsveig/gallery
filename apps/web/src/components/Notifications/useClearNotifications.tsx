import { useCallback } from 'react';
import { ConnectionHandler, graphql, SelectorStoreUpdater } from 'relay-runtime';

import { useClearNotificationsMutation } from '~/generated/useClearNotificationsMutation.graphql';
import { usePromisifiedMutation } from '~/hooks/usePromisifiedMutation';
import { useReportError } from '~/shared/contexts/ErrorReportingContext';

export function useClearNotifications() {
  const [clear] = usePromisifiedMutation<useClearNotificationsMutation>(graphql`
    mutation useClearNotificationsMutation {
      clearAllNotifications {
        notifications {
          ...NotificationFragment
        }
      }
    }
  `);

  const reportError = useReportError();
  return useCallback(
    async (userId: string) => {
      const updater: SelectorStoreUpdater<useClearNotificationsMutation['response']> = (store) => {
        const connectionIds = [
          ConnectionHandler.getConnectionID(
            `client:Viewer:${userId}`,
            'StandardSidebarFragment_notifications'
          ),
        ];

        for (const connectionId of connectionIds) {
          const connection = store.get(connectionId);

          connection?.setValue(0, 'unseenCount');
        }
      };

      try {
        await clear({ optimisticUpdater: updater, updater, variables: {} });
      } catch (error) {
        if (error instanceof Error) {
          reportError(error);
        } else {
          reportError('Something unexpected went wrong while trying to clear all notifications');
        }
      }
    },
    [clear, reportError]
  );
}