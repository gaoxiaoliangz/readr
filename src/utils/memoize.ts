import _ from 'lodash'
import md5 from 'vendor/md5'

const debug = require('debug')('readr:memoize')

const cacheKeyResolver = (...args) => {
  const hash = md5(JSON.stringify(args))
  debug('cached args as hash: ', hash)
  return hash
}

const memoize = fn => _.memoize(fn, cacheKeyResolver)

export default memoize
