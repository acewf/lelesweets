import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import { theme, MaterialTheme } from './theme';
import { ThemeProvider as MaterialProvider } from '@material-ui/styles';

import createStore from './state/createStore';
import GlobalStyles from './components/GlobalStyles';

const Providers = ({ children }) => {
  const store = createStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MaterialProvider theme={MaterialTheme}>
          <GlobalStyles />
          {children}
        </MaterialProvider>
      </ThemeProvider>
    </Provider>
  );
};

Providers.propTypes = {
  children: PropTypes.any.isRequired
};

export default Providers;
