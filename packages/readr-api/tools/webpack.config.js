/**
 * args read from command line
 * --release
 * --verbose
 * --analyze
 */
import nodeExternals from 'webpack-node-externals'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import paths from './paths'
import getAppEnvironment from './env'

const isDebug = !process.argv.includes('--release')
const isVerbose = process.argv.includes('--verbose')
const isAnalyze = process.argv.includes('--analyze') || process.argv.includes('--analyse')

const rules = {
  esLint() {
    return {
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
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
        presets: [
          ['es2015', {
            modules: false
          }]
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
        {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            ...(babelConfig || _babelConfig)
          }
        },
        {
          loader: 'ts-loader'
        }
      ]
    }
  },
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
    // new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),

    // new WebpackMd5Hash(),

    // Webpack Bundle Analyzer
    // https://github.com/th0r/webpack-bundle-analyzer
    ...isAnalyze ? [new BundleAnalyzerPlugin()] : []
  ],
  module: {
    rules: [
      rules.typescript({
        babelConfig: {
          plugins: [
            // tsc target es2015 won't compile es6 to es5, and causing exsiting es5 code to fail
            'babel-plugin-transform-es2015-classes'
          ]
        }
      }),
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
