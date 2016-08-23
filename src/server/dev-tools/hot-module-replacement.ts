import webpack from 'webpack'
import webpackConfig from './webpack.hot.config'
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
import combineMiddleware from '../utils/combine-middleware'

function hotModuleReplacement() {
  const compiler = webpack(webpackConfig)

  return combineMiddleware([
    webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }),
    webpackHotMiddleware(compiler),
  ])
}

module.exports = hotModuleReplacement
