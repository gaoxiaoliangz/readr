'use strict'

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../../../webpack.config')
const colors = require('colors/safe')
const hot = 'webpack-hot-middleware/client'
const combineMiddleware = require('../utils/combine-middleware')

function hmr() {
  for (let prop in config.entry) {
    config.entry[prop] = [hot].concat(config.entry[prop])
  }

  config.module.loaders.forEach(loader => {
    if (loader.query) {
      loader.query.presets.push('react-hmre')
    }
  })

  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.NoErrorsPlugin()
  ]
  config.devtool = 'source-map'

  delete config.externals

  let compiler = webpack(config)

  return combineMiddleware([
    webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }),
    webpackHotMiddleware(compiler)
  ])
}

module.exports = hmr
