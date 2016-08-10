const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.hot.config')
const combineMiddleware = require('../utils/combine-middleware')

function hotModuleReplacement() {
  // console.log(webpackConfig.module.loaders)

  const compiler = webpack(webpackConfig)

  return combineMiddleware([
    webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }),
    webpackHotMiddleware(compiler),
  ])
}

module.exports = hotModuleReplacement
