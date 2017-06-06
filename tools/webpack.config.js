/**
 * args read from command line
 * --release
 * --verbose
 * --analyze
 */
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import _ from 'lodash'
import nodeExternals from 'webpack-node-externals'
import WebpackMd5Hash from 'webpack-md5-hash'
import webpack from 'webpack'
import ManifestPlugin from 'webpack-manifest-plugin'
import paths from './paths'

const isDebug = !process.argv.includes('--release')
const isVerbose = process.argv.includes('--verbose')
const isAnalyze = process.argv.includes('--analyze') || process.argv.includes('--analyse')

const vars = {
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
    'react-apollo',

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
  ]
}

const makeScssRule = (config) => {
  const defaultStyleRuleConfig = {
    sourceMap: true,
    extract: true,
    global: false,
    isomorphic: false
  }
  const ruleConfig = _.assign({}, defaultStyleRuleConfig, config)
  const { test, isomorphic, global, extract, sourceMap } = ruleConfig
  const styleLoader = isomorphic ? 'isomorphic-style-loader' : 'style-loader'
  const localIdentName = global ? '[local]' : vars.cssLocalIdentName

  const loaders = [
    {
      loader: 'css-loader',
      query: {
        sourceMap,
        modules: true,
        importLoaders: 1,
        localIdentName
      }
    },
    {
      loader: 'sass-loader'
    }
  ]

  return {
    test,
    use: extract
      ? ExtractTextPlugin.extract({
        fallback: styleLoader,
        use: loaders,
        publicPath: paths.publicPath
      })
      : [styleLoader].concat(loaders)
  }
}

const rules = {
  esLint() {
    return {
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }
  },

  graphql() {
    return {
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    }
  },

  es() {
    return {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }
  },

  typescript({ officialLoader } = {}) {
    // todo: remove officialLoader
    const tsLoader = officialLoader ? 'ts-loader' : 'awesome-typescript-loader'

    return {
      test: /\.tsx?$/,
      use: [
        // have bugs, but I'll keep it here
        // {
        //   loader: 'string-replace-loader',
        //   options: {
        //     search: '_import(',
        //     replace: 'import('
        //   }
        // },
        {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            plugins: ['babel-plugin-transform-es2015-classes']
          }
        },
        {
          loader: tsLoader
        }
      ]
    }
  },

  scssLocal({ isomorphic, extract, sourceMap }) {
    return makeScssRule({
      // treat it as local if 'global' is not in filename
      // possible issue:
      // filename like global.examle.scss will be ommitted by both global and local rules
      test: /^((?!global).)*\.scss$/,
      isomorphic,
      extract,
      sourceMap,
      global: false
    })
  },

  scssGlobal({ isomorphic, extract, sourceMap }) {
    return makeScssRule({
      test: /\.global.scss$/,
      isomorphic,
      extract,
      sourceMap,
      global: true
    })
  },

  css({ isomorphic, global, extract, sourceMap }) {
    const styleLoader = isomorphic ? 'isomorphic-style-loader' : 'style-loader'
    const localIdentName = global ? '[local]' : vars.cssLocalIdentName

    const loaders = [
      {
        loader: 'css-loader',
        query: {
          sourceMap,
          modules: true,
          importLoaders: 1,
          localIdentName
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [
            require('postcss-import')(), // eslint-disable-line
            require('postcss-cssnext') // eslint-disable-line
          ]
        }
      },
    ]

    return {
      test: /\.css$/,
      use: extract
        ? ExtractTextPlugin.extract({
          fallback: styleLoader,
          use: loaders,
          // TODO
          publicPath: '/static'
        })
        : [styleLoader].concat(loaders)
    }
  },

  img({ emitFile } = { emitFile: true }) {
    const emitFileConfig = emitFile ? 'emitFile=true' : 'emitFile=false'

    return {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        `file-loader?name=${vars.mediaFilename}&${emitFileConfig}`,
        // 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }
  }
}


// -----------------------------------------------------------------------------
// Base configuration
// -----------------------------------------------------------------------------
const baseConfig = {
  output: {
    publicPath: paths.publicPath
  },
  resolve: {
    alias: {
      styles: paths.appStyles
    },
    modules: [
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  stats: {
    colors: true,
    reasons: isDebug,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose,
  }
}


// -----------------------------------------------------------------------------
// webpack dll config
// -----------------------------------------------------------------------------
export const dllConfig = {
  entry: {
    vendor: vars.vendorLibs
  },
  output: {
    path: paths.buildStatic,
    filename: 'js/[name].dll.js',
    library: '__dll_[name]__'
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DllPlugin({
      path: path.join(paths.buildStatic, 'dll.[name].manifest.json'),
      name: '__dll_[name]__'
    })
  ]
}


// -----------------------------------------------------------------------------
// webpack server config
// -----------------------------------------------------------------------------
export const serverConfig = {
  ...baseConfig,
  entry: {
    // index: ['babel-polyfill', paths.serverSrc]
    index: [paths.serverSrc]
  },
  output: {
    ...baseConfig.output,
    path: paths.buildNode,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    chunkFilename: 'chunk.[id].js',

    // editor break point support
    devtoolModuleFilenameTemplate: '../../[resource-path]'
  },
  plugins: [
    // add support for node source map
    new webpack.BannerPlugin({
      banner: `require('source-map-support').install()`,
      raw: true,
      entryOnly: true
    }),

    new WebpackMd5Hash(),
  ],
  module: {
    rules: [
      rules.img({ emitFile: false }),
      rules.typescript({ officialLoader: false }),
      rules.scssLocal({ isomorphic: true, extract: false }),
      rules.scssGlobal({ isomorphic: true, extract: false }),
      rules.css({ isomorphic: true }),
      rules.graphql()
    ]
  },
  devtool: 'source-map',
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false
  },
  externals: [nodeExternals()]
}


// -----------------------------------------------------------------------------
// webpack client config
// -----------------------------------------------------------------------------
export const clientConfig = {
  ...baseConfig,
  entry: {
    app: [
      // activate HMR for React
      'react-hot-loader/patch',

      // ?http://localhost:4001 cannot be left out
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      `webpack-dev-server/client?http://localhost:4001`,

      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
      'webpack/hot/only-dev-server',

      'babel-polyfill',
      paths.clientTestIndex
    ],
    'frameworks.global': path.join(paths.appStyles, 'frameworks.global.scss')
  },
  output: {
    ...baseConfig.output,
    path: paths.buildStatic,
    filename: 'js/[name].js'
  },
  plugins: [
    // // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"development"`,
    }),

    new ExtractTextPlugin({
      filename: 'css/[name].css',
      disable: false,
      allChunks: true
    }),

    new ManifestPlugin({
      fileName: 'assets.manifest.json'
    }),

    // new webpack.DllReferencePlugin({
    //   context: '.',
    //   manifest: require('../build/static/dll.vendor.manifest.json')
    // })
  ],
  // devtool: 'inline-source-map',
  devtool: isDebug ? 'cheap-module-source-map' : false,
  module: {
    rules: [
      rules.img(),
      rules.scssLocal({ extract: false, isomorphic: false, sourceMap: true }),
      rules.scssGlobal({ extract: true, isomorphic: false, sourceMap: true }),
      rules.css({ extract: false, global: false, isomorphic: false }),
      rules.typescript({ officialLoader: false }),
      rules.graphql()
    ]
  }
}
