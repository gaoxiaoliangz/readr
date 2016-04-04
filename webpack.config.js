var path = require('path')
var webpack = require('webpack')
var hot = 'webpack-hot-middleware/client'

module.exports = {
  entry: {
    index: [hot, './src/js/index']
  },
  output: {
    path: path.join(__dirname, 'assets/built/js'),
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
    root: path.resolve('./core'),
    alias: {
      vendor: path.join(__dirname, "public/vendors"),
      css: path.join(__dirname, "assets/built/css")
    },
    extensions: ['', '.js']
  }
};
