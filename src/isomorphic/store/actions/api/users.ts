import schemas from '../../../services/schemas'
import utils from '../../../utils'
import { CALL_API_OBJ } from '../../middleware/api'
import _ from 'lodash'

export const USERS_REQUEST = 'data-fetching/users/REQUEST'
export const USERS_SUCCESS = 'data-fetching/users/SUCCESS'
export const USERS_FAILURE = 'data-fetching/users/FAILURE'
export type fetchUsers = {
  api?: { q?: string, page?: number },
  merge?: boolean
}
export function fetchUsers(options: fetchUsers = {}) {
  const queryString = utils.parseUrlencoded(options.api)

  const CALL_API = {
    types: [USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE],
    endpoint: `users?${queryString}`,
    schema: schemas.USER_ARRAY,
    pagination: {
      name: 'users',
      merge: options.merge,
      q: _.get(options, 'api.q', '')
    }
  } as CALL_API_OBJ

  return { CALL_API }
}
