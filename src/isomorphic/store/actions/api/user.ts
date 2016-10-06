export const AUTH_REQUEST = 'api/auth/REQUEST'
export const AUTH_SUCCESS = 'api/auth/SUCCESS'
export const AUTH_FAILURE = 'api/auth/FAILURE'
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
    }
  }
}
