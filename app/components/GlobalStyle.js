import { createGlobalStyle } from 'styled-components';

import theme from 'constants/theme';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(/static/fonts/PublicSans-Light.ttf) format('ttf'),
      url(/static/fonts/PublicSans-Light.woff2) format('woff2'),
      url(/static/fonts/PublicSans-Light.woff) format('woff');
  }
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: ${theme.fontBase};
    font-weight: 400;
    font-size: ${theme.fontSizes[0]}px;
  }
  a {
    text-decoration: none;
  }
`;
export default GlobalStyle;
