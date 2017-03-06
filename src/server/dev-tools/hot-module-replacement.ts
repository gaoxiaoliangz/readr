import webpack from 'webpack'
import webpackConfig from './webpack.hot.config'
import combineMiddleware from '../utils/combine-middleware'
const webpackDevMiddleware: any = require('webpack-dev-middleware')
const webpackHotMiddleware: any = require('webpack-hot-middleware')

export default function hotModuleReplacement() {
  const compiler = webpack(webpackConfig as any)

  return combineMiddleware([
    webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }),
    webpackHotMiddleware(compiler),
  ])
}
