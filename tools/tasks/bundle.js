/**
 * args
 * --target=dll | node | static
 */
import webpack from 'webpack'
import minimist from 'minimist'
import Observable from '../Observable'
import * as webpackConfig from '../webpack.config'

const argv = minimist(process.argv.slice(2))
const argTarget = argv.target
const isWatching = argv.w || argv.watch
const configMap = {
  dll: 'dllConfig',
  node: 'serverConfig',
  static: 'clientConfig'
}
function bundle(target = argTarget) {
  const wpConfigName = configMap[target]
  const wpConfig = webpackConfig[wpConfigName]
  const allowedTargets = Object.keys(configMap).join(', ')
  if (!wpConfigName) {
    throw new Error(`No config for ${target} found, allowed targets are: ${allowedTargets}`)
  }

  const compiler = webpack(wpConfig)

  if (isWatching) {
    return new Observable((observer) => {
      compiler.watch(
        {
          aggregateTimeout: 300,
          poll: false
        },
        (err, stats) => {
          if (err) {
            console.info(stats.toString(wpConfig.stats))
            observer.onError(err)
          } else {
            if (stats.hasErrors()) {
              console.info(stats.toString(wpConfig.stats))
            }
            observer.onNext('done')
          }
        }
      )

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
