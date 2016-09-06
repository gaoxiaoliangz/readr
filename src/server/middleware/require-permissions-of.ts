/**
 * 权限等级排序
 * admin | user | visitor | none
 */

import api from '../api'
import roles from '../models/roles'

export default function requirePermissionsOf(userRole) {
  return (req, res, next) => {
    switch (userRole) {
      case roles.admin:
        if (req.context.user.role === roles.admin) {
          next()
          break
        }

        api.http(() => {
          // todo
          return Promise.reject(new Error('no admin permissio'))
        })(req, res)
        break

      case roles.user:
        if (req.context.user.role === roles.user || req.context.user.role === roles.admin) {
          next()
          break
        }

        api.http(() => {
          return Promise.reject(new Error('no user permission'))
        })(req, res)
        break

      default:
        if (userRole !== roles.visitor) {
          api.http(() => {
            return Promise.reject(new Error('undefined role!'))
          })(req, res)
          break
        }
        next()
    }
  }
}
