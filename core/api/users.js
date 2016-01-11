var express = require('express');
var router = express.Router();
var models = require('../models');
var Promise = require('bluebird');
var session = require('express-session');


var users = {
  addUser: function(object){
    var match = {
      username: object.username
    }

    return new Promise(function(resolve){
      models.getData('users', match).then(function(result){
        if(result.error){
          // 如果用户不存在，则可以创建
          if(result.error.code == "404") {
            models.putData('users', object).then(function(d){
              resolve(d);
            });
          }else{
            var data = {
              error: {
                code: 500,
                msg: "Database error"
              }
            }
            resolve(data);
          }
        }else{
          var data = {
            error: {
              code: 600,
              msg: "User exsits!"
            }
          }
          resolve(data);
        }
      });
    });
  }
};

module.exports = users;
