import styled, { css } from 'styled-components';
import { space } from 'styled-system';

import theme from 'constants/theme';

export const Heading = styled.h3`
  ${space};
  line-height: 1.25;
  ${({
 heading1, heading2, heading4, center, inverse, uppercase,
}) => css`
    text-transform: ${uppercase && 'uppercase'};
    color: ${inverse ? theme.colors.textInverse : theme.colors.textTitle};
    text-align: ${center ? 'center' : 'left'};
    font-size: ${heading1
      ? `${theme.fontSizes[3]}px`
      : heading2
      ? `${theme.fontSizes[2]}px`
      : heading4
      ? `${theme.fontSizes[0]}px`
      : `${theme.fontSizes[1]}px`};
    font-weight: ${heading1 ? 400 : heading2 ? 300 : 500};
    @media (min-width: ${theme.breakpoints[1]}) {
      font-size: ${heading1
        ? `${theme.fontSizes[4]}px`
        : heading2
        ? `${theme.fontSizes[3]}px`
        : heading4
        ? `${theme.fontSizes[0]}px`
        : `${theme.fontSizes[1]}px`};
    }
  `};
`;

Heading.defaultProps = {
  m: 0,
  p: 0,
};
