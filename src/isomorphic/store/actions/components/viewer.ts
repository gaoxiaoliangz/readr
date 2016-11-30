import * as selectors from '../../selectors'
import * as ActionTypes from '../actionTypes'

// viewer
export const initializeViewer = (bookId: string, config = {}) => {
  return {
    bookId,
    config,
    type: ActionTypes.VIEWER_INITIALIZE_BEGIN,
  }
}

// TODO: 改名为 config
export const initializeViewerSuccess = (bookId: string, payload) => {
  return {
    bookId,
    payload,
    type: ActionTypes.VIEWER_INITIALIZE_SUCCESS,
  }
}

export const calcBook = (bookId: string, wrap: HTMLElement) => {
  return {
    bookId,
    wrap,
    type: ActionTypes.VIEWER_CALC_BEGIN,
  }
}

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

export const updateBookProgress = (percentage: number) => (dispatch, getState) => {
  const state = getState()
  const { bookId } = selectors.viewer.basicInfo(state)
  const computed = selectors.viewer.computed(bookId)(state)
  const pageNo = Math.floor(computed.length * percentage) + 1

  return dispatch({
    id: bookId,
    percentage,
    pageNo,
    type: ActionTypes.BOOK_PROGRESS_UPDATE,
  })
}

// TODO: 无需 destroy
export const destroyBookProgress = () => {
  return {
    type: ActionTypes.BOOK_PROGRESS_DESTROY,
  }
}
