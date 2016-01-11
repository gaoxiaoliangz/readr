var _ = require('lodash');
var Promise = require('bluebird');
var books = require('./books');
var users = require('./users');
var auth = require('./auth');

// 参考 ghost /server/api/index.js
http = function http(apiMethod) {
  return function apiHandler(req, res, next) {
    // We define 2 properties for using as arguments in API calls:
    var object = req.body,
      options = _.extend({}, req.files, req.query, req.params, {
        context: {
          user: (req.user && req.user.id) ? req.user.id : null
        }
      });

    // If this is a GET, or a DELETE, req.body should be null, so we only have options (route and query params)
    // If this is a PUT, POST, or PATCH, req.body is an object
    if (_.isEmpty(object)) {
      object = options;
      options = {};
    }

    apiMethod(object, options).then(function(result){
      res.send(result);
    });
  };
};

module.exports = {
  http: http,
  books: books,
  users: users,
  auth: auth
};
