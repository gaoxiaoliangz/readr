const webpack = require('webpack')
const fs = require('fs')
const vars = require('./variables')
const _ = require('lodash')

/**
 * @param names
 * {
 *   [name: string]: string
 * }
 */
const createDllReference = (names) => {
  try {
    return _.map(names, name => {
      return new webpack.DllReferencePlugin({
        context: '.',
        manifest: JSON.parse(fs.readFileSync(`${vars.paths.built}/${name}.dll.manifest.json`, 'utf8'))
      })
    })
  } catch (error) {
    console.warn('WARNING: ', error.message)
    return []
  }
}

module.exports = {
  prodEnv() {
    return new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    })
  },

  devEnv() {
    return new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    })
  },

  nodeSourceMapSupport() {
    return new webpack.BannerPlugin(`require('source-map-support').install()`, {
      raw: true,
      entryOnly: true
    })
  },

  occurenceOrder() {
    return new webpack.optimize.OccurenceOrderPlugin()
  },

  dllReference() {
    return createDllReference(vars.dllNames)
  },

  dll() {
    return new webpack.DllPlugin({
      path: `${vars.paths.built}/[name].dll.manifest.json`,
      name: vars.vendorLibName
    })
  },

  uglify() {
    return new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  },
}
