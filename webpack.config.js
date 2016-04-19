var path = require('path')
var webpack = require('webpack')
var hot = 'webpack-hot-middleware/client'

module.exports = {
  entry: {
    index: [hot, './src/js/index'],
    // 'vendor': [hot, 'react', 'react-dom', 'react-router', 'redux', 'react-redux', 'lodash', 'muicss/react', 'redux-thunk', 'immutable']
  },
  output: {
    path: path.join(__dirname, 'assets/built/js'),
    filename: '[name].js',
    publicPath: '/built/js/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity)
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
    root: path.resolve('./core/frontend'),
    alias: {
      vendor: path.join(__dirname, "assets/vendors"),
      css: path.join(__dirname, "assets/built/css")
    },
    extensions: ['', '.js', '.jsx']
  },
  // externals: {
  //   'jquery': 'jQuery',
  //   'lodash': '_'
  // },
  // externals: ['react', 'react-dom', 'react-router', 'redux', 'react-redux', 'lodash', 'muicss/react', 'redux-thunk', 'immutable']
};
