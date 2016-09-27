const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('../webpack.base.config')
const paths = base.vars.paths

module.exports = {
  entry: {
    app: `${paths.entry}/app`,
    react_kit: base.vars.reactKit,
    utils: base.vars.utils
  },
  output: {
    path: paths.built,
    filename: '[name].[chunkhash:10].js',
    publicPath: '/built/'
  },
  // externals: {
  //   'react': 'React'
  // },
  plugins: [
    base.plugins.occurenceOrder,
    base.plugins.envProd,
    new ManifestPlugin({
      fileName: 'chunks.manifest.json',
    }),
    new ExtractTextPlugin('[name].[chunkhash:10].css', {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      // 顺序会产生影响
      // 目前这种顺序，react-kit 里面会包含 webpack 用来解析模块的逻辑
      // 所以如果在页面上两者顺序颠倒会出错
      names: ['utils', 'react_kit'],
      minChunks: Infinity
    }),
  ],
  module: {
    loaders: [
      base.loaders.image(),
      base.loaders.babel,
      base.loaders.sass({
        extract: true,
        sourceMap: false
      }),
      base.loaders.postcss({
        extract: true,
        sourceMap: false,
      }),
      base.loaders.ts({
        officialLoader: false,
        isHot: false
      }),
    ],
  },
  sassLoader: base.loaderConfig.sassLoader,
  postcss: base.loaderConfig.postcss(),
  resolve: base.resolve,
}
