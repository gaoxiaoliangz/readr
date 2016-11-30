import * as selectors from '../../selectors'
import * as ActionTypes from '../actionTypes'

// viewer
export const initializeViewer = (bookId: string, config: ViewerConfig = {}) =>
  ({ bookId, config, type: ActionTypes.VIEWER_INITIALIZE })

export const configViewer = (bookId: string, payload) => ({
  bookId,
  payload,
  type: ActionTypes.VIEWER_CONFIG,
})

// book
export const calcBook = (bookId: string, wrap: HTMLElement) => ({
  bookId,
  wrap,
  type: ActionTypes.VIEWER_CALC_START,
})

export const calcBookSuccess = (bookId: string, computed) => {
  return {
    bookId,
    computed,
    type: ActionTypes.VIEWER_CALC_SUCCESS,
  }
}

export const calcBookFailure = (bookId: string, error: Error) => {
  return {
    bookId,
    error,
    type: ActionTypes.VIEWER_CALC_FAILURE,
  }
}

export const initializeBookProgress = () => {
  return {
    type: ActionTypes.BOOK_PROGRESS_INITIALIZE,
  }
}

// progress
export const updateBookProgress = (percentage: number) => (dispatch, getState) => {
  const state = getState()
  const { bookId } = selectors.viewer.config(state)
  const computed = selectors.viewer.computed(bookId)(state)
  const pageNo = Math.floor(computed.length * percentage) + 1

  return dispatch({
    id: bookId,
    percentage,
    pageNo,
    type: ActionTypes.BOOK_PROGRESS_UPDATE,
  })
}

export const destroyBookProgress = () => {
  return {
    type: ActionTypes.BOOK_PROGRESS_DESTROY,
  }
}
