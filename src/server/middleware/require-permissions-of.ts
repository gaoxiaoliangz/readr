/**
 * 权限等级排序
 * admin | user | visitor | none
 */

import api from '../api'
import roles from '../models/roles'
import errors from '../errors'
import i18n from '../utils/i18n'

export default function requirePermissionsOf(userRole) {
  return (req, res, next) => {
    switch (userRole) {
      case roles.admin:
        if (req.context.user.role === roles.admin) {
          next()
          break
        }

        api.http(() => {
          return Promise.reject(new errors.NoPermissionError(i18n('errors.api.auth.needPermissionsOf', 'admin')))
        })(req, res)
        break

      case roles.user:
        if (req.context.user.role === roles.user || req.context.user.role === roles.admin) {
          next()
          break
        }

        api.http(() => {
          return Promise.reject(new errors.NoPermissionError(i18n('errors.api.auth.loginRequired')))
        })(req, res)
        break

      default:
        if (userRole !== roles.visitor) {
          api.http(() => {
            return Promise.reject(new Error('Undefined role!'))
          })(req, res)
          break
        }
        next()
    }
  }
}
