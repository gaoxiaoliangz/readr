const HtmlWebpackPlugin = require('html-webpack-plugin')
const { configWebpack, resolveProject } = require('jellyweb')

module.exports = configWebpack({
  features: [
    ['babel', {
      options: {
        plugins: [
          ['import', { 'libraryName': 'antd', 'libraryDirectory': 'es', 'style': 'css' }]
        ]
      }
    }],
    'css',
    ['sass', {
      scoped: true
    }],
    ['media', {
      dataUrl: true
    }],
    'split-vendor',
  ],
  presets: [
    'production'
  ],
  scopedClassName: '[hash:base64:8]',
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
  ]
})
