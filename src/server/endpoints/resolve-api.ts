import _ from 'lodash'
import api from '../api'
import mapHttpMethod from './map-http-method'

function resolveApi(apiPath: string) {
  const apiCollection: any = _.get(api, apiPath.split('.').slice(1, -1).join('.'))
  // const httpMethod = mapHttpMethod(_.last(apiPath.split('.')))

  if (!apiCollection) {
    throw new Error(`Api path (${apiPath}) cannot be resolved!`)
  }
  const method = _.last(apiPath.split('.'))
  // return { apiMethod, httpMethod }
  return apiCollection[method].bind(apiCollection)
}

export default resolveApi
