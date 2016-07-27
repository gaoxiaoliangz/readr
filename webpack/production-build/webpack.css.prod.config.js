// const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('../webpack.base.config')
const paths = base.vars.paths

module.exports = {
  entry: {
    'vendor.global': [`${paths.src}/shared/scss/vendor.scss`]
  },
  output: {
    path: paths.built,
    filename: '[name].[chunkhash:10].css',
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'vendor-css.manifest.json',
    }),
    new ExtractTextPlugin('[name].[chunkhash:10].css'),
    base.plugins.uglify
  ],
  module: {
    loaders: [
      base.loaders.sassBuild,
    ],
  },
  sassLoader: base.loaderConfig.sassLoader,
  resolve: base.resolve,
}
