import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import App from './App';
import media from 'styled-media-query';

const theme = createMuiTheme();

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    max-width: 50em;
    ${media.lessThan('small')`
      margin: 0 20px;
    `}
`;

const Root = () => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default Root;
