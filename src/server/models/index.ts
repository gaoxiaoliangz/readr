import schemas from './schemas'
import Model from './model'
const dp = {}

Object.keys(schemas).forEach(key => {
  dp[key] = new Model(schemas[key])
})

module.exports = dp
