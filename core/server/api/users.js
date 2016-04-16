'use strict'
var express = require('express')
var router = express.Router()
var models = require('../models')
var Promise = require('bluebird')
var session = require('express-session')

const utils = require('./utils')
const _ = require('lodash')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const pipeline = require('../utils/pipeline')


var users = {
  listUsers(options) {
    const permittedOptions = []

    function doQuery(options) {
      return models.getData('users', null).then(result => {
        return Promise.resolve(result)
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(permittedOptions),
      utils.checkAdminPermissions,
      doQuery
    ]

    return pipeline(tasks, options)
  },

  setUserRole(object, options) {
    const permittedOptions = ['id']

    function doQuery(options) {
      const data = {
        role: options.data.role
      }

      return models.updateData('users', {id: options.id}, data).then(result => {
        return Promise.resolve(result)
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(permittedOptions),
      utils.checkAdminPermissions,
      doQuery
    ]

    return pipeline(tasks, object, options)
  },

  addUser: function(object, options){
    const permittedOptions = []

    function doQuery(options) {
      const data = {
        role: options.data.role
      }

      return models.getData('users', {$or: [{email: options.data.email}, {username: options.data.username}]}).then(result => {
        if(result.length === 0) {
          let user = Object.assign({}, options.data, { role: 'user' })

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
      utils.validate(permittedOptions),
      doQuery
    ]

    return pipeline(tasks, object, options)
  }
}

module.exports = users
