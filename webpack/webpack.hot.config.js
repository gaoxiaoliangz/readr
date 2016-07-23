const webpack = require('webpack')
const base = require('./webpack.base.config')
const paths = base.paths
const hot = base.hot

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
      base.loaders.imageWebpack,
      base.loaders.sass,
      base.loaders.babel,
      base.loaders.tsHot
    ]
  },
  sassLoader: base.loaderConfig.sassLoader,
  resolve: base.resolve
}
