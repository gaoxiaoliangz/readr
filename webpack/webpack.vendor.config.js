const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    react: ['react', 'react-dom', 'redux', 'react-redux', 'react-router', 'redux-thunk', 'react-css-modules', 'react-side-effect', 'react-router-redux'],
    utils: ['lodash', 'jquery']
  },
  output: {
    path: path.join(process.cwd(), 'assets/built'),
    filename: '[name].bundle.js',
    library: '[name]_lib',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(process.cwd(), 'assets/built/[name]-manifest.json'),
      name: '[name]_lib'
    }),
  ],
}
