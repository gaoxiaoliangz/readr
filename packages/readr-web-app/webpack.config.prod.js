const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { configWebpack, resolveProject } = require('jellyweb')

module.exports = configWebpack({
  babel: {
    babelrc: {
      plugins: [
        ['import', { 'libraryName': 'antd', 'libraryDirectory': 'es', 'style': 'css' }]
      ]
    }
  },
  css: {
    extract: true
  },
  sass: {
    extract: true
  },
  media: {
    dataUrl: true,
  },
  production: true,
  env: {}
}, {
  entry: {
    main: resolveProject('src/index.jsx'),
  },
  output: {
    path: resolveProject('build'),
    filename: '[name]-[hash].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      styles: resolveProject('src/styles')
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: resolveProject('build/index.html'),
      template: resolveProject('src/index.html'),
      excludeChunks: ['app'],
      inject: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(resolveProject('node_modules')) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
  ]
})
