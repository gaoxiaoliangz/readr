'use strict'
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../../../webpack.config')
const hot = 'webpack-hot-middleware/client'


function combineMiddleware(mids) {
  return mids.reduce((a, b) => {
    return (req, res, next) => {
      a(req, res, err => {
        if (err) {
          return next(err)
        }
        return b(req, res, next)
      })
    }
  })
}

function hmr() {
  for (const prop in config.entry) {
    config.entry[prop] = [hot].concat(config.entry[prop])
  }

  // config.entry = [
  //   'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
  //   'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  //   './core/entry/app' // Your appʼs entry point
  // ]

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

module.exports = hmr
