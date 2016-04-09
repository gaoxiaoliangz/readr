var _ = require('lodash')
var Promise = require('bluebird')
var books = require('./books')
var users = require('./users')
var auth = require('./auth')

// 参考 ghost /server/api/index.js
var http = function http(apiMethod) {
  return function apiHandler(req, res, next) {
    // We define 2 properties for using as arguments in API calls:
    var object = req.body,
      options = _.extend({}, req.files, req.query, req.params, {
        context: {
          user: (req.user && req.user.id) ? req.user.id : null
        }
      })

    // If this is a GET, or a DELETE, req.body should be null, so we only have options (route and query params)
    // If this is a PUT, POST, or PATCH, req.body is an object
    if (_.isEmpty(object)) {
      object = options
      options = {}
    }

    // console.log("> api/index.js");
    // console.log(object);
    // console.log(options);

    apiMethod(object, options, req).then(function(result){
      if(result.data) {
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
