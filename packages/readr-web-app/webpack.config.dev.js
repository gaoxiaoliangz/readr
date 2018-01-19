const { configWebpack, resolveProject } = require('jellyweb')

module.exports = configWebpack({
  babel: true,
  css: true,
  sass: true,
  media: {
    dataUrl: true,
  },
  typescript: true
}, {
  entry: {
    main: resolveProject('src/index.jsx'),
  },
  output: {
    path: resolveProject('build'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  resolve: {
    alias: {
      styles: resolveProject('src/styles')
    },
  },
  devtool: 'sourcemap',
})
