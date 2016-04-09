var express = require('express');
var router = express.Router();
var models = require('../models');
var Promise = require('bluebird');
var session = require('express-session');


var users = {
  addUser: function(object, options, req){
    // todo: add validation
    var match = {
      username: object.username
    }

    return new Promise(function(resolve){
      models.getData('users', match).then(function(result){
        if(result.error){
          // 如果用户不存在，则可以创建
          if(result.statusCode == "404") {
            models.putData('users', object).then(function(data){

              var userinfo = {
                username: match.username
              }
              req.session.userinfo = userinfo

              resolve(data)
            })
          }else{
            resolve(result)
          }
        }else{
          resolve({
            error: {
              message: "User exsits!"
            },
            statusCode: 400,
          })
        }
      })
    })
  }
}

module.exports = users
