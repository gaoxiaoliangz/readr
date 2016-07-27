const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('./webpack.base.config')
const paths = base.vars.paths

module.exports = {
  entry: {
    'vendor.global': [`${paths.src}/shared/scss/vendor.scss`],
    // 'app.global': [`${paths.src}/shared/scss/app.global.scss`],
    // 'console.global': [`${paths.src}/shared/scss/console.global.scss`],
  },
  output: {
    path: paths.built,
    filename: '[name].css',
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    loaders: [
      base.loaders.imageWebpack,
      base.loaders.sassBuild,
    ],
  },
  sassLoader: base.loaderConfig.sassLoader,
  resolve: base.resolve,
}
