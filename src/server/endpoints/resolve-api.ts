import _ from 'lodash'
import api from '../api'

function resolveApi(apiPath: string) {
  const apiCollection: any = _.get(api, apiPath.split('.').slice(1, -1).join('.'))

  if (!apiCollection) {
    throw new Error(`Api path (${apiPath}) cannot be resolved!`)
  }
  const method = _.last(apiPath.split('.'))
  return apiCollection[method].bind(apiCollection)
}

export default resolveApi
