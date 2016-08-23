import _ from 'lodash'
import api from '../api'
import mapHttpMethod from './map-http-method'

function resolveApi(apiPath) {
  const apiMethod = _.get(api, apiPath)
  const httpMethod = mapHttpMethod(_.last(apiPath.split('.')))

  if (!apiMethod) {
    throw new Error(`Api path (${apiPath}) cannot be resolved!`)
  }

  return { apiMethod, httpMethod }
}

export default resolveApi
