import { Schemas } from '../schemas/index'

export function userAuth() {
  return {
    CALL_API: {
      types: ['USER_AUTH_REQUEST', 'USER_AUTH_SUCCESS', 'USER_AUTH_FAILURE'],
      endpoint: 'auth'
    }
  }
}

export function fetchProfile(id) {
  return {
    CALL_API: {
      types: ['PROFILE_REQUEST', 'PROFILE_SUCCESS', 'PROFILE_FAILURE'],
      endpoint: `users/${id}/profile`,
      schema: Schemas.PROFILE
    }
  }
}

export function fetchUserList() {
  return {
    CALL_API: {
      types: ['USER_LIST_REQUEST', 'USER_LIST_SUCCESS', 'USER_LIST_FAILURE'],
      endpoint: 'users',
      schema: Schemas.USER_ARRAY
    }
  }
}
