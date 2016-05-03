import { Schemas } from 'middleware/api'

export const USER_AUTH_INFO_REQUEST = 'USER_AUTH_INFO_REQUEST'
export const USER_AUTH_INFO_SUCCESS = 'USER_AUTH_INFO_SUCCESS'
export const USER_AUTH_INFO_FAILURE = 'USER_AUTH_INFO_FAILURE'
export function fetchUserAuthInfo() {
  return {
    CALL_API: {
      types: [USER_AUTH_INFO_REQUEST, USER_AUTH_INFO_SUCCESS, USER_AUTH_INFO_FAILURE],
      endpoint: 'auth',
      schema: Schemas.USER_AUTH_INFO
    }
  }
}

export function fetchUserList() {
  return {
    CALL_API: {
      types: ['USER_LIST_REQUEST', 'USER_LIST_SUCCESS', 'USER_LIST_FAILURE'],
      endpoint: 'users'
    }
  }
}
