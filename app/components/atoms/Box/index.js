import styled from 'styled-components';
import { space, width, textAlign } from 'styled-system';

import theme from 'constants/theme';

export const Box = styled.div`
	${space};
	max-width: ${props => props.maxWidth || '100%'};
	text-align: ${props => props.textAlign || 'center'};
	width: ${props => props.width || 'auto'};
`;

Box.defaultProps = {
  px: `${theme.space[3] / 2}px`,
};
