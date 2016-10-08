const path = require('path')

const pathPrefix = process.cwd()

const paths = {
  root: pathPrefix,
  src: path.join(pathPrefix, 'src'),
  built: path.join(pathPrefix, 'assets/built'),
  static: path.join(pathPrefix, 'src/static'),
  isomorphic: path.join(pathPrefix, 'src/isomorphic'),
  server: path.join(pathPrefix, 'src/server')
}

const cssLocalIdentName = '[local]_[hash:base64:5]'

const imageName = 'img/[name].[hash:10].[ext]'

// 暴露到全局变量的名称
const vendorLibName = '_[name]_dll'

// HMR entry 里面的一个标记，具体不懂。。
const hot = 'webpack-hot-middleware/client'

// webpack 会使用文件名作为变量，所以不能使用带有 - 的名字
// 这边的配置会同时影响生成和引用，所以只需在这边修改就行了
const dllNames = {
  reactKit: 'react_kit',
  utils: 'utils'
}

// code splitting
const libs = {
  reactKit: [
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
    'immutable',
    'react-motion',
    'redux-form',
    'reselect',
    'redux-saga'
  ],

  reactDevKit: [
    'redux-devtools-log-monitor',
    'redux-devtools-dock-monitor',
  ],

  utils: [
    'lodash',
    'jquery',
    'normalizr',
    'humps',
    'isomorphic-fetch',
    'classnames',
    'marked',
    'moment',
  ]
}

module.exports = {
  pathPrefix,
  paths,
  cssLocalIdentName,
  imageName,
  vendorLibName,
  hot,
  dllNames,
  libs
}
