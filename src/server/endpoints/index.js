const basicApi = require('../api/basic')
const generateBasicEndpoints = require('./generate-basic-endpoints')
const generateExtendedEndpoints = require('./generate-extended-endpoints')
const api = require('../api')
const roles = require('../models/roles')

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

  // shelf
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
const extendedEndpoints = generateExtendedEndpoints(extendedEndpointsConfig)
const endpoints = basicEndpoints.concat(extendedEndpoints)

module.exports = endpoints
