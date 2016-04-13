import { promisedCallApi } from 'actions'

export function fetchUserAuthInfo() {
  return promisedCallApi({
    types: ['USER_AUTH_INFO_REQUEST', 'USER_AUTH_INFO_SUCCESS', 'USER_AUTH_INFO_FAILURE'],
    endpoint: 'auth'
  }, {})
}
