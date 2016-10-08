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
const dllReference = (names) => {
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

  dllReference: () => dllReference(vars.dllNames),

  dllDefinition: new webpack.DllPlugin({
    path: `${vars.paths.built}/[name].dll.manifest.json`,
    name: vars.vendorLibName
  }),

  uglify: new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
}
