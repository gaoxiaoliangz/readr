var path = require('path')
var webpack = require('webpack')
var hot = 'webpack-hot-middleware/client'

module.exports = {
  entry: {
    index: [hot, './src/js/index']
  },
  output: {
    path: path.join(__dirname, 'public/debug/js'),
    filename: '[name].js',
    publicPath: '/built/js/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ]
      }
    ]
  },
  resolve: {
    root: path.resolve('./modules'),
    alias: {
      vendor: path.join(__dirname, "public/vendor"),
      css: path.join(__dirname, "public/built/css")
    },
    extensions: ['', '.js']
  }
};
