const path = require('path')
const webpack = require('webpack')
const webpackBase = require('./webpack.base.config')
const hot = 'webpack-hot-middleware/client'

const pathPrefix = process.cwd()
const paths = {
  src: path.join(pathPrefix, 'src/client'),
  built: path.join(pathPrefix, 'assets/built')
}

module.exports = {
  entry: {
    app: [hot, `${paths.src}/entry/app`],
    console: [hot, `${paths.src}/entry/console`],
  },
  output: {
    path: paths.built,
    publicPath: 'http://localhost:3000/built/',
    filename: '[name].js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('../assets/built/react-manifest.json')
    }),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('../assets/built/utils-manifest.json')
    }),
  ],
  devtool: 'inline-source-map',
  module: {
    loaders: [
      webpackBase.loaders.imageWebpack,
      webpackBase.loaders.sass,
      webpackBase.loaders.babel,
      webpackBase.loaders.tsHot
    ]
  },
  sassLoader: {
    includePaths: [paths.src]
  },
  resolve: {
    root: paths.src,
    alias: {
      styles: `${paths.src}/shared/scss`,
    },
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
  },
}
