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
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import paths from './paths'
import getAppEnvironment from './env'

const isDebug = !process.argv.includes('--release')
const isVerbose = process.argv.includes('--verbose')
const isAnalyze = process.argv.includes('--analyze') || process.argv.includes('--analyse')

const vars = {
  cssLocalIdentName: '[local]_[hash:base64:5]',
  mediaFilename: 'media/[name].[hash:10].[ext]',
  vendorLibs: [
    // react tools
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
    'react-slick',
    'react-helmet',
    'react-markdown',
    '@gxl/redux-form',

    // utils
    // lodash has corresponding plugin to cut down the build size
    // if defined here, it will bundle the whole lodash package
    'babel-polyfill',
    'debug', // shouldn't be here
    'jquery', // todo: remove
    'normalizr',
    'humps',
    'isomorphic-fetch',
    'classnames',
    'marked',
    'moment',

    // lib dependencies
    'core-js', // todo: figure out which
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

  typescript({ babelConfig } = {}) {
    const _babelConfig = isDebug
      ? {
        plugins: [
          'babel-plugin-transform-es2015-classes',
          'babel-plugin-transform-es2015-classes'
        ]
      }
      : {
        presets: [
          ['es2015', {
            modules: false
          }]
        ],
        plugins: [
          'lodash'
        ]
      }

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
            ...(babelConfig || _babelConfig)
          }
        },
        {
          loader: 'awesome-typescript-loader'
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

  // Don't attempt to continue if there are any errors.
  bail: !isDebug,

  cache: isDebug,

  stats: {
    colors: true,
    reasons: isDebug,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose
  }
}


// -----------------------------------------------------------------------------
// webpack dll config
// -----------------------------------------------------------------------------
export const dllConfig = {
  entry: {
    dll: vars.vendorLibs
  },
  output: {
    path: paths.buildAssets,
    filename: 'js/[name].js',
    library: '__dll__'
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DllPlugin({
      path: path.join(paths.buildAssets, 'dll.manifest.json'),
      name: '__dll__'
    })
  ]
}


// -----------------------------------------------------------------------------
// webpack server config
// -----------------------------------------------------------------------------
export const serverConfig = {
  ...baseConfig,
  entry: {
    // babel-polyfill will make debugging less pleasant, worse mapping something
    server: [paths.serverSrc]
  },
  output: {
    ...baseConfig.output,
    path: paths.build,
    filename: '[name].js',
    libraryTarget: 'commonjs2',

    // editor break point support
    devtoolModuleFilenameTemplate: '../[resource-path]'
  },
  plugins: [
    // add support for node source map
    new webpack.BannerPlugin({
      banner: `require('source-map-support').install()`,
      raw: true,
      entryOnly: true
    }),

    new webpack.DefinePlugin(getAppEnvironment(isDebug, false).stringified),

    // Do not create separate chunks of the server bundle
    // https://webpack.github.io/docs/list-of-plugins.html#limitchunkcountplugin
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),

    new WebpackMd5Hash(),
  ],
  module: {
    rules: [
      rules.img({ emitFile: false }),
      rules.typescript({
        babelConfig: {
          plugins: [
            // tsc target es2015 won't compile es6 to es5, and causing exsiting es5 code to fail
            'babel-plugin-transform-es2015-classes'
          ]
        }
      }),
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
    'app': ['babel-polyfill', paths.clientIndex],
    'frameworks.global': path.join(paths.appStyles, 'frameworks.global.scss'),
    ...isDebug ? {} : {
      'vendor': vars.vendorLibs
    }
  },
  output: {
    ...baseConfig.output,
    path: paths.buildAssets,
    filename: isDebug ? 'js/[name].js' : 'js/[name].[chunkhash:10].js',
    chunkFilename: isDebug ? 'js/chunk.[id].js' : 'js/chunk.[chunkhash:10].[id].js',
  },
  plugins: [
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),

    new webpack.DefinePlugin(getAppEnvironment(isDebug, true).stringified),

    new ExtractTextPlugin({
      filename: 'css/[name].css',
      disable: false,
      allChunks: true
    }),

    // Webpack Bundle Analyzer
    // https://github.com/th0r/webpack-bundle-analyzer
    ...isAnalyze ? [new BundleAnalyzerPlugin()] : [],

    ...isDebug
      ? [
        new webpack.DllReferencePlugin({
          context: '.',
          manifest: (() => {
            try {
              return require('../build/assets/dll.manifest.json')
            } catch (error) {
              console.warn('WARNING: dll.manifest.json not found!')
              return {}
            }
          })()
        })
      ]
      : [
        // Minimize all JavaScript output of chunks
        // https://github.com/mishoo/UglifyJS2#compressor-options
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          compress: {
            screw_ie8: true, // React doesn't support IE8
            warnings: isVerbose,
            unused: true,
            dead_code: true,
          },
          mangle: {
            screw_ie8: true,
          },
          output: {
            comments: false,
            screw_ie8: true,
          },
        }),

        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessor: require('cssnano'), // eslint-disable-line
          cssProcessorOptions: { discardComments: { removeAll: true } },
          canPrint: true
        }),

        new ManifestPlugin({
          fileName: 'assets.manifest.json'
        }),

        new WebpackMd5Hash(),

        // Move modules that occur in multiple entry chunks to a new entry chunk (the commons chunk).
        // http://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks: Infinity
        }),

        new webpack.optimize.CommonsChunkPlugin({
          name: 'manifest',
          minChunks: Infinity
        })
      ],
  ],
  // or maybe 'inline-source-map',
  devtool: isDebug ? 'cheap-module-source-map' : false,
  module: {
    rules: [
      rules.img(),
      rules.scssLocal({ extract: true, isomorphic: false, sourceMap: isDebug }),
      rules.scssGlobal({ extract: true, isomorphic: false, sourceMap: isDebug }),
      rules.css({ extract: true, global: true, isomorphic: false }),
      rules.typescript(),
      rules.graphql()
    ]
  }
}
