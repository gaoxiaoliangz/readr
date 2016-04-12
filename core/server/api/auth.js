'use strict'
var models = require('../models')
var Promise = require('bluebird')

// todo: make it global
function validataAuthInfo(object) {
  var isValid = false
  console.log(object);
  if(object.login && object.password) {
    if(typeof object.login ==='string' && typeof object.password === 'string') {
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
            user: options.context.user
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

  basic: function(object, options){
    // add validation
    let match = {
      login: object.login,
      password: object.password
    }

    return new Promise(function(resolve){
      if(validataAuthInfo(object)) {
        models.getData('users', {$or: [{username: match.login}, {email: match.login}]}).then(function(result){
          if(result.data) {
            let user = result.data[0]

            if(user.password === match.password) {
              let userSession = {
                username: user.username,
                role: user.role,
                id: user.id
              }

              resolve({
                data: {
                  authed: true,
                  username: user.username,
                  role: user.role
                },
                auth: {
                  user: userSession,
                  isAuthed: true
                }
              })
            } else {
              resolve({
                error: {
                  message: 'Wrong password!'
                },
                statusCode: 400
              })
            }
          }else{
            resolve({
              error: {
                message: 'No such user!'
              },
              statusCode: 404
            })
          }
        })
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
