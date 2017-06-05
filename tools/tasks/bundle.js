/**
 * runtime arg
 * targetBundleName: dll | node | static
 * --target=targetBundleName
 */

import webpack from 'webpack'
import minimist from 'minimist'
import * as webpackConfig from '../webpack.config'

const argv = minimist(process.argv.slice(2))
const argTarget = argv.target
const configMap = {
  dll: 'dllConfig',
  node: 'serverConfig',
  static: 'clientConfig'
}

const bundle = (target = argTarget) => {
  return new Promise((resolve, reject) => {
    const wpConfigName = configMap[target]
    const wpConfig = webpackConfig[wpConfigName]
    const allowedTargets = Object.keys(configMap).join(', ')

    if (!wpConfigName) {
      return reject(new Error(`No config for ${target} found, allowed targets are: ${allowedTargets}`))
    }

    return webpack(wpConfig).run((err, stats) => {
      if (err) {
        return reject(err)
      }

      console.info(stats.toString(wpConfig.stats))
      return resolve()
    })
  })
}

export default bundle
