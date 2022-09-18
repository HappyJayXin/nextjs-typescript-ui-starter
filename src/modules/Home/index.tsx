import { useTranslation } from 'next-i18next';

import { Flex } from '@/components/System';
import Typography from '@/components/Typography';

import Collects from './components/Collects';
import { Container } from './styled';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Flex container height="100%" alignItems="center">
        <Flex flexBasis="50%" flexGrow={0} maxWidth="50%">
          <Typography variant="title2" color="white">
            {t('home-title')}
          </Typography>
        </Flex>
        <Flex flexBasis="50%" flexGrow={0} maxWidth="50%">
          <Collects />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;
