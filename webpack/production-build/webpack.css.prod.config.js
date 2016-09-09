const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('../webpack.base.config')
const paths = base.vars.paths

module.exports = {
  entry: {
    'vendor.global': [`${paths.isomorphic}/styles/vendor.scss`],
    'base.global': [`${paths.isomorphic}/styles/base.scss`],
    'modifiers.global': [`${paths.isomorphic}/styles/modifiers.scss`],
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
      base.loaders.sass({
        extract: true,
        sourceMap: true,
        global: true
      }),
      // base.loaders.postcss({
      //   extract: true,
      //   sourceMap: true,
      //   global: true
      // }),
      base.loaders.image()
    ],
  },
  sassLoader: base.loaderConfig.sassLoader,
  resolve: base.resolve,
}
