import React from 'react';
import { Global, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import emotionNormalize from 'emotion-normalize';

const GlobalStyles = ({ theme: { fonts } }) => (
  <Global
    styles={css`
      ${emotionNormalize}
      body {
        margin:0;
      }
    `}
  />
);

export default withTheme(GlobalStyles);
