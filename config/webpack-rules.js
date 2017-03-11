const ExtractTextPlugin = require('extract-text-webpack-plugin')
const _ = require('lodash')
const paths = require('./paths')
const vars = require('./webpack-vars')

const DEFAULT_STYLE_RULE_CONFIG = {
  sourceMap: true,
  extract: true,
  global: false,
  isomorphic: false
}

module.exports = {
  lint() {
    return {
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }
  },

  js() {
    return {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }
  },

  ts({ officialLoader } = {}) {
    const tsLoader = officialLoader ? 'ts-loader' : 'awesome-typescript-loader'

    return {
      test: /\.tsx?$/,
      // use: ['babel-loader', tsLoader]
      use: [tsLoader]
    }
  },

  makeScssRule(config) {
    const ruleConfig = _.assign({}, DEFAULT_STYLE_RULE_CONFIG, config)
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
  },

  scssLocal({ isomorphic, extract, sourceMap }) {
    return this.makeScssRule({
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
    return this.makeScssRule({
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
        'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }
  }
}
