import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


const CompilerClientPlugin = require('../customPlugins/compilerClientPlugin');
const CompilerServerPlugin = require('../customPlugins/compilerServerPlugin');

export const commonDevPlugins = [
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
];

export const clientCompiler = (dirname, manifest) => {
  process.env.BUILD_FLAG_IS_DEV = true;
  return [
    new CompilerClientPlugin({}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({
      context: dirname,
      manifest,
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      BUILD_FLAG_IS_CLIENT: true,
      BUILD_FLAG_IS_SERVER: false,
      BUILD_FLAG_IS_NODE: false,
      BUILD_FLAG_IS_DEV: true,
    }),
  ];
};
export const serverCompiler = [
  new CompilerServerPlugin({}),
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'development',
    BUILD_FLAG_IS_CLIENT: false,
    BUILD_FLAG_IS_SERVER: true,
    BUILD_FLAG_IS_NODE: false,
    BUILD_FLAG_IS_DEV: true,
  }),
];
