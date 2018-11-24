import Path from 'path';

var ProgressBarPlugin = require('progress-bar-webpack-plugin');
import Rules from './webpack-config-helpers/rules';
// import ServerPlugin from './webpack-config-helpers/customPlugins/compilerServerPlugin';

const CLIENT = 'client';
const SERVER = 'server';

const defaultConfig = {
  entry: './src/server/index.js',
  devtool: 'source-map',
  name:'defaultConfig',
  output: {
    filename: 'bundle.js'
  },
  target: "web",
  mode: 'production',
  performance: {
    hints: "warning"
  },
  optimization: {
    minimize: true
  },
  plugins:[new ProgressBarPlugin()],
  module: {
    rules: [
      Rules.babelLoader(),
      Rules.urlLoader,
      Rules.jsonLoader,
    ]
  }
};


/// ## getClientConfig ##
export const getClientConfig = () => {
  const entry = {
    index: './src/client/index.js'
  }
  const output = { ...defaultConfig.output };
  output.path = Path.join(__dirname, `build/client`);
  return {
    ...defaultConfig,
    entry,
    output,
    name:'client'
  }
}

/// ## getServerConfig ##
export const getServerConfig = () => {
  const entry = {
    index: './src/server/serverApp.js'
  }
  const output = { ...defaultConfig.output };
  output.path = Path.join(__dirname, `build/server`);
  output.filename = 'index-server.js';
  return {
    ...defaultConfig,
    entry,
    output,
    target:'node',
    name:'server',
  }
}

const webpackConfig = (env, argv) => {
  if (process.env.target === CLIENT) {
    return getClientConfig();
  } else  if (process.env.target === SERVER) {
    return getServerConfig();
  } else {
    const clientConfig = getClientConfig();
    const serverConfig = getServerConfig();
    return [
      clientConfig,
      serverConfig
    ];
  }
}

export default webpackConfig;