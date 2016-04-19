import { getEnv } from 'utils'

let env = getEnv()

// if (env === 'production') {
//   module.exports = require('./configureStore.prod')
// } else {
//   module.exports = require('./configureStore.dev')
// }

module.exports = require('./configureStore.prod')
