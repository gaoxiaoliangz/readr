'use strict'
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config.hot')
const combineMiddleware = require('../utils/combine-middleware')


function hotModuleReplacement() {
  Object.keys(config.entry).forEach(key => {
    config.entry[key] = [hot].concat(config.entry[key])
  })

  // config.module.loaders.forEach(loader => {
  //   if (loader.query) {
  //     loader.query.presets.push('react-hmre')
  //   }
  // })

  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.NoErrorsPlugin(),
  ]
  config.devtool = 'inline-source-map'

  delete config.externals

  const compiler = webpack(config)

  return combineMiddleware([
    webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }),
    webpackHotMiddleware(compiler),
  ])
}

module.exports = hotModuleReplacement
