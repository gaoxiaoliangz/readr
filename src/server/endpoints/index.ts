import basicApi from '../api/basic'
import Endpoint from './endpoint'
import _ from 'lodash'
import extendedEndpointConfig from './endpoint-config'

let allEndpointConfig = []
let basicEndpointConfig = []

_.keys(basicApi).forEach(key => {
  const groupEndpoints = ['find', 'list', 'add', 'update', 'remove'].map(methodKey => {
    let url = `/${key}`
    const idMatch = req => ({ _id: req.params.id })

    if (['find', 'update', 'remove'].indexOf(methodKey) !== -1) {
      url = `/${key}/:id`
    }

    return {
      url,
      apiMethod: `api.basic.${key}.${methodKey}`,
      parser: req => {
        switch (methodKey) {
          case 'find':
            return [idMatch(req)]

          case 'list':
            return [{}, req.query]

          case 'add':
            return [req.body]

          case 'update':
            return [idMatch(req), req.body]

          case 'remove':
            return [idMatch(req)]

          default:
            throw new Error('不支持的 APi 方法！')
        }
      }
    }
  })

  basicEndpointConfig = basicEndpointConfig.concat(groupEndpoints)
})

// basicEndpointConfig 应该被 extendedEndpointConfig 里面的相同路径相同方法的 route 覆盖
allEndpointConfig = allEndpointConfig.concat(extendedEndpointConfig, basicEndpointConfig)

const endpoints = allEndpointConfig.map(config => {
  return new Endpoint(config)
})

export default endpoints
