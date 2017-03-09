const webpack = require('webpack')
const path = require('path')
const vars = require('./webpack-vars')
const paths = require('./paths')

module.exports = {
  entry: {
    vendor: vars.vendorLibs
  },
  output: {
    path: paths.buildStatic,
    filename: 'js/[name].dll.js',
    library: '__dll_[name]__'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(paths.buildStatic, 'dll.[name].manifest.json'),
      name: '__dll_[name]__'
    })
  ]
}
