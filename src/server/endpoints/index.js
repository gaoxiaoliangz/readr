const basicApi = require('../api/basic')
const generateBasicEndpoints = require('./generate-basic-endpoints')
const generateExtendedEndpoints = require('./generate-extended-endpoints')
const api = require('../api')
const roles = require('../models/roles')

const extendedEndpointsConfig = [
  {
    url: '/users',
    api: 'users.add',
    parser: data => {
      return data
    }
  },
  {
    url: '/books',
    api: 'books.add',
    parser: data => {
      return data
    }
  },

  /**
   * user
   */

  // reading progress
  {
    url: '/user/books/:book_id/progress',
    api: 'user.readingProgress.find',
    requiredRole: roles.user,
    handler: req => {
      return api.user.readingProgress.find(req.context.userId, req.params.book_id)
    }
  },
  {
    url: '/user/books/:book/progress',
    api: 'user.readingProgress.update',
    requiredRole: roles.user,
    parser: request => {
      return [
        request.context.userId,
        request.params.book,
        request.body
      ]
    }
  }
]

const basicEndpoints = generateBasicEndpoints(basicApi)
const extendedEndpoints = generateExtendedEndpoints(extendedEndpointsConfig)
const endpoints = basicEndpoints.concat(extendedEndpoints)

module.exports = endpoints
