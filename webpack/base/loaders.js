const vars = require('./variables')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const parseLoadersForExtractTextPlugin = loaders => {
  return [
    loaders[0],
    loaders.slice(1, loaders.length).join('!')
  ]
}

module.exports = {
  loaderConfig: {
    sassLoader() {
      return {
        // 用于 scss 文件里 import 其它文件
        includePaths: [
          vars.paths.isomorphic,
          vars.paths.static
        ]
      }
    },

    postcss() {
      return [
        require('postcss-import')({
          path: [
            vars.paths.isomorphic
          ]
        }),
        require('postcss-cssnext')
      ]
    },
  },

  babel() {
    return {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      // query: {
      //   presets: ['es2015', 'react', 'stage-3'],
      //   plugins: ['transform-regenerator']
      // }
    }
  },

  image({ emitFile } = { emitFile: true }) {
    const emitFileConfig = emitFile ? 'emitFile=true' : 'emitFile=false'

    return {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        `file?name=${vars.imageName}&${emitFileConfig}`,
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }
  },

  typescript({ officialLoader, isHot } = {}) {
    const tsLoader = officialLoader ? 'ts' : 'awesome-typescript'

    return {
      test: /\.tsx?$/,
      loaders: isHot
        ? ['react-hot-loader/webpack', 'babel', tsLoader]
        : ['babel', tsLoader]
    }
  },

  sass({ isomorphic, global, extract, sourceMap } = {}) {
    const styleLoader = isomorphic ? 'isomorphic-style' : 'style'
    const sourceMapConfig = sourceMap ? 'sourceMap=true' : 'sourceMap=false'
    const localIdentName = global ? '[local]' : vars.cssLocalIdentName

    const loaders = [
      `${styleLoader}?${sourceMapConfig}`,
      `css?${sourceMapConfig}&modules&importLoaders=1&localIdentName=${localIdentName}`,
      `sass?${sourceMapConfig}`,
    ]

    return {
      test: /\.scss$/,
      loader: extract
        ? ExtractTextPlugin.extract.apply(null, parseLoadersForExtractTextPlugin(loaders))
        : loaders.join('!')
    }
  },

  postcss({ global, extract, sourceMap, isomorphic } = {}) {
    const styleLoader = isomorphic ? 'isomorphic-style' : 'style'
    const localIdentName = global ? '[local]' : vars.cssLocalIdentName
    const sourceMapConfig = sourceMap ? 'sourceMap=true' : 'sourceMap=false'

    const loaders = [
      `${styleLoader}?${sourceMapConfig}`,
      `css?${sourceMapConfig}&modules&importLoaders=1&localIdentName=${localIdentName}`,
      `postcss?${sourceMapConfig}`,
    ]

    return {
      test: /\.css$/,
      loader: extract
        ? ExtractTextPlugin.extract.apply(null, parseLoadersForExtractTextPlugin(loaders))
        : loaders.join('!')
    }
  },

  // 未经测试
  css() {
    return {
      test: /\.css$/,
      loaders: [
        'style',
        'css?modules&importLoaders=1&localIdentName=[local]',
        'resolve-url',
      ]
    }
  }
}
