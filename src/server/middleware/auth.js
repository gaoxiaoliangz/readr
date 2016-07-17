'use strict'
const errors = require('../errors')
const i18n = require('../utils/i18n')
const models = require('../models')
const _ = require('lodash')
const API = require('../api')

// todo
const auth = {
  basic(req, res) {
    return API.http(data => {
      const login = data.object.login ? data.object.login.toLowerCase() : undefined
      const password = data.object.password
      
      if (typeof login === 'undefined') {
        return Promise.reject(new errors.ValidationError(i18n('errors.validation.preCheck.missRequiredFields', 'login')))
      }

      if (typeof password === 'undefined') {
        return Promise.reject(new errors.ValidationError(i18n('errors.validation.preCheck.missRequiredFields', 'password')))
      }

      return models.user.find({ $or: [{ slug: login, password }, { email: login, password }] }).listRaw().then(result => {
        if (result.length === 0) {
          return Promise.reject(new errors.UnauthorizedError(i18n('errors.middleware.auth.wrongCombination')))
        }

        req.session.user = result[0]
        return Promise.resolve({ ok: 1 })
      })
    })(req, res)
  },

  check(req, res) {
    if (req.session.user) {
      const user = _.omit(req.session.user, ['password', 'date_created'])
      res.send(user)
    } else {
      res.send({
        role: 'visitor'
      })
    }
  }
}

module.exports = auth
