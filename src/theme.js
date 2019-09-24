import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = {
  color: 'white'
};

export const MaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default {
  theme,
  MaterialTheme
};
