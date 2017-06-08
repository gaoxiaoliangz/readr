/**
 * args read from command line
 * --watch
 * --target=string
 */
import webpack from 'webpack'
import minimist from 'minimist'
import Observable from '../Observable'
import * as webpackConfig from '../webpack.config'

const argv = minimist(process.argv.slice(2))
const targetArg = argv.target
const isWatching = argv.w || argv.watch

const configMap = {
  dll: 'dllConfig',
  server: 'serverConfig',
  assets: 'clientConfig'
}

function bundle(target = targetArg) {
  const wpConfigName = configMap[target]
  const wpConfig = webpackConfig[wpConfigName]
  const allowedTargets = Object.keys(configMap).join(', ')  

  // todo: if tar is node, check 'build/static/assets.manifest.json' existence
  if (!wpConfig) {
    const noConfigError = new Error(`No config for ${target} found, allowed targets are: ${allowedTargets}`)
    throw noConfigError
  }

  const compiler = webpack(wpConfig)

  if (isWatching) {
    return new Observable((observer) => {
      compiler.watch({
        aggregateTimeout: 300,
        poll: false
      }, (err, stats) => {
        if (err) {
          console.info(stats.toString(wpConfig.stats))
          observer.onError(err)
        } else if (stats.hasErrors()) {
          console.info(stats.toString(wpConfig.stats))
        } else {
          observer.onNext('done')
        }
      })

      compiler.plugin('invalid', () => {
        observer.onNext('invalid')
      })
    })
  }

  return new Promise((resolve, reject) => {
    return compiler.run((err, stats) => {
      if (err) {
        return reject(err)
      }

      console.info(stats.toString(wpConfig.stats))
      return resolve()
    })
  })
}

export default bundle
