'use strict'
const Promise = require('bluebird')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const Model = require('../api-v2/model')
const _ = require('lodash')
const schemas = require('../api-v2/schemas')

const user = new Model(schemas.users)

const auth = {
  basic(req, res, next) {
    const login = req.body.login.toLowerCase()
    const password = req.body.password

    user.find({ $or: [{ slug: login, password }, { email: login, password }] }).listRaw().then(result => {
      if (result.length === 0) {
        res.send('用户名或密码错误！')
      } else {
        req.session.user = result[0]
        res.send('ok')
      }
    })
  },
  check(req, res) {
    if (req.session.user) {
      res.send(req.session.user)
    } else {
      res.send('No')
    }
  }
}

module.exports = auth
