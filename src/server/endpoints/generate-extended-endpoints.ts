import _ from 'lodash'
import resolveApi from './resolve-api'

type Config = {
  // todo: wtf???
  // [key: string]: any
  api: any
  handler?: any
  parser: any
  url: any
  requiredRole?: any
}[]
export default function generateExtendedEndpoints(config: Config) {
  return _.map(config, endpoint => {
    const resolvedApi = resolveApi(endpoint.api)
    const httpMethod = resolvedApi.httpMethod
    const apiMethod: any = resolvedApi.apiMethod
    let handler = endpoint.handler

    if (endpoint.parser) {
      handler = req => apiMethod.apply(null, endpoint.parser(req))
    }

    return {
      url: endpoint.url,
      httpMethod,
      handler,
      requiredRole: endpoint.requiredRole
    }
  })
}
