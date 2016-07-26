// # WEBPACK ROCKS!!
// webpack 配置合集，各种情况各取所需
const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const _ = require('lodash')

/**
 * ## 定义常用变量
 */

const pathPrefix = process.cwd()
const paths = {
  root: pathPrefix,
  src: path.join(pathPrefix, 'src/client'),
  built: path.join(pathPrefix, 'assets/built')
}
const cssLocalIdentName = '__[name]__[local]__[hash:base64:5]'
const imageName = './img/[name].[hash:10].[ext]'

// 暴露到全局变量的名称
const vendorLibName = '_[name]_dll'

// HMR entry 里面的一个标记，具体不懂。。
const hot = 'webpack-hot-middleware/client'

// webpack 会使用文件名作为变量，所以不能使用带有 - 的名字
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
        manifest: require(`${paths.built}/${name}.dll.manifest.json`)
      })
    })
  } catch (error) {
    console.warn('WARNING: ', error.message, '(normally this message can be ignored)')
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
    dllReference: dllReference(dllNames),
    dllDefinition: new webpack.DllPlugin({
      path: `${paths.built}/[name].dll.manifest.json`,
      name: vendorLibName
    }),
  },

  loaders: {
    imageWebpack: {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        // `file?hash=sha512&digest=hex&name=${imageName}`,
        // `file?hash=${imageHash}&digest=hex&name=${imageName}`,
        `file?name=${imageName}`,
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    },
    babel: {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
      },
    },
    postCss: {
      test: /\.css$/,
      loaders: [
        'style?sourceMap',
        `css?modules&importLoaders=1&localIdentName=${cssLocalIdentName}`,
        'resolve-url',
        'postcss?sourceMap'
      ]
    },
    sass: {
      test: /\.scss$/,
      loaders: [
        'style?sourceMap',
        `css?modules&importLoaders=1&localIdentName=${cssLocalIdentName}`,
        'resolve-url',
        'sass?sourceMap'
      ]
    },
    sassIsomorphic: {
      test: /\.scss$/,
      loaders: [
        'isomorphic-style?sourceMap',
        `css?modules&importLoaders=1&localIdentName=${cssLocalIdentName}`,
        'resolve-url',
        'sass?sourceMap'
      ]
    },
    sassWithExtractText: {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style?sourceMap',
        `css-loader?modules&importLoaders=1&localIdentName=${cssLocalIdentName}!resolve-url-loader!sass-loader?sourceMap`
      )
    },
    ts: {
      test: /\.tsx?$/,
      loaders: ['babel', 'ts'],
    },
    tsHot: {
      test: /\.tsx?$/,
      loaders: ['react-hot', 'babel', 'awesome-typescript'],
    }
  },

  loaderConfig: {
    postcss: () => {
      return [require('postcss-cssnext'), require('postcss-import')]
    },
    sassLoader: {
      // 用于 scss 文件里 import 其它文件
      includePaths: [paths.src + '/shared/scss']
    },
  },

  resolve: {
    // 这边定义的 root 暂时没用，因为 vs code 里面目前配置的是只使用相对路径
    root: paths.src,
    alias: {
      // 方便在组建里面引用通用的 scss 文件（可能不会太常用）
      styles: `${paths.src}/shared/scss`,
    },
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
  },
}
