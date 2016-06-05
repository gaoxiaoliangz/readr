var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('../../../webpack.config')
var colors = require('colors/safe')
var hot = 'webpack-hot-middleware/client'

for(var prop in config.entry) {
  config.entry[prop] = [hot].concat(config.entry[prop])
}

config.module.loaders.forEach(loader => {
  // if(loader.loader === 'babel') {
  //   loader.query.presets.push('react-hmre')
  // }
  if(loader.query) {
    loader.query.presets.push('react-hmre')
  }
})

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"development"'
  })
]
config.devtool = 'source-map'

// console.log(config.module.loaders[2])

delete config.externals

var compiler = webpack(config)

function startWebpack(app) {
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
}

module.exports = startWebpack
