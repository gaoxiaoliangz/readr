var models = require('../models')
var Promise = require('bluebird')

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
  checkStatus: function(object, options) {
    return new Promise(resolve => {
      if(options.context.user) {
        resolve({
          data: {
            authed: true,
            username: options.context.user
          }
        })
      }else{
        resolve({
          data: {
            authed: false
          }
        })
      }
    })
  },

  // unauth: function(object, options, req) {
  //   return new Promise(resolve => {
  //
  //   })
  // },

  basic: function(object, options, req){
    var match = {
      username: object.username,
      password: object.password
    }

    console.log("> api/auth.js")
    console.log(match)

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
                  data: {
                    authed: true,
                    username: object.username
                  }
                })
              }else{
                resolve({
                  error: {
                    message: 'Wrong password!'
                  },
                  statusCode: 400
                })
              }
            });
          }else{
            resolve({
              error: {
                message: 'No such user!'
              },
              statusCode: 404
            })
          }
        });
      }else{
        resolve({
          error: {
            message: 'Wrong login credential format provided!'
          },
          statusCode: 400
        })
      }
    })
  }
}

module.exports = auth
