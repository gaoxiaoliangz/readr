'use strict'
const errors = require('../errors')
const i18n = require('../utils/i18n')
const Model = require('../api-v2/model')
const _ = require('lodash')
const schemas = require('../api-v2/config/schemas')

const userModel = new Model(schemas.user)

// todo
const auth = {
  basic(req, res, next) {
    const login = req.body.login.toLowerCase()
    const password = req.body.password

    userModel.find({ $or: [{ slug: login, password }, { email: login, password }] }).listRaw().then(result => {
      if (result.length === 0) {
        res.status(400).send({
          // todo
          message: '用户名或密码错误！'
        })
      } else {
        req.session.user = result[0]
        res.send({ ok: 1 })
      }
    })
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
