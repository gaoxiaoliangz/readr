import errors from '../errors'
import i18n from '../utils/i18n'

/**
 * 权限等级排序
 * admin | user | visitor | none
 */

export function checkPermissionsOf(req: { user: { role: Roles } }, userRole: Roles) {
  switch (userRole) {
    case 'admin':
      if (req.user.role !== 'admin') {
        return new errors.NoPermissionError(i18n('errors.api.auth.needPermissionsOf', 'admin'))
      }
      break

    case 'user':
      if (req.user.role !== 'user' && req.user.role !== 'admin') {
        return new errors.NoPermissionError(i18n('errors.api.auth.loginRequired'))
      }
      break

    default:
      if (userRole !== 'visitor') {
        return new Error('Undefined role!')
      }
      break
  }
}

export default function requirePermissionsOf(userRole: Roles) {
  return (req: { user: { role: Roles } }, res, next) => {
    next(checkPermissionsOf(req, userRole))
  }
}
