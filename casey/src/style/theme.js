import React from "react";
import {createMuiTheme} from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffa4a2',
      main: '#006064',
      dark: '#000a12',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#dbffff',
      main: '#a7ffeb',
      dark: '#75ccb9',
      contrastText: '#000000',
    },
  },
});
export default theme;



