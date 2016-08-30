import api from '../api'
import BasicApi from '../api/basic-api'

export type EndpointConfig = {
  url: string
  apiMethod: string
  parser: (req: any) => any
  httpMethod?: 'get' | 'post' | 'put' | 'delete'
  requiredRole?: string
}

const endpointConfig: EndpointConfig[] = [
  {
    url: '/authors',
    apiMethod: 'api.authors.list',
    parser: req => [req.body],
  },
  {
    url: '/authors/:id',
    apiMethod: 'api.authors.find',
    parser: req => [req.params.id],
  },
]

export default endpointConfig
