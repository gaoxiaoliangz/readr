import { getEnv } from 'utils'

let env = getEnv()

// if (env === 'production') {
//   module.exports = require('./Root.prod')
// } else {
//   module.exports = require('./Root.dev')
// }

module.exports = require('./Root.prod')
