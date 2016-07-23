const webpack = require('webpack')
const base = require('./webpack.base.config')

module.exports = {
  entry: {
    react: ['react', 'react-dom', 'redux', 'react-redux', 'react-router', 'redux-thunk', 'react-css-modules', 'react-side-effect', 'react-router-redux'],
    utils: ['lodash', 'jquery']
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
