'use strict'

const models = require('../models')
const Promise = require('bluebird')
const pipeline = require('../utils/pipeline')
const _ = require('lodash')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const utils = require('../api/utils')


const auth = {
  basic(req, res, next){
    const permittedOptions = ['login', 'password']

    function doQuery(options) {
      return models.getData('users', {$or: [{username: options.login}, {email: options.login}]}).then(result => {
        if(result.length === 0) {
          return Promise.reject(new errors.NotFoundError(i18n('errors.api.auth.userDoesNotExist')))
        } else if (options.password === result[0].password){
          delete result[0].password
          return result[0]
        }
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(permittedOptions),
      doQuery
    ]

    // it's a patch
    let options = req.body
    options.context = null

    pipeline(tasks, options).then(result => {
      delete result._id
      delete result.date_created

      // TODO
      // write user to session, dont't know if it's the right way to do it
      // should I use token?
      req.session.user = result

      res.send(result)
    }, error => {
      let statusCode = error.statusCode

      delete error.name
      delete error.statusCode

      res.status(statusCode).send(error)
    })
  }
}

module.exports = auth
