import { useState } from 'react';
import { useTranslation } from 'next-i18next';

import Button from '@/components/Button';
import Typography from '@/components/Typography';
import { useToast } from '@/components/Toast';
import Tooltip from '@/components/Tooltip';
import { useDialog } from '@/components/Dialog';
import BasicModal from '@/modules/Modal/Basic';

import Collect from '../Collect';
import { CollectsContainer } from './styled';
import { Flex, Box } from '@/components/System';

const Collects = () => {
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
  const openInfoToast = () => {
    addToast('toast', {
      appearance: 'info',
      title: 'Hello',
      closeButton: true,
    });
  };
  const openSuccessToast = () => {
    addToast('toast', {
      appearance: 'success',
    });
  };
  const openWarningToast = () => {
    addToast('toast', {
      appearance: 'warning',
    });
  };

  return (
    <CollectsContainer>
      <Flex container gap="20px">
        <Flex flexBasis="50%" flexGrow={0}>
          {/* Primary Button */}
          <Collect title="Primary Button">
            <Box marginRight="8px">
              <Button variant="contained">Contained</Button>
            </Box>
            <Box marginRight="8px">
              <Button variant="outlined">Outlined</Button>
            </Box>
            <Box marginRight="8px">
              <Button variant="text">Text</Button>
            </Box>
          </Collect>

          {/* Secondary Button */}
          <Collect title="Secondary Button">
            <Box marginRight="8px">
              <Button variant="contained" color="secondary">
                Contained
              </Button>
            </Box>
            <Box marginRight="8px">
              <Button variant="outlined" color="secondary">
                Outlined
              </Button>
            </Box>
            <Box marginRight="8px">
              <Button variant="text" color="secondary">
                Text
              </Button>
            </Box>
          </Collect>

          {/* Portal */}
          <Collect title="Portal">
            <Box marginRight="8px">
              <Button onClick={openDialog}>Open Dialog</Button>
            </Box>
            <Box marginRight="8px">
              <Button onClick={openModal}>Open Modal</Button>
            </Box>
            <BasicModal
              isOpen={isOpenModal}
              onClose={() => setIsOpenModal(false)}
            />
          </Collect>

          {/* Toast */}
          <Collect title="Toast">
            <Box marginRight="8px">
              <Button onClick={openInfoToast}>Info</Button>
            </Box>
            <Box marginRight="8px">
              <Button onClick={openSuccessToast}>Success</Button>
            </Box>
            <Box marginRight="8px">
              <Button onClick={openWarningToast}>Warning</Button>
            </Box>
          </Collect>

          {/* Tooltip */}
          <Collect title="Tooltip">
            <Box marginRight="16px">
              <Tooltip content="content" initialTime={60} placement="left">
                <Typography color="white">Left</Typography>
              </Tooltip>
            </Box>
            <Box marginRight="16px">
              <Tooltip content="content" initialTime={60} placement="bottom">
                <Typography color="white">Bottom</Typography>
              </Tooltip>
            </Box>
            <Box marginRight="16px">
              <Tooltip
                content="content"
                initialTime={60}
                placement="top"
                isArrow
              >
                <Typography color="white">Arrow</Typography>
              </Tooltip>
            </Box>
          </Collect>
        </Flex>
      </Flex>
    </CollectsContainer>
  );
};

export default Collects;
