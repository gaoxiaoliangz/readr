import roles from '../models/roles'

export type EndpointConfig = {
  url: string
  apiMethod: string
  parser: (req: any) => any
  httpMethod?: 'get' | 'post' | 'put' | 'delete'
  requiredRole?: string
}

const endpointConfig: EndpointConfig[] = [
  {
    url: '/users',
    apiMethod: 'api.users.add',
    parser: request => [request.body]
  },
  {
    url: '/books',
    apiMethod: 'api.books.add',
    parser: request => [request.body]
  },
  {
    url: '/books/:book',
    apiMethod: 'api.books.find',
    parser: request => [{_id: request.params.book }, request.query]
  },

  /**
   * user
   */

  // profile
  {
    url: '/user/profile',
    apiMethod: 'api.user.profile.find',
    requiredRole: roles.user,
    parser: request => [request.context.user.id]
  },

  // reading progress
  {
    url: '/user/books/:book/progress',
    apiMethod: 'api.user.readingProgress.find',
    requiredRole: roles.user,
    parser: req => [req.context.user.id, req.params.book]
  },
  {
    url: '/user/books/:book/progress',
    apiMethod: 'api.user.readingProgress.update',
    requiredRole: roles.user,
    parser: request => [
      request.context.user.id,
      request.params.book,
      request.body
    ]
  },

  // shelf
  {
    url: '/user/books/shelf',
    apiMethod: 'api.user.shelf.list',
    requiredRole: roles.user,
    parser: request => [request.context.user.id]
  }
]

export default endpointConfig
