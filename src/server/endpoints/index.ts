import basicApi from '../api/basic'
import generateBasicEndpoints from './generate-basic-endpoints'
import generateExtendedEndpoints from './generate-extended-endpoints'
import api from '../api'
import roles from '../models/roles'

const extendedEndpointsConfig = [
  {
    url: '/users',
    api: 'users.add',
    parser: request => [request.body]
  },
  {
    url: '/books',
    api: 'books.add',
    parser: request => [request.body]
  },

  /**
   * user
   */

  // profile
  {
    url: '/user/profile',
    api: 'user.profile.find',
    requiredRole: roles.user,
    parser: request => [request.context.user.id]
  },

  // reading progress
  {
    url: '/user/books/:book/progress',
    api: 'user.readingProgress.find',
    requiredRole: roles.user,
    handler: req => {
      return api.user.readingProgress.find(req.context.user.id, req.params.book)
    }
  },
  {
    url: '/user/books/:book/progress',
    api: 'user.readingProgress.update',
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
    api: 'user.shelf.list',
    requiredRole: roles.user,
    parser: request => [request.context.user.id]
  }
]

const basicEndpoints = generateBasicEndpoints(basicApi)
const extendedEndpoints = generateExtendedEndpoints(extendedEndpointsConfig as any)
const endpoints = basicEndpoints.concat(extendedEndpoints)

export default endpoints
