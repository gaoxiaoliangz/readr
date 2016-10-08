const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('./base')
const paths = base.vars.paths
const vars = base.vars

module.exports = {
  entry: {
    app: paths.isomorphic,
    react_kit: base.vars.libs.reactKit,
    utils: base.vars.libs.utils
  },
  output: {
    path: paths.built,
    filename: '[name].[chunkhash:10].js',
    publicPath: '/built/'
  },
  plugins: [
    base.plugins.occurenceOrder(),
    base.plugins.prodEnv(),
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
      names: [vars.dllNames.utils, vars.dllNames.reactKit],
      minChunks: Infinity
    }),
  ],
  module: {
    loaders: [
      base.loaders.image(),
      base.loaders.babel(),
      base.loaders.sass({
        extract: true,
        sourceMap: false
      }),
      base.loaders.postcss({
        extract: true,
        sourceMap: false,
      }),
      base.loaders.typescript({
        officialLoader: false,
        isHot: false
      }),
    ],
  },
  sassLoader: base.loaders.loaderConfig.sassLoader(),
  postcss: base.loaders.loaderConfig.postcss(),
  resolve: base.common.resolve,
}
