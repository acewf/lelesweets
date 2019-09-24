import React from 'react';
import Layout from './components/Layout';

// eslint-disable-next-line react/display-name,react/prop-types
export const App = ({ children, pageContext }) => {

  return <Layout pageContext={pageContext}>{children}</Layout>;
};

export default App;
