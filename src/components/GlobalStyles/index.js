import React from 'react';
import { Global, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import emotionNormalize from 'emotion-normalize';

const GlobalStyles = ({ theme: { fonts } }) => (
  <Global
    styles={css`
      ${emotionNormalize}
      html, body{
        height:100%;
      }
      body {
        margin:0;
        background:#E1E2E1;

        #___gatsby{
          overflow-y: scroll;
        }
        #gatsby-focus-wrapper, #___gatsby{
          height:100%;
        }
      }
    `}
  />
);

export default withTheme(GlobalStyles);
