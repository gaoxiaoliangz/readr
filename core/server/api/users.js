'use strict'
var express = require('express')
var router = express.Router()
var models = require('../models')
var Promise = require('bluebird')
var session = require('express-session')


function validate(str, type) {
  var isValid = true
  var msg = ''

  while (true) {
    if(typeof str === 'undefined') {
      isValid = false
      msg = 'Input is not defined!'
      break
    }
    if(str === '') {
      isValid = false
      msg = 'Input cannot be empty!'
      break
    }
    if(typeof str !== 'string'){
      isValid = false
      msg = 'Input must be string!'
      break
    }
    if(typeof str.length > 20){
      isValid = false
      msg = 'Input is too long!'
      break
    }

    switch (type) {
      case 'email':
        if(str.length < 6) {
          msg = 'Wrong email format!'
          isValid = false
        }
        break
      case 'username':
        break
      case 'password':
        if(str.length < 6) {
          msg = 'Passwords must be at least 6 charactors long!'
          isValid = false
        }
        break
      default:
        return;
    }
    break
  }

  if(isValid) {
    return {
      isValid: isValid
    }
  } else {
    return {
      isValid: isValid,
      message: msg
    }
  }
}


var users = {
  listUsers: function(object, options) {
    return new Promise(function(resolve){
      let role = options.context.user?options.context.user.role:'visitor'

      if(role === 'admin') {
        let match = null

        models.getData('users', match).then(function(result){
          resolve(result)
        })
      }else{
        resolve({
          error: {
            message: 'Permission denied!'
          },
          statusCode: 403
        })
      }
    })
  },

  changeUserRole: function(object, options) {
    return new Promise(function(resolve){
      let userId = options.context.user?options.context.user.id:null
      if(userId) {
        let match = {
          id: userId
        }

        let data = {
          $set: {
            role: object.role
          }
        }

        models.updateData('users', match, data).then(result => {
          resolve(result)
        })
      }else{
        resolve({
          error: {
            message: 'Permission denied!'
          },
          statusCode: 403
        })
      }
    })
  },

  addUser: function(object, options){
    return new Promise(function(resolve){
      let user = {
        username: object.username,
        email: object.email,
        password: object.password,
        role: 'user'
      }

      var errorMsg = []
      var isValid = true

      for (var prop in user) {
        if(['username', 'emial', 'password'].indexOf(prop) !== -1) {
          var result = validate(user[prop], prop)

          if(!result.isValid) {
            isValid = false
            errorMsg.push(prop+': '+result.message)
          }
        }
      }

      if(isValid) {
        models.getData('users', {$or: [{email: object.email}, {username: object.username}]}).then(function(matchResult){
          if(matchResult.error){
            // 如果用户不存在，则可以创建
            if(matchResult.statusCode == "404") {
              models.putData('users', user).then(function(result){
                var userSession = {
                  username: user.username,
                  role: user.role,
                  id: result.data.id
                }

                result.auth ={
                  user: userSession,
                  isAuthed: true
                }

                resolve(result)
              })
            }else{
              resolve(matchResult)
            }
          }else{
            let message

            if(matchResult.data[0].username == user.username) {
              message = 'Username exsits!'
            }else if(matchResult.data[0].email == user.email){
              message = 'Email used!'
            }
            resolve({
              error: {
                message: message
              },
              statusCode: 400
            })
          }
        })
      }else{
        resolve({
          error: {
            message: errorMsg
          },
          statusCode: 400
        })
      }
    })
  }
}

module.exports = users
