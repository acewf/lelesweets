import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const StyledDiv = styled('div')`
  margin: 0.5em;
  padding: 0;
  border: 2px solid red;
`;

const App = ({ title }) => (
  <StyledDiv>{title} App</StyledDiv>
);

App.propTypes = {
  title: PropTypes.string,
};
App.defaultProps = {
  title: '',
};


export default App;
