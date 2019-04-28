import styled from 'styled-components';

import { Box } from 'components/atoms';

export const Flex = styled(Box)`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
`;
