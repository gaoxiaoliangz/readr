'use strict';

var Promise = require('bluebird'),
    _ = require('lodash'),
    _exports = module.exports,
    models;

models = ['query'];

(function init() {
    models.forEach(function (name) {
        _.extend(_exports, require('./' + name));
    });

    return Promise.resolve();
})();
