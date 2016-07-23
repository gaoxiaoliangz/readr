const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('./webpack.base.config')
const paths = base.vars.paths

module.exports = {
  entry: {
    app: [`${paths.src}/entry/app`],
    console: [`${paths.src}/entry/console`],
    'react-kit': base.vars.reactKit,
    utils: base.vars.utils,
  },
  output: {
    path: paths.built,
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    base.plugins.occurenceOrder,
    base.plugins.envProd,
    new ManifestPlugin({
      fileName: 'chunks.manifest.json',
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      // 顺序会产生影响
      // 目前这种顺序，react-kit 里面会包含 webpack 用来解析模块的逻辑
      // 所以如果在页面上两者顺序颠倒会出错
      names: ['utils', 'react-kit'],
      minChunks: Infinity
    }),
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
