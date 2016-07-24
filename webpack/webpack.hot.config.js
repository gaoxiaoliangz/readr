const webpack = require('webpack')
const base = require('./webpack.base.config')
const paths = base.vars.paths
const hot = base.vars.hot
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: [hot, `${paths.src}/entry/app`],
    console: [hot, `${paths.src}/entry/console`],
  },
  output: {
    path: paths.built,
    publicPath: 'http://localhost:3000/built/',
    filename: '[name].js',
  },
  plugins: [
    base.plugins.envDev,
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    ...base.plugins.dllReference,
  ],
  devtool: 'inline-source-map',
  module: {
    loaders: [
      base.loaders.imageWebpack,
      base.loaders.sassWithExtractText,
      base.loaders.babel,
      base.loaders.tsHot
    ]
  },
  sassLoader: base.loaderConfig.sassLoader,
  resolve: base.resolve
}
