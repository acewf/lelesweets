import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { HTML } from './html';
import { header } from './header';

export const htmlWrapper = () => (
  <HTML
    headerElements={header()}
    appBodyString={'<div>LeleSweets</div>'}
  />
);

export const renderString = () => {
  const html = renderToStaticMarkup(htmlWrapper());
  return html;
};

export default {
  htmlWrapper,
  renderString,
};
