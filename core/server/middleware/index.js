'use strict'

const auth = require('./auth')
const middleware = {
  auth: auth
}

module.exports = middleware
