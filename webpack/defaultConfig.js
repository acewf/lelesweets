import Rules from '../webpack-config-helpers/rules';
import { commonPlugins } from '../webpack-config-helpers/commonPlugins';

const mode = (process.env.ENV === 'prod') ? 'production' : 'development';

export const defaultConfig = {
  entry: './src/server/index.js',
  devtool: 'source-map',
  name: 'defaultConfig',
  output: {
    filename: 'bundle.js',
  },
  target: 'web',
  mode,
  performance: {
    hints: 'warning',
  },
  optimization: {
    minimize: true,
  },
  plugins: commonPlugins,
  module: {
    rules: [
      Rules.babelLoader(),
      Rules.urlLoader,
      Rules.jsonLoader,
    ],
  },
};

export default defaultConfig;
