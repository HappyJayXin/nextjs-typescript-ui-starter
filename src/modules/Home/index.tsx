import { useState } from 'react';
import { useTranslation } from 'next-i18next';

import { Flex } from '@/components/System';
import Button from '@/components/Button';
import Typography from '@/components/Typography';
import { useDialog } from '@/components/Dialog';
import Modal, {
  ModalTitle,
  ModalContent,
  ModalAction,
} from '@/components/Modal';
import { useToast } from '@/components/Toast';
import Tooltip from '@/components/Tooltip';

const Home = () => {
  const { t } = useTranslation();
  const { setDialog } = useDialog();

  const openDialog = () => {
    setDialog({
      type: 'message',
      data: {
        title: 'Dialog',
        body: t('hello_dialog'),
      },
    });
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const { addToast } = useToast();
  const openToast = () => {
    addToast('toast');
  };

  return (
    <Flex>
      <Typography>Button</Typography>
      <Button>Button</Button>
      <Typography>Dialog</Typography>
      <Button onClick={openDialog}>Open Dialog</Button>
      <Typography>Modal</Typography>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal isOpen={isOpenModal}>
        <ModalTitle title="ModalTitle" onClose={() => setIsOpenModal(false)} />
        <ModalContent>ModalContent</ModalContent>
        <ModalAction>ModalAction</ModalAction>
      </Modal>
      <Typography>Toast</Typography>
      <Button onClick={openToast}>Open Toast</Button>

      <Tooltip content="tooltip">
        <Typography>Tooltip</Typography>
      </Tooltip>
    </Flex>
  );
};

export default Home;
