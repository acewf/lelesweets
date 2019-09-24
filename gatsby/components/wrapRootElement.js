import React from 'react';
import Providers from '../../src/Providers';

const wrapRootElement = ({ element }) => <Providers>{element}</Providers>;

export default wrapRootElement;
