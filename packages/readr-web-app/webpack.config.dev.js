const { configWebpack, resolveProject } = require('jellyweb')

module.exports = configWebpack({
  // Here are the features that have been enabled
  babel: {
    react: true,
  },
  typescript: true,
  sass: {
    extract: false
  },
  media: {
    dataUrl: true,
  }
}, {
  entry: {
    main: resolveProject('src/index.tsx'),
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
