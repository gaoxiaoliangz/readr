import api from '../api'
import { ROLES } from '../../isomorphic/constants'
import errors from '../errors'
import i18n from '../utils/i18n'
import { respondWithJson } from '../api/api-response'

/**
 * 权限等级排序
 * admin | user | visitor | none
 */

export default function requirePermissionsOf(userRole) {
  return (req, res, next) => {
    switch (userRole) {
      case ROLES.ADMIN:
        if (req.context.user.role === ROLES.ADMIN) {
          next()
          break
        }

        respondWithJson(Promise.reject(new errors.NoPermissionError(i18n('errors.api.auth.needPermissionsOf', 'admin'))))(req, res)
        break

      case ROLES.USER:
        if (req.context.user.role === ROLES.USER || req.context.user.role === ROLES.ADMIN) {
          next()
          break
        }

        respondWithJson(Promise.reject(new errors.NoPermissionError(i18n('errors.api.auth.loginRequired'))))(req, res)
        break

      default:
        if (userRole !== ROLES.VISITOR) {
          respondWithJson(Promise.reject(new Error('Undefined role!')))(req, res)
          break
        }
        next()
    }
  }
}
