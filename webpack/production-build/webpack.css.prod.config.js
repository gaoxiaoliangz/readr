// const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('../webpack.base.config')
const paths = base.vars.paths

module.exports = {
  entry: {
    'vendor.global': [`${paths.src}/styles/vendor.scss`],
    'base.global': [`${paths.src}/styles/base.scss`],
  },
  output: {
    path: paths.built,
    filename: '[name].[chunkhash:10].css',
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'css.manifest.json',
    }),
    new ExtractTextPlugin('[name].[chunkhash:10].css'),
    base.plugins.uglify
  ],
  module: {
    loaders: [
      base.loaders.sassBuildWithoutSourceMap,
      base.loaders.imageWebpack
    ],
  },
  sassLoader: base.loaderConfig.sassLoader,
  resolve: base.resolve,
}
