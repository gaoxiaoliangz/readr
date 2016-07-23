const webpack = require('webpack')
const base = require('./webpack.base.config')
const ManifestPlugin = require('webpack-manifest-plugin')

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
    filename: '[name].lib.[chunkhash].js',
    library: base.vendorLibName
  },
  plugins: [
    base.plugins.dllDefinitionProd,
    new ManifestPlugin({
      fileName: 'vendor.manifest.json',
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: {
        warnings: false,
      }
    })
  ],
}
