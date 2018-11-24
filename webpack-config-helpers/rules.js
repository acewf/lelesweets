const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  babelLoader: () => {
    return {
      test: /\.js$/,
      exclude: [/node_modules/],
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ["@babel/preset-env", { modules: false }],
            ["@babel/preset-react", { modules: false }]
          ],
          plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/plugin-transform-modules-commonjs',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import'
          ]
        }
      }
    }
  },
  urlLoader: {
    test: /\.(png|jpg)$/,
    loader: 'url-loader'
  },
  jsonLoader: {
    test: /\.json$/,
    exclude: /node_modules/,
    loader: 'json-loader'
  },
  modernizrLoader: {
    test: /\.modernizrrc.js$/,
    loader: 'modernizr-loader'
  },
  modernizrLoader: {
    test: /\.modernizrrc.js$/,
    loader: 'modernizr-loader'
  },
  modernizrLoaderJsonLoader: {
    test: /\.modernizrrc(\.json)?$/,
    loader: 'modernizr-loader!json-loader'
  },
  sascssLoaderProd: {
    test: /\.(sa|sc|c)ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ],
  },
  sascssLoader: {
    test: /\.(sa|sc|c)ss$/,
    use: [
      'style-loader',
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ],
  }

}