const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('./webpack.base.config')
const paths = base.vars.paths

module.exports = {
  entry: {
    'vendor.global': [`${paths.isomorphic}/styles/vendor.scss`],
    'base.global': [`${paths.isomorphic}/styles/base.scss`],
    modifiers: [`${paths.isomorphic}/styles/modifiers.scss`],
  },
  output: {
    path: paths.built,
    filename: '[name].css',
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  devtool: 'inline-source-map',
  module: {
    loaders: [
      base.loaders.imageWebpack,
      base.loaders.sassBuild,
      base.loaders.postCss({
        global: true,
        extract: true
      })
    ],
  },
  sassLoader: base.loaderConfig.sassLoader,
  postcss: base.loaderConfig.postcss(),
  resolve: base.resolve,
}
