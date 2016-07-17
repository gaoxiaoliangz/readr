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

export function fetchShelf(userId) {
  return {
    userId,
    CALL_API: {
      types: ['SHELF_REQUEST', 'SHELF_SUCCESS', 'SHELF_FAILURE'],
      endpoint: `users/${userId}/shelf`,
      schema: Schemas.BOOK_ARRAY,
    }
  }
}