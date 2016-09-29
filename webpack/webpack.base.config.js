// # WEBPACK ROCKS!!
// webpack 配置合集，各种情况各取所需
const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const _ = require('lodash')
const fs = require('fs')

function parseLoadersForExtractTextPlugin(loaders) {
  return [
    loaders[0],
    loaders.slice(1, loaders.length).join('!')
  ]
}

/**
 * ## 定义常用变量
 */

const pathPrefix = process.cwd()
const paths = {
  root: pathPrefix,
  static: path.join(pathPrefix, 'src/static'),
  src: path.join(pathPrefix, 'src'),
  entry: path.join(pathPrefix, 'src/entry'),
  isomorphic: path.join(pathPrefix, 'src/isomorphic'),
  server: path.join(pathPrefix, 'src/server'),
  built: path.join(pathPrefix, 'assets/built')
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

// names: { name: string }[]
const dllReference = (names) => {
  try {
    return _.map(names, name => {
      return new webpack.DllReferencePlugin({
        context: '.',
        manifest: JSON.parse(fs.readFileSync(`${paths.built}/${name}.dll.manifest.json`, 'utf8'))
      })
    })
  } catch (error) {
    console.warn('WARNING: ', error.message)
    return []
  }
}

// code splitting
const reactKit = [
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
]

const reactDevKit = [
  'redux-devtools-log-monitor',
  'redux-devtools-dock-monitor',
]

const utils = [
  'lodash',
  'jquery',
  'normalizr',
  'humps',
  'isomorphic-fetch',
  'classnames',
  'marked',
  'moment',
]

module.exports = {
  vars: {
    pathPrefix,
    paths,
    cssLocalIdentName,
    imageName,
    vendorLibName,
    hot,

    dllNames,
    reactKit,
    reactDevKit,
    utils
  },

  plugins: {
    envProd: new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    envDev: new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    nodeSourceMapSupport: new webpack.BannerPlugin(`require('source-map-support').install()`, {
      raw: true,
      entryOnly: true
    }),
    occurenceOrder: new webpack.optimize.OccurenceOrderPlugin(),
    dllReference: () => dllReference(dllNames),
    dllDefinition: new webpack.DllPlugin({
      path: `${paths.built}/[name].dll.manifest.json`,
      name: vendorLibName
    }),
    uglify: new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  },

  loaders: {
    babel: {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
      },
    },
    
    image({ emitFile } = { emitFile: true }) {
      const emitFileConfig = emitFile ? 'emitFile=true' : 'emitFile=false'

      return {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          `file?name=${imageName}&${emitFileConfig}`,
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    },

    ts({ officialLoader, isHot } = {}) {
      const tsLoader = officialLoader ? 'ts' : 'awesome-typescript'

      return {
        test: /\.tsx?$/,
        loaders: isHot
          ? ['react-hot', 'babel', tsLoader]
          : ['babel', tsLoader]
      }
    },

    // css
    sass({ isomorphic, global, extract, sourceMap } = {}) {
      const styleLoader = isomorphic ? 'isomorphic-style' : 'style'
      const sourceMapConfig = sourceMap ? 'sourceMap=true' : 'sourceMap=false'
      const localIdentName = global ? '[local]' : cssLocalIdentName

      const loaders = [
        `${styleLoader}?${sourceMapConfig}`,
        `css?${sourceMapConfig}&modules&importLoaders=1&localIdentName=${localIdentName}`,
        `sass?${sourceMapConfig}`,
        // 'resolve-url',
      ]

      return {
        test: /\.scss$/,
        loader: extract
          ? ExtractTextPlugin.extract.apply(null, parseLoadersForExtractTextPlugin(loaders))
          : loaders.join('!')
      }
    },

    postcss({ global, extract, sourceMap, isomorphic } = {}) {
      const styleLoader = isomorphic ? 'isomorphic-style' : 'style'
      const localIdentName = global ? '[local]' : cssLocalIdentName
      const sourceMapConfig = sourceMap ? 'sourceMap=true' : 'sourceMap=false'

      const loaders = [
        `${styleLoader}?${sourceMapConfig}`,
        `css?${sourceMapConfig}&modules&importLoaders=1&localIdentName=${localIdentName}`,
        `postcss?${sourceMapConfig}`,
        // 'resolve-url',
      ]

      return {
        test: /\.css$/,
        loader: extract
          ? ExtractTextPlugin.extract.apply(null, parseLoadersForExtractTextPlugin(loaders))
          : loaders.join('!')
      }
    },

    css: {
      test: /\.css$/,
      loaders: [
        'style',
        'css?modules&importLoaders=1&localIdentName=[local]',
        'resolve-url',
      ]
    },
  },

  loaderConfig: {
    postcss: () => {
      return [
        require('postcss-import')({
          path: [
            paths.isomorphic
          ]
        }),
        require('postcss-cssnext')
      ]
    },
    // postcss: () => {
    //   return [
    //     require('postcss-import')({
    //       path: [
    //         paths.isomorphic
    //       ]
    //     }),
    //     require('postcss-calc'),
    //     require('postcss-custom-properties'),
    //     require('postcss-apply'),
    //   ]
    // },
    sassLoader: {
      // 用于 scss 文件里 import 其它文件
      includePaths: [
        paths.isomorphic,
        paths.static
      ]
    },
  },

  resolve: {
    // 这边定义的 root 暂时没用，因为 vs code 里面目前配置的是只使用相对路径
    root: paths.src,
    alias: {
      // 方便在组建里面引用通用的 scss 文件（可能不会太常用）
      // composes 使用的是 webpack resolve 里面的规则
      styles: `${paths.isomorphic}/styles`,
    },
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
  },
}
