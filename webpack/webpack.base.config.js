/**
 * webpack 配置合集，各种情况各取所需
 * 不可直接使用！
 */

const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const pathPrefix = process.cwd()
const paths = {
  root: pathPrefix,
  src: path.join(pathPrefix, 'src/client'),
  built: path.join(pathPrefix, 'assets/built')
}
const cssLocalIdentName = '[name]-[local]-[hash:base64:5]'
const imageName = '[name].[hash].[ext]'

module.exports = {
  paths,
  hot: 'webpack-hot-middleware/client',
  loaders: {
    imageWebpack: {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        `file?hash=sha512&digest=hex&name=${imageName}`,
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    },
    babel: {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
      },
    },
    postCss: {
      test: /\.css$/,
      loaders: [
        'style?sourceMap',
        `css?modules&importLoaders=1&localIdentName=${cssLocalIdentName}`,
        'resolve-url',
        'postcss?sourceMap'
      ]
    },
    sass: {
      test: /\.scss$/,
      loaders: [
        'style-loader?sourceMap',
        `css?modules&importLoaders=1&localIdentName=${cssLocalIdentName}`,
        'resolve-url',
        'sass?sourceMap'
      ]
    },
    sassWithExtractText: {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style-loader?sourceMap',
        `css-loader?modules&importLoaders=1&localIdentName=${cssLocalIdentName}!resolve-url-loader!sass-loader?sourceMap`
      )
    },
    ts: {
      test: /\.tsx?$/,
      loaders: ['babel', 'ts'],
    },
    tsHot: {
      test: /\.tsx?$/,
      loaders: ['react-hot', 'babel', 'awesome-typescript'],
    }
  },

  loaderConfig: {
    postcss: () => {
      return [require('postcss-cssnext'), require('postcss-import')]
    },
    sassLoader: {
      includePaths: [paths.src]
    },
  },

  resolve: {
    root: paths.src,
    alias: {
      styles: `${paths.src}/shared/scss`,
    },
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
  },
}
