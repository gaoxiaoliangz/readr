const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('../webpack.base.config')
const paths = base.vars.paths

function addZero(num) {
  let numStrWithZero

  if (num < 10) {
    numStrWithZero = '0' + num.toString()
  } else {
    numStrWithZero = num.toString()
  }

  return numStrWithZero
}

function getTime() {
  const d = new Date()
  const time = [d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()]
  
  return time.map(t => {
    return addZero(t)
  }).join('')
}

module.exports = {
  entry: {
    app: `${paths.entry}/app`,
    react_kit: base.vars.reactKit,
    utils: base.vars.utils
  },
  output: {
    // path: paths.built + getTime(),
    path: paths.built,
    filename: '[name].[chunkhash:10].js',
    publicPath: '/built/'
  },
  plugins: [
    base.plugins.occurenceOrder,
    base.plugins.envProd,
    new ManifestPlugin({
      fileName: 'chunks.manifest.json',
    }),
    new ExtractTextPlugin('[name].[chunkhash:10].css'),
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
      base.loaders.imageWebpack,
      base.loaders.babel,
      base.loaders.sassWithExtractText,
      base.loaders.awesomeTs,
    ],
  },
  sassLoader: base.loaderConfig.sassLoader,
  resolve: base.resolve,
}
