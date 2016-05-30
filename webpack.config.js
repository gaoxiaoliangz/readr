var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./assets/built/js/es6/entry/app.dev'],
    console: ['./assets/built/js/es6/entry/console.dev']
  },
  output: {
    path: path.join(__dirname, 'assets/built/js'),
    filename: '[name].js',
    publicPath: '/built/js/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ],
  devServer: {
    stats: 'errors-only'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ]
      }
      // { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  resolve: {
    root: path.resolve('./assets/built/js/es6'),
    alias: {
      vendor: path.join(__dirname, "assets/vendors"),
      css: path.join(__dirname, "assets/built/css")
    },
    extensions: ['', '.js', '.jsx', '.ts', '.tsx']
  }
  // externals: {
  //   'lodash': '_',
  //   'react': 'React',
  //   'react-redux': 'ReactRedux',
  //   'react-router': 'ReactRouter',
  //   'redux-devtools': 'ReduxDevtools',
  //   'redux-devtools-log-monitor': 'LogMonitor',
  //   'redux-devtools-dock-monitor': 'DockMonitor',
  //   'redux-thunk': 'ReduxThunk',
  //   'redux-logger': 'ReduxLogger'
  // }
}
