'use strict'

const _ = require('lodash')
const Promise = require('bluebird')
const books = require('./books')
const collections = require('./collections')
const authors = require('./authors')
const tags = require('./tags')
const users = require('./users')
const auth = require('./auth')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const runtimeOptions = require('../utils/runtime-options')

// referenced ghost /server/api/index.js
const http = function http(apiMethod) {
  return function apiHandler(req, res, next) {
    // We define 2 properties for using as arguments in API calls:
    var object = req.body
    var options = _.extend({}, req.files, req.query, req.params)

    // context is back into old position
    options.context = {
      user: req.user?req.user:null
    }

    // If this is a GET, or a DELETE, req.body should be null, so we only have options (route and query params)
    // If this is a PUT, POST, or PATCH, req.body is an object
    if (_.isEmpty(object)) {
      object = options
      options = {}
    }

    // still a simple one
    apiMethod(object, options).then((result) => {
      // handle req stuff
      if(result.hook) {
        if(result.hook.action === 'auth') {
          req.session.user = result.hook.data
        }

        delete result.hook
      }

      if(req.method === 'POST') {
        res.status(201).send(result)
      }else{
        res.status(200).send(result)
      }
    }, error => {
      let statusCode = error.statusCode || 500
      
      if(statusCode >= 500) {
        console.log(error.stack) 
      }

      if (Error.prototype.isPrototypeOf(error)) {
        error = {
          message: error.message || i18n('errors.general.unknownErrorOccurred'),
          errorType: error.name
        }
      }

      delete error.statusCode
      delete error.name
      
      if(runtimeOptions.env === 'production') {
        delete error.stack
      }

      res.status(statusCode).send(error)
    })
  }
}

module.exports = {
  http: http,
  books: books,
  tags: tags,
  collections: collections,
  authors: authors,
  users: users,
  auth: auth
}
