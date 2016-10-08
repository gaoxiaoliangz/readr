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
    path: paths.built,
    filename: '[name].css',
  },
  plugins: [
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    })
  ],
  devtool: 'inline-source-map',
  module: {
    loaders: [
      base.loaders.image(),
      base.loaders.sass({
        extract: true,
        sourceMap: true,
        global: true
      })
    ],
  },
  sassLoader: base.loaders.loaderConfig.sassLoader(),
  resolve: base.common.resolve,
}
