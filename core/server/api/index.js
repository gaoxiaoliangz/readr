var _ = require('lodash')
var Promise = require('bluebird')
var books = require('./books')
var users = require('./users')
var auth = require('./auth')

// 参考 ghost /server/api/index.js
var http = function http(apiMethod) {
  return function apiHandler(req, res, next) {
    // We define 2 properties for using as arguments in API calls:
    var object = req.body
    var options = _.extend({}, req.files, req.query, req.params)

    // If this is a GET, or a DELETE, req.body should be null, so we only have options (route and query params)
    // If this is a PUT, POST, or PATCH, req.body is an object
    if (_.isEmpty(object)) {
      object = options
      options = {}
    }

    // context is always in options
    options.context = {
      user: req.user?req.user:null
    }

    apiMethod(object, options, req).then(function(result){
      if(result.data) {

        // dont' know whether it's the right way to do this
        // but it works anyway
        // it has to be put before sending
        if(result.auth) {
          if(result.auth.isAuthed) {
            req.session.user = result.auth.user
          }
        }

        if(req.method === 'POST') {
          res.status(201).send(result.data)
        }else{
          res.status(200).send(result.data)
        }
      }else{
        if(result.error) {
          res.status(result.statusCode).send(result.error)
        }else{
          res.status(500).send(result)
        }
      }
    })
  }
}

module.exports = {
  http: http,
  books: books,
  users: users,
  auth: auth
}
