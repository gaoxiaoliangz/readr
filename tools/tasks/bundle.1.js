/**
 * args
 * --target=dll | node | static
 */
import webpack from 'webpack'
import minimist from 'minimist'
import * as webpackConfig from '../webpack.config'

const argv = minimist(process.argv.slice(2))
const argTarget = argv.target
const isWatching = argv.w || argv.watch
const configMap = {
  dll: 'dllConfig',
  node: 'serverConfig',
  static: 'clientConfig'
}

function* bundle(target = argTarget) {
  return new Promise((resolve, reject) => {
    const wpConfigName = configMap[target]
    const wpConfig = webpackConfig[wpConfigName]
    const allowedTargets = Object.keys(configMap).join(', ')

    if (!wpConfigName) {
      return reject(new Error(`No config for ${target} found, allowed targets are: ${allowedTargets}`))
    }

    const processCompilerResult = (err, stats) => {
      if (err) {
        return reject(err)
      }

      console.info(stats.toString(wpConfig.stats))
      return resolve()
    }

    const compiler = webpack(wpConfig)

    if (isWatching) {
      compiler.watch(
        {
          aggregateTimeout: 300,
          poll: false
        },
        processCompilerResult
      )

      return compiler.plugin('invalid', processCompilerResult)
    }
    return compiler.run(processCompilerResult)
  })
}

export default bundle
