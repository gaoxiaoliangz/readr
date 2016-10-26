import _ from 'lodash'
import errors from '../errors'
import i18n from '../utils/i18n'
import Model from '../models/model'
import humps from 'humps'
import * as schemas from '../api/schemas'

export function basicAuth(req, res, next) {
  const user = new Model(schemas.user)

  const login = req.body.login ? req.body.login.toLowerCase() : undefined
  const password = req.body.password

  if (typeof login === 'undefined') {
    next(new errors.ValidationError(i18n('errors.validation.preCheck.missRequiredFields', 'login')))
  }

  if (typeof password === 'undefined') {
    next(new errors.ValidationError(i18n('errors.validation.preCheck.missRequiredFields', 'password')))
  }

  const query = { $or: [{ username: login, password }, { email: login, password }] }

  user.findOne(query).then(result => {
    req.session.user = humps.camelizeKeys(result)
    req.apiResults = Promise.resolve({ ok: 1 })
    next()
  }, error => {
    next(new errors.UnauthorizedError(i18n('errors.middleware.auth.wrongCombination')))
  })
}

export function check(req, res) {
  res.send(humps.decamelizeKeys(req.context.user))
}

export function revoke(req, res) {
  req.session.destroy()
  res.status(204).send(null)
}

export default { basicAuth, check, revoke }
