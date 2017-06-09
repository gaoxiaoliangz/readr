// import { ROLES } from '../../constants'
import errors from '../errors'
import i18n from '../utils/i18n'

/**
 * 权限等级排序
 * admin | user | visitor | none
 */

export default function requirePermissionsOf(userRole: Roles) {
  return (req: { user: { role: Roles } }, res, next) => {
    switch (userRole) {
      case 'admin':
        if (req.user.role === 'admin') {
          next()
          break
        }

        next(new errors.NoPermissionError(i18n('errors.api.auth.needPermissionsOf', 'admin')))
        break

      case 'user':
        if (req.user.role === 'user' || req.user.role === 'admin') {
          next()
          break
        }
        next(new errors.NoPermissionError(i18n('errors.api.auth.loginRequired')))
        break

      default:
        if (userRole !== 'visitor') {
          next(new Error('Undefined role!'))
          break
        }
        next()
    }
  }
}
