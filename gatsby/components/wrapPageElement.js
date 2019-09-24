import React from 'react';
import PropTypes from 'prop-types';
import { App } from '../../src/App';

const offline = 'offline-plugin-app-shell-fallback';

export const wrapPageElement = ({ element, props: { pageContext } }) => {
  if (
    pageContext &&
    pageContext.originalPath &&
    pageContext.originalPath.indexOf(offline) > -1
  ) {
    return element;
  }

  return <App pageContext={pageContext}>{element}</App>;
};

wrapPageElement.propTypes = {
  element: PropTypes.element.isRequired,
  props: PropTypes.shape({
    pageContext: PropTypes.object
  }).isRequired
};

export default wrapPageElement;
