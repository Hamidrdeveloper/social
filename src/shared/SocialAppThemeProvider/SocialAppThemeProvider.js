import React from 'react';
import {ThemeProvider} from 'styled-components';

function getTheme(complementTheme) {
  return {
    fontFamily: 'Avenir',
    ...complementTheme,
  };
}

const SocialAppThemeProvider = ({children = null, complementTheme = {}}) => (
  <ThemeProvider theme={getTheme(complementTheme)}>{children}</ThemeProvider>
);

export default SocialAppThemeProvider;
