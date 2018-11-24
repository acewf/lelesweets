const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');
const Visualizer = require('webpack-visualizer-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const imageminPlugins = [imageminGifsicle(), imageminPngquant()];
const os = require('os');
const imageminManifest = {};

// new WebpackMd5Hash(),
// new webpack.optimize.ModuleConcatenationPlugin(),
export const commonPlugins = () => {
  const plugins = [
    new Visualizer(),
    new AssetsPlugin({
      filename: "assets.json",
      path: "build/client"
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new ImageminWebpackPlugin({
      bail: false,
      excludeChunksAssets: false,
      imageminOptions: {
        plugins: imageminPlugins
      },
      manifest: imageminManifest, // This object will contain source and interpolated filenames.
      maxConcurrency: os.cpus().length,
      name: '[name].[ext]',
      test: /\.(jpe?g|png|gif|svg)$/i
    })
  ]
  return plugins;
}