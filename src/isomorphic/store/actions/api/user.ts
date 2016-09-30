import { Schemas } from '../../../schemas'

export const AUTH_REQUEST = 'data-fetching/auth/REQUEST'
export const AUTH_SUCCESS = 'data-fetching/auth/SUCCESS'
export const AUTH_FAILURE = 'data-fetching/auth/FAILURE'
export function userAuth(userSession?): Object {
  // 服务端渲染 session
  if (userSession) {
    return {
      SERVER_STORE: {
        body: {
          response: userSession,
          type: AUTH_SUCCESS
        }
      }
    }
  }

  return {
    CALL_API: {
      types: [AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE],
      endpoint: 'auth'
    }
  }
}

export function fetchProfile() {
  return {
    payload: 'profile',
    CALL_API: {
      types: ['PROFILE_REQUEST', 'PROFILE_SUCCESS', 'PROFILE_FAILURE'],
      endpoint: `user/profile`,
    }
  }
}

// export function fetchPublicProfile() {
//   return {
//     CALL_API: {
//       types: ['PROFILE_REQUEST', 'PROFILE_SUCCESS', 'PROFILE_FAILURE'],
//       endpoint: `user/profile`,
//       schema: Schemas.PROFILE
//     }
//   }
// }

// export function fetchShelf(userId) {
//   return {
//     userId,
//     CALL_API: {
//       types: ['SHELF_REQUEST', 'SHELF_SUCCESS', 'SHELF_FAILURE'],
//       endpoint: `users/${userId}/shelf`,
//       schema: Schemas.BOOK_ARRAY,
//     }
//   }
// }

export function fetchShelf() {
  return {
    payload: 'bookShelf',
    CALL_API: {
      types: ['SHELF_REQUEST', 'SHELF_SUCCESS', 'SHELF_FAILURE'],
      endpoint: `user/books/shelf`,
    }
  }
}

export function fetchProgress(bookId) {
  return {
    bookId,
    payload: 'progress',
    CALL_API: {
      types: ['PROGRESS_REQUEST', 'PROGRESS_SUCCESS', 'PROGRESS_FAILURE'],
      endpoint: `user/books/${bookId}/progress`,
      // schema: Schemas.BOOK_PROGRESS
    }
  }
}
