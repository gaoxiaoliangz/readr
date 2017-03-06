const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const rules = require('./webpack-rules')
const paths = require('./paths')
const vars = require('./webpack-vars')

const config = {
  entry: {
    app: [
      'react-hot-loader/patch',
      // activate HMR for React

      'webpack-dev-server/client?http://localhost:4000',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates

      'babel-polyfill',
      paths.isomorphicSrc
    ],
    'vendor.global': path.join(paths.stylesSrc, 'vendor.global.scss'),
    'base.global': path.join(paths.stylesSrc, 'base.global.scss'),
    'modifiers.global': path.join(paths.stylesSrc, 'modifiers.global.scss')
  },
  output: {
    path: paths.appBuild,
    filename: '[name].js',
    publicPath: paths.publicPath
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"development"`,
    }),

    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true
    })
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      rules.img(),
      rules.scssLocal({ extract: true, isomorphic: false, sourceMap: true }),
      rules.scssGlobal({ extract: true, isomorphic: false, sourceMap: true }),
      rules.css({ extract: true, global: false, isomorphic: false }),
      // rules.lint(),
      rules.js(),
      rules.ts({ officialLoader: false, isHot: true }),
    ]
  },
  resolve: vars.resolve
}

module.exports = config
