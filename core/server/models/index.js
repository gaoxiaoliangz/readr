var Promise = require('bluebird'),
    _ = require('lodash'),

    exports = module.exports,
    models;


models = [
  'query'
];

(function init() {
  models.forEach(function (name) {
    _.extend(exports, require('./' + name))
  })

  return Promise.resolve()
}())
