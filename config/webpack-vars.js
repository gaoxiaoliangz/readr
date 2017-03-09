const paths = require('./paths')

module.exports = {
  cssLocalIdentName: '[local]_[hash:base64:5]',
  mediaFilename: 'media/[name].[hash:10].[ext]',
  vendorLibs: [
    // react
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
    'react-motion',
    'reselect',
    'redux-saga',

    // utils
    // lodash has corresponding plugin to cut down the build size
    // if defined here, it will bundle the whole lodash package
    'jquery',
    'normalizr',
    'humps',
    'isomorphic-fetch',
    'classnames',
    'marked',
    'moment'
  ],
  devLibs: [
    'redux-devtools-log-monitor',
    'redux-devtools-dock-monitor',
  ],
  resolve: {
    alias: {
      styles: paths.stylesSrc,
      vendor: paths.vendorModules
    },
    modules: [
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
}
