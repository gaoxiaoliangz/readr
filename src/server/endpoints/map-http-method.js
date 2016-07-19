const _ = require('lodash')

// const config = {
//   add: 'post',
//   list: 'get',
//   update: 'put',
//   remove: 'delete',
// }

const config = {
  add: 'post',
  list: 'get',
  // todo
  find: 'get',
  update: 'put',
  remove: 'delete',
}

module.exports = function mapHttpMethod(methodName) {
  const httpMethod = _.get(config, methodName)

  if (!httpMethod) {
    throw new Error(`Undefined method: ${methodName}!`)
  }

  return httpMethod
}
