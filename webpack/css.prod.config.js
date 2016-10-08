const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('./base')
const paths = base.vars.paths

module.exports = {
  entry: {
    'vendor.global': [`${paths.isomorphic}/styles/vendor.scss`],
    'base.global': [`${paths.isomorphic}/styles/base.scss`],
    'modifiers.global': [`${paths.isomorphic}/styles/modifiers.scss`],
  },
  output: {
    path: paths.builtProd,
    filename: '[name].[chunkhash:10].css',
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'css.manifest.json',
    }),
    new ExtractTextPlugin('[name].[chunkhash:10].css', {
      allChunks: true
    }),
    base.plugins.uglify
  ],
  module: {
    loaders: [
      base.loaders.sass({
        extract: true,
        sourceMap: true,
        global: true
      }),
      base.loaders.image()
    ],
  },
  sassLoader: base.loaders.loaderConfig.sassLoader(),
  resolve: base.common.resolve,
}
