const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./core/frontend/entry/app'],
    console: ['./core/frontend/entry/console'],
  },
  output: {
    path: path.join(__dirname, 'assets/built'),
    filename: '[name].js',
    publicPath: '/built',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.tsx?$/,
        loaders: ['react-hot', 'babel-loader', 'awesome-typescript-loader'],
      },
    ],
  },
  resolve: {
    root: path.resolve('./core/frontend'),
    alias: {
      vendor: path.join(__dirname, 'assets/vendors'),
      css: path.join(__dirname, 'assets/built'),
    },
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
  },
  externals: {
    // 'react': 'React',
    // 'react-dom': 'ReactDOM',
    // 'react-router': 'ReactRouter',
    // 'react-redux': 'ReactRedux',
    // 'lodash': '_',
    // 'normalizr': 'normalizr',
    // 'humps': 'humps',
    // 'react-addons-css-transition-group': 'react-addons-css-transition-group', // todo
    // 'jquery': '$',
    // 'redux-thunk': 'ReduxThunk',
    // 'redux': 'Redux',
    // 'redux-devtools-log-monitor': 'redux-devtools-log-monitor', // todo
    // 'redux-devtools-dock-monitor': 'redux-devtools-dock-monitor' // todo
  },
}
