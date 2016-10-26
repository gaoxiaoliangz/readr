import _ from 'lodash'
import { EndpointConfig } from './endpoint-config'
import api from '../api'
import resolveApi from './resolve-api'
import mapHttpMethod from './map-http-method'

class Endpoint {
  url: string
  handler: Function
  middlewares: Function[]
  requiredRole: string
  httpMethod: string

  constructor(config: EndpointConfig) {
    this.url = config.url
    this.handler = api.http(req => {
      const apiMethod = resolveApi(config.apiMethod)
      return apiMethod.apply(null, config.parser(req))
    })

    if (config.httpMethod) {
      this.httpMethod = config.httpMethod
    } else {
      const method = _.last(config.apiMethod.split('.'))
      this.httpMethod = mapHttpMethod(method)
    }

    if (config.requiredRole) {
      this.requiredRole = config.requiredRole
    }
  }
}

export default Endpoint
