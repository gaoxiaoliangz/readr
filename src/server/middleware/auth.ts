import _ from 'lodash'
import errors from '../errors'
import i18n from '../utils/i18n'
import models from '../models'
import api from '../api'
import humps from 'humps'

const auth = {
  basic(req, res) {
    return api.http(parsedReq => {
      const login = parsedReq.body.login ? parsedReq.body.login.toLowerCase() : undefined
      const password = parsedReq.body.password

      if (typeof login === 'undefined') {
        return Promise.reject(new errors.ValidationError(i18n('errors.validation.preCheck.missRequiredFields', 'login')))
      }

      if (typeof password === 'undefined') {
        return Promise.reject(new errors.ValidationError(i18n('errors.validation.preCheck.missRequiredFields', 'password')))
      }

      const match = { $or: [{ username: login, password }, { email: login, password }] }

      return models.user.find(match).listRaw().then(result => {
        if (result.length === 0) {
          return Promise.reject(new errors.UnauthorizedError(i18n('errors.middleware.auth.wrongCombination')))
        }

        req.session.user = humps.camelizeKeys(result[0])
        return Promise.resolve({ ok: 1 }) as any
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

export default auth
