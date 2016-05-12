var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('../../webpack.config')
var colors = require('colors/safe')
var hot = 'webpack-hot-middleware/client'

for(var prop in config.entry) {
  config.entry[prop] = [hot].concat(config.entry[prop])
}

config.module.loaders.forEach(loader => {
  if(loader.loader === 'babel') {
    loader.query.presets.push('react-hmre')
  }
})

var compiler = webpack(config)

function startWebpack(app) {
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
}

module.exports = startWebpack
