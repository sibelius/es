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

// eslint-disable-next-line
const primaryColor = '#c41126';
// eslint-disable-next-line
const secondaryColor = '#fec32d';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    line-height: 1.5;       
    color: #566b78;
  }  
  
  h2 {
    margin-top: 1em;
    padding-top: 1em;
  }
  
  h1,
  h2,
  strong {
    color: #333;
  }
  
  span {
    font-size: 14px;
  }
  p {
    font-size: 14px;
  }
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
