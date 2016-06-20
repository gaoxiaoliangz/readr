'use strict'
var express = require('express')
var router = express.Router()
var models = require('./models')
var Promise = require('bluebird')
var session = require('express-session')

const utils = require('./utils')
const _ = require('lodash')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const pipeline = require('../utils/pipeline')


var users = {
  add: function(object, options){
    const requiredOptions = ['username', 'password', 'email']

    function doQuery(options) {
      return models.create('users', {$or: [{email: options.data.email}, {username: options.data.username}]}).then(result => {
        if(result.length === 0) {
          // TODO
          // camel to snake
          let user = {
            username: options.data.username,
            email: options.data.email.toLowerCase(),
            password: options.data.password,
            role: 'user',
            slug: options.data.username.toLowerCase()
          }

          return models.putData('users', user).then(result => {
            user.id = result.id

            delete user.password
            delete user._id
            delete user.date_created

            result.hook = {
              action: 'auth',
              data: user
            }

            return Promise.resolve(result)
          }, error => {
            return Promise.reject(error)
          })
        } else {
          return Promise.reject(new errors.ValidationError(i18n('errors.api.users.usernameOrEmailUnavailable')))
        }
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions),
      doQuery
    ]

    return pipeline(tasks, object, options)
  },

  browse(options) {
    const requiredOptions = []

    function doQuery(options) {
      return models.read('users', null).then(result => {
        return Promise.resolve(result)
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions),
      utils.requireAdminPermissions,
      doQuery
    ]

    return pipeline(tasks, options)
  },

  setRole(object, options) {
    const requiredOptions = ['id', 'role']

    function doQuery(options) {
      const data = {
        role: options.data.role
      }

      return models.update('users', {id: options.id}, data).then(result => {
        return Promise.resolve(result)
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions),
      utils.requireAdminPermissions,
      doQuery
    ]

    return pipeline(tasks, object, options)
  }
}

module.exports = users
