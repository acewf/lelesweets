import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = {
  color: 'white'
};

export const MaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
      dark: '#000000',
      light: '#2c2c2c'
    },
    secondary: {
      main: '#e2ba2c',
      dark: '#ac8a00',
      light: '#ffec61'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#000',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default {
  theme,
  MaterialTheme
};
