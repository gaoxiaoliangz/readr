'use strict'
const errors = require('../errors')
const i18n = require('../utils/i18n')
const models = require('../models')
const _ = require('lodash')
const API = require('../api')
const humps = require('humps')

// todo
const auth = {
  basic(req, res) {
    return API.http(parsedReq => {
      const login = parsedReq.body.login ? parsedReq.body.login.toLowerCase() : undefined
      const password = parsedReq.body.password
      
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

        req.session.user = humps.camelizeKeys(result[0])
        return Promise.resolve({ ok: 1 })
      })
    })(req, res)
  },

  check(req, res) {
    res.send(humps.decamelizeKeys(req.context.user))
  },

  revoke(req, res) {
    req.session.destroy()
    res.status(204).send(null)
  },
}

module.exports = auth
