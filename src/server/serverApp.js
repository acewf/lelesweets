import React from 'react';

import { HTML } from './html';
import { header } from './header';

export const htmlWrapper = ()=>{
  return (
    <HTML
      headerElements={header()}
      appBodyString={"<div>LeleSweets</div>"}
    />
  )
}

export default htmlWrapper;