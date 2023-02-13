import {
  createGlobalStyle,
  GlobalStyleComponent,
  css
} from 'styled-components';

import reset from './reset';

const GlobalStyles = createGlobalStyle`
  ${reset};

  html,  body {
    height: 100%;
    font-family: 16px;
  }

  ${({ theme }) => css`
    body {
      border: 8px solid ${theme.colors.ceriseRed};
      overflow: hidden;
    }
  `}
`;

export default GlobalStyles;
