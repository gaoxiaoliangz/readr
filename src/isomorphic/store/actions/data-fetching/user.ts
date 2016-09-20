import { Schemas } from '../../../schemas'

export function userAuth(userSession?): Object {
  // 服务端渲染 session
  if (userSession) {
    return {
      SERVER_STORE: {
        body: {
          response: userSession,
          type: 'USER_AUTH_SUCCESS'
        }
      }
    }
  }

  return {
    CALL_API: {
      types: ['USER_AUTH_REQUEST', 'USER_AUTH_SUCCESS', 'USER_AUTH_FAILURE'],
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

export function fetchUserList() {
  return {
    CALL_API: {
      types: ['USER_LIST_REQUEST', 'USER_LIST_SUCCESS', 'USER_LIST_FAILURE'],
      endpoint: 'users',
      schema: Schemas.USER_ARRAY
    }
  }
}

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
