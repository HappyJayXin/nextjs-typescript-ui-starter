import Typography from '@/components/Typography';
import { Flex, Box } from '@/components/System';
import { CollectWrapper } from './styled';
import type { ChildrenProps } from '@/types/common';

type Props = ChildrenProps & {
  title: string;
};

const Collect = ({ title, children }: Props) => (
  <CollectWrapper>
    <Flex container flexDirection="column">
      <Typography variant="title6" color="white" gutterBottom>
        {title}
      </Typography>
      <Flex container>{children}</Flex>
    </Flex>
  </CollectWrapper>
);

export default Collect;
