const path = require('path')
const webpack = require('webpack')
const base = require('./webpack/base')
const paths = base.vars.paths
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    paths.isomorphic
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    base.plugins.devEnv(),
    ...base.plugins.dllReferences(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    }),
  ],
  devtool: 'inline-source-map',
  module: {
    loaders: [
      base.loaders.image(),
      base.loaders.sass({
        sourceMap: true,
        extract: true,
      }),
      base.loaders.postcss({
        sourceMap: true,
        extract: true,
      }),
      base.loaders.babel(),
      base.loaders.typescript({
        officialLoader: false
      })
    ]
  },
  sassLoader: base.loaders.loaderConfig.sassLoader(),
  postcss: base.loaders.loaderConfig.postcss(),
  resolve: base.common.resolve
}
