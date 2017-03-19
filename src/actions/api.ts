import _ from 'lodash'
import schemas from '../schemas'
import { DOUBAN_API_ROOT } from '../constants'
import { createTriggerAction } from './utils'
import * as ActionTypes from '../constants/actionTypes'
import * as selectors from '../selectors'

export const removeEntity = (name: string, id: string) =>
  ({ type: ActionTypes.REMOVE_ENTITY, name, id })

// load actions
// books
export const loadBooks = (page = 1, q?) => {
  return createTriggerAction(ActionTypes.BOOKS, {
    request: {
      url: 'books',
      query: {
        page, q
      }
    },
    schema: schemas.BOOK_ARRAY
  })
}

export const loadBookInfo = (id) => {
  return createTriggerAction(ActionTypes.BOOK_INFO, {
    request: {
      url: `books/${id}`
    },
    targetId: id,
    schema: schemas.BOOK
  })
}

export const loadBookContent = (id) => {
  return createTriggerAction(ActionTypes.BOOK_CONTENT, {
    request: {
      url: `books/${id}/content`
    },
    targetId: id,
    schema: schemas.BOOK_CONTENT
  })
}

// user
export const loadProfile = () => {
  return createTriggerAction(ActionTypes.PROFILE, {
    request: {
      url: `user/profile`
    }
  })
}

export const loadShelf = () => {
  return createTriggerAction(ActionTypes.SHELF, {
    request: {
      url: `user/books/shelf`
    },
    schema: schemas.SHELF_BOOK_ARRAY
  })
}

export const loadUsers = (page = 1) => createTriggerAction(ActionTypes.USERS, {
  request: {
    url: `users`,
    query: {
      page
    }
  },
  schema: schemas.USER_ARRAY
})

export const updateBookProgress = (bookId, percentage) => (dispatch, getState) => {
  const session = selectors.session(getState())
  if (session.role !== 'visitor') {
    return dispatch(createTriggerAction(ActionTypes.BOOK_PROGRESS_UPDATE, {
      request: {
        url: `user/books/${bookId}/progress`,
        method: 'PUT',
        data: {
          percentage
        }
      }
    }))
  }
}

// app
export const loadSession = () => createTriggerAction(ActionTypes.SESSION, {
  request: {
    url: 'auth'
  }
})

// other untested
export const loadAuthors = (page = 1, q?) => createTriggerAction(ActionTypes.AUTHORS, {
  request: {
    url: `authors`,
    query: {
      page,
      q
    }
  },
  schema: schemas.AUTHOR_ARRAY
})

export const loadCollections = () => createTriggerAction(ActionTypes.COLLECTIONS, {
  request: {
    url: `collections`
  },
  schema: schemas.COLLECTION_ARRAY
})

export const loadCollection = (id) => createTriggerAction(ActionTypes.COLLECTION, {
  request: {
    url: `collections/${id}`
  },
  targetId: id,
  schema: schemas.COLLECTION
})

export const loadBookProgress = (id) => createTriggerAction(ActionTypes.BOOK_PROGRESS, {
  request: {
    url: `user/books/${id}/progress`,
  },
  targetId: id,
  schema: schemas.BOOK_PROGRESS
})

export const logout = () => createTriggerAction(ActionTypes.USER_LOGOUT, {
  request: {
    url: `auth/revoke`,
    method: 'PUT'
  }
})

// 3rd party
export const searchDoubanBooks = (keyword) => createTriggerAction(ActionTypes.DOUBAN_BOOKS, {
  request: {
    url: `${DOUBAN_API_ROOT}/book/search?count=10&q=${keyword}`,
    useJsonp: true
  },
  schema: schemas.DOUBAN_BOOK_SEARCH_RESULTS
})
