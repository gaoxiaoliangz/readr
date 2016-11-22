const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('./base')
const paths = base.vars.paths

module.exports = {
  entry: {
    app: ['babel-polyfill', paths.isomorphic],
  },
  output: {
    path: paths.built,
    filename: '[name].js',
    publicPath: '/built/'
  },
  plugins: [
    base.plugins.devEnv(),
    ...base.plugins.dllReferences(),
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    }),
  ],
  devtool: 'inline-source-map',
  module: {
    loaders: [
      base.loaders.image(),
      base.loaders.babel(),
      base.loaders.sass({
        sourceMap: true,
        extract: true
      }),
      base.loaders.postcss({
        sourceMap: true,
        extract: true
      }),
      base.loaders.typescript({
        officialLoader: false
      }),
      base.loaders.json()
    ],
  },
  sassLoader: base.loaders.loaderConfig.sassLoader(),
  postcss: base.loaders.loaderConfig.postcss(),
  resolve: base.common.resolve,
}
