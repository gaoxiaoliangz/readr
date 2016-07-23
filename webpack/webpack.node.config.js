const webpack = require('webpack')
const base = require('./webpack.base.config')

module.exports = {
  entry: {
    app: [`${base.paths.src}/routes/app`],
    console: [`${base.paths.src}/routes/console`],
    'configure-store': [`${base.paths.src}/store/configure-store`],
  },
  output: {
    path: `${base.paths.root}/bin`,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
  ],
  module: {
    loaders: [
      base.loaders.imageWebpack,
      base.loaders.babel,
      base.loaders.sassIsomorphic,
      base.loaders.ts,
    ],
  },
  devtool: 'inline-source-map',
  sassLoader: base.loaderConfig.sassLoader,
  resolve: base.resolve,
  // todo: find out what these are for
  // target: 'node',
  // node: {
  //   __filename: true,
  //   __dirname: true,
  //   console: true
  // },
  externals: /^[a-z][a-z\.\-0-9]*$/,
  // externals: [
  //   'react',
  //   'react-dom',
  //   'isomorphic-fetch',
  //   'react-router',
  //   'react-redux',
  //   'lodash',
  //   'normalizr',
  //   'humps',
  //   'react-addons-css-transition-group',
  //   'jquery',
  //   'redux-thunk',
  //   'redux',
  //   'redux-devtools-log-monitor',
  //   'redux-devtools-dock-monitor'
  // ]
}
