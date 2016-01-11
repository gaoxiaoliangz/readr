var models = require('../models');
var Promise = require('bluebird');

var auth = {
  signin: function(object){
    var match = {
      username: object.username,
      password: object.password
    };

    return new Promise(function(resolve){
      models.getData('users', match).then(function(result){
        resolve(result);
      });
    });
  }
}

module.exports = auth;
