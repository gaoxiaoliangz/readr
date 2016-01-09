var Promise = require('bluebird'),
    _ = require('lodash'),

    exports,
    models;

exports = module.exports;

models = [
  'data',
  'query'
];

function init() {
    models.forEach(function (name) {
      _.extend(exports, require('./' + name));
    });

    return Promise.resolve();
}

exports.init = init;
