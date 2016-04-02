var models = require('../models');
var Promise = require('bluebird');

function validataAuthInfo(object) {
  var isValid = false
  if(object.username && object.password) {
    if(typeof object.username ==='string' && typeof object.password === 'string') {
      isValid = true
    }
  }
  return isValid
}

var auth = {
  checkStatus: function(object) {
    return new Promise(resolve => {
      if(object.context.user) {
        resolve({
          authed: true,
          user: object.context.user
        })
      }else{
        resolve({
          authed: false
        })
      }
    })
  },

  basic: function(object, options, req){
    var match = {
      username: object.username,
      password: object.password
    };

    console.log("> api/auth.js");
    console.log(match);

    return new Promise(function(resolve){
      if(validataAuthInfo(object)) {
        models.getData('users', {username: match.username}).then(function(result){
          if(result.data) {
            models.getData('users', match).then(function(result){
              if(result.data) {

                var userinfo = {
                  username: match.username
                }
                req.session.userinfo = userinfo

                resolve({
                  authed: true
                })
              }else{
                resolve({
                  error: {
                    code: 405,
                    msg: 'Wrong password!'
                  }
                })
              }
            });
          }else{
            resolve({
              error: {
                code: 404,
                msg: 'No such user!'
              }
            })
          }
        });
      }else{
        resolve({
          error: {
            code: 406,
            msg: 'Wrong auth info format!'
          }
        })
      }
    });
  }
}

module.exports = auth;
