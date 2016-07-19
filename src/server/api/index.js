const basicApi = require('./basic')
const _ = require('lodash')
const books = require('./books')
const user = require('./user')
const users = require('./users')
const http = require('./http')

const api = _.assign({}, basicApi, {
  books,
  user,
  users,
  http,
})

module.exports = api
