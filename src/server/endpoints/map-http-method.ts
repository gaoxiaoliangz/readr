import _ from 'lodash'

const config = {
  add: 'post',
  list: 'get',
  // todo
  find: 'get',
  update: 'put',
  remove: 'delete',
}

export default function mapHttpMethod(methodName) {
  const httpMethod = _.get(config, methodName) as string

  if (!httpMethod) {
    throw new Error(`Undefined method: ${methodName}!`)
  }

  return httpMethod
}
