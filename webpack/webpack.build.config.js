const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('./webpack.base.config')
const paths = base.paths

module.exports = {
  entry: {
    app: [`${paths.src}/entry/app`],
    console: [`${paths.src}/entry/console`],
  },
  output: {
    path: paths.built,
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    base.plugins.envProd,
    base.plugins.occurenceOrder,
    ...base.plugins.dllReferences,
    new ManifestPlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // warnings: false
      }
    })
  ],
  module: {
    loaders: [
      base.loaders.imageWebpack,
      base.loaders.babel,
      base.loaders.sassWithExtractText,
      base.loaders.ts,
    ],
  },
  sassLoader: base.loaderConfig.sassLoader,
  resolve: base.resolve,
}
