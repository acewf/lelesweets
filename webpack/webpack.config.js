import Path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import { getWebpackBar } from '../webpack-config-helpers/commonPlugins';
import { CompilerClientPlugin } from '../webpack-config-helpers/customPlugins';
import { defaultConfig } from './defaultConfig';

const CLIENT = 'client';
const SERVER = 'server';


if (process.env.ENV === 'prod') {
  defaultConfig.optimization = {
    minimizer: [new UglifyJsPlugin({
      parallel: true,
      extractComments: true,
    })],
  };
}

// / ## getClientConfig ##
export const getClientConfig = () => {
  const entry = {
    index: './src/client/index.js',
  };
  const output = {
    ...defaultConfig.output,
    path: Path.join(__dirname, '../build/client'),
  };
  return {
    ...defaultConfig,
    entry,
    output,
    plugins: [
      ...defaultConfig.plugins,
      getWebpackBar(defaultConfig.target),
    ],
    name: 'client',
  };
};

// / ## getServerConfig ##
export const getServerConfig = () => {
  const entry = {
    index: './src/server/serverApp.js',
  };
  const output = {
    ...defaultConfig.output,
    path: Path.join(__dirname, '../build/server'),
    filename: 'index-server.js',
  };
  return {
    ...defaultConfig,
    entry,
    output,
    target: 'node',
    plugins: [
      ...defaultConfig.plugins,
      getWebpackBar('node'),
    ],
    name: 'server',
  };
};

const webpackConfig = (env, argv) => {
  if (process.env.target === CLIENT) {
    return getClientConfig();
  } else if (process.env.target === SERVER) {
    return getServerConfig();
  }
  const clientConfig = getClientConfig();
  const serverConfig = getServerConfig();
  return [
    clientConfig,
    serverConfig,
  ];
};

export default webpackConfig;
