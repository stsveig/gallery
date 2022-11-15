import { useCallback } from 'react';
import { graphql, useFragment } from 'react-relay';
import styled from 'styled-components';

import { useModalActions } from '~/contexts/modal/ModalContext';
import { NotificationEmailAlertQueryFragment$key } from '~/generated/NotificationEmailAlertQueryFragment.graphql';
import CloseIcon from '~/icons/CloseIcon';
import InfoCircleIcon from '~/icons/InfoCircleIcon';
import SettingsModal from '~/scenes/Modals/SettingsModal';

import colors from '../core/colors';
import InteractiveLink from '../core/InteractiveLink/InteractiveLink';
import { HStack } from '../core/Spacer/Stack';
import { BaseM } from '../core/Text/Text';

type Props = {
  queryRef: NotificationEmailAlertQueryFragment$key;
  onDismiss: () => void;
};

export function NotificationEmailAlert({ onDismiss, queryRef }: Props) {
  const query = useFragment(
    graphql`
      fragment NotificationEmailAlertQueryFragment on Query {
        ...SettingsModalFragment
      }
    `,
    queryRef
  );

  const { showModal, hideModal } = useModalActions();

  const handleEnableEmails = useCallback(() => {
    // Hide notification modal
    hideModal();

    showModal({
      content: <SettingsModal queryRef={query} />,
      headerText: 'Manage accounts',
    });
  }, [hideModal, query, showModal]);

  const handleDismiss = () => {
    onDismiss();
  };

  return (
    <StyledAlertContainer>
      <StyledAlert align="center" gap={8}>
        <StyledInfoCircleIcon />
        <BaseM>Never miss a moment! Enable email notifications in settings.</BaseM>
        <HStack align="center" gap={8}>
          <InteractiveLink onClick={handleEnableEmails}>Enable</InteractiveLink>
          <StyledCloseButton onClick={handleDismiss}>
            <CloseIcon isActive />
          </StyledCloseButton>
        </HStack>
      </StyledAlert>
    </StyledAlertContainer>
  );
}

const StyledAlertContainer = styled(HStack)`
  padding: 4px 12px;
`;

const StyledAlert = styled(HStack)`
  border: 1px solid ${colors.activeBlue};
  padding: 8px 12px;
`;

const StyledInfoCircleIcon = styled(InfoCircleIcon)`
  height: 24px;
  width: 24px;
  color: red;
`;

const StyledCloseButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
`;