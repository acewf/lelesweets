import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

module.exports = [
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].[hash].css',
  }),
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'production',
    BUILD_FLAG_IS_CLIENT: true,
    BUILD_FLAG_IS_SERVER: false,
    BUILD_FLAG_IS_NODE: true,
    BUILD_FLAG_IS_DEV: false,
  }),
];
