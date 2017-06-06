import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import chalk from 'chalk'
import paths from '../paths'
import { clientConfig } from '../webpack.config'
import Observable from '../Observable'

function runDevServer(host, port, protocol) {
  return new Observable((observer) => {
    const compiler = webpack(clientConfig)

    compiler.plugin('invalid', () => {
      observer.onNext('invalid')
    })

    compiler.plugin('done', () => {
      const serverAddr = protocol + '://' + host + ':' + port + '/'
      console.info(chalk.cyan(`Server running at ${serverAddr}`))
      // openBrowser(serverAddr)
      observer.onNext('done')
    })

    const devServerInstance = new WebpackDevServer(compiler, {
      compress: true,
      clientLogLevel: 'none',
      contentBase: paths.appPublic,
      hot: true,
      publicPath: clientConfig.output.publicPath,
      quiet: true,
      watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 500
      },
      proxy: {
        '*': {
          target: 'http://localhost:8090',
          bypass: (req, /* res, proxyOptions */) => { // eslint-disable-line consistent-return
            if (req.url.indexOf('app.js') !== -1) {
              return false
            }
          }
        }
      },
      // Enable HTTPS if the HTTPS environment variable is set to 'true'
      https: protocol === 'https',
      host,

      // https://github.com/webpack/webpack-dev-server/releases/tag/v2.4.3
      // insecure, but works fine when in dev
      disableHostCheck: true,

      // access to express
      setup(app) {
        // todo: use a variable
        // app.use('/static', express.static(paths.buildStatic))
        app.use((req, res, next) => {
          res.setHeader('Access-Control-Allow-Origin', '*')
          next()
        })
      }
    })

    // Launch WebpackDevServer.
    devServerInstance.listen(port, (err /* , result */) => {
      if (err) {
        observer.onError(err)
      }
    })
  })
}

function devServer() {
  const port = 4001
  // add hmr config
  // clientConfig.entry.app = [...new Set([
  //   'babel-polyfill',
  //   'react-hot-loader/patch',
  //   // `webpack-hot-middleware/client?http://localhost:4001`,
  // ].concat(clientConfig.entry.app))]

  // clientConfig.output.filename = clientConfig.output.filename.replace('[chunkhash', '[hash')
  // clientConfig.output.chunkFilename = clientConfig.output.chunkFilename.replace('[chunkhash', '[hash')
  // const { query } = clientConfig.module.rules.find(x => x.loader === 'babel-loader')
  // query.plugins = ['react-hot-loader/babel'].concat(query.plugins || [])
  // clientConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
  // clientConfig.plugins.push(new webpack.NoEmitOnErrorsPlugin())

  const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'
  const host = process.env.HOST || 'localhost'

  return runDevServer(host, port, protocol)
}

export default devServer
