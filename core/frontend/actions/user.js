import { promisedCallApi } from 'actions'

// TODO
export function fetchUserAuthInfo00() {
  return promisedCallApi({
    types: ['USER_AUTH_INFO_REQUEST', 'USER_AUTH_INFO_SUCCESS', 'USER_AUTH_INFO_FAILURE'],
    endpoint: 'auth'
  }, {})
}

export function fetchUserAuthInfo() {
  return {
    CALL_API: {
      types: ['USER_AUTH_INFO_REQUEST', 'USER_AUTH_INFO_SUCCESS', 'USER_AUTH_INFO_FAILURE'],
      endpoint: 'auth'
    }
  }
}
