import _ from 'lodash'
import errors from '../errors'
import i18n from '../utils/i18n'
import humps from 'humps'
import dataProvider from '../models/dataProvider'

export function basicAuth(req, res, next) {
  const login = req.body.login ? req.body.login.toLowerCase() : undefined
  const password = req.body.password

  if (typeof login === 'undefined') {
    next(new errors.ValidationError(i18n('errors.validation.preCheck.missRequiredFields', 'login')))
  }

  if (typeof password === 'undefined') {
    next(new errors.ValidationError(i18n('errors.validation.preCheck.missRequiredFields', 'password')))
  }

  const query = { $or: [{ username: login, password }, { email: login, password }] }

  dataProvider.User.findOne(query).exec().then(doc => {
    const result = doc
    
    if (_.isEmpty(result)) {
      next(new errors.UnauthorizedError(i18n('errors.middleware.auth.wrongCombination')))
    } else {
      // will cause problems
      // req.session.user = humps.camelizeKeys(result)
      req.session.user = result
      res.json(result)
    }
  })
}

export function check(req, res) {
  res.json(humps.decamelizeKeys(req.user))
}

export function revoke(req, res) {
  req.session.destroy()
  res.status(204).send(null)
}

export default { basicAuth, check, revoke }
