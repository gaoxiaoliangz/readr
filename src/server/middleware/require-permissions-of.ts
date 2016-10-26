import { ROLES } from '../../isomorphic/constants'
import errors from '../errors'
import i18n from '../utils/i18n'

/**
 * 权限等级排序
 * admin | user | visitor | none
 */

export default function requirePermissionsOf(userRole: string) {
  return (req, res, next) => {
    switch (userRole) {
      case ROLES.ADMIN:
        if (req.context.user.role === ROLES.ADMIN) {
          next()
          break
        }

        next(new errors.NoPermissionError(i18n('errors.api.auth.needPermissionsOf', 'admin')))
        break

      case ROLES.USER:
        if (req.context.user.role === ROLES.USER || req.context.user.role === ROLES.ADMIN) {
          next()
          break
        }
        next(new errors.NoPermissionError(i18n('errors.api.auth.loginRequired')))
        break

      default:
        if (userRole !== ROLES.VISITOR) {
          next(new Error('Undefined role!'))
          break
        }
        next()
    }
  }
}
