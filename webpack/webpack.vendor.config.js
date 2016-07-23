const webpack = require('webpack')
const base = require('./webpack.base.config')

module.exports = {
  entry: {
    react: [
      'react',
      'react-dom',
      'react-addons-css-transition-group',
      'redux',
      'react-redux',
      'react-router',
      'redux-thunk',
      'react-css-modules',
      'react-side-effect',
      'react-router-redux',
      'redux-devtools-log-monitor',
      'redux-devtools-dock-monitor',
    ],
    utils: [
      'lodash',
      'jquery',
      'normalizr',
      'humps',
      'isomorphic-fetch',
    ]
  },
  output: {
    path: base.paths.built,
    filename: '[name].bundle.js',
    library: '[name]_lib',
  },
  plugins: [
    new webpack.DllPlugin({
      path: `${base.paths.built}/[name]-manifest.json`,
      name: '[name]_lib'
    }),
  ],
}
