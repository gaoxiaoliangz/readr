var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('../../webpack.config')
var compiler = webpack(config)

function startWebpack(app) {
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
  console.log(colors.blue.underline("webpack dev server working"));
}

module.exports = startWebpack
