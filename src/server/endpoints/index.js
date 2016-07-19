const basicApi = require('../api/basic')
const generateBasicEndpoints = require('./generate-basic-endpoints')
const generateExtendedEndpoints = require('./generate-extended-endpoints')

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
  }
]

const basicEndpoints = generateBasicEndpoints(basicApi)
const extendedEndpoints = generateExtendedEndpoints(extendedEndpointsConfig)
const endpoints = basicEndpoints.concat(extendedEndpoints)

module.exports = endpoints
