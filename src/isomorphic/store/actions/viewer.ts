import * as selectors from '../../store/selectors'

const createActionType = (name, operation) => `/components/${name}/${operation}`

// viewer
export const VIEWER_INITIALIZE_BEGIN = createActionType('viewer', 'INITIALIZE_BEGIN')
export const initializeViewer = (bookId: string, config = {}) => {
  return {
    bookId,
    config,
    type: VIEWER_INITIALIZE_BEGIN,
  }
}

// TODO: 改名为 config
export const VIEWER_INITIALIZE_SUCCESS = createActionType('viewer', 'INITIALIZE_SUCCESS')
export const initializeViewerSuccess = (bookId: string, payload) => {
  return {
    bookId,
    payload,
    type: VIEWER_INITIALIZE_SUCCESS,
  }
}

export const VIEWER_CALC_BEGIN = createActionType('viewer', 'CALC_BEGIN')
export const calcBook = (bookId: string, wrap: HTMLElement) => {
  return {
    bookId,
    wrap,
    type: VIEWER_CALC_BEGIN,
  }
}

export const VIEWER_CALC_SUCCESS = createActionType('viewer', 'CALC_SUCCESS')
export const calcBookSuccess = (bookId: string, computed) => {
  return {
    bookId,
    computed,
    type: VIEWER_CALC_SUCCESS,
  }
}

export const VIEWER_CALC_FAILURE = createActionType('viewer', 'CALC_FAILURE')
export const calcBookFailure = (bookId: string, error: Error) => {
  return {
    bookId,
    error,
    type: VIEWER_CALC_FAILURE,
  }
}

export const BOOK_PROGRESS_INITIALIZE = createActionType('viewer/progress', 'INITIALIZE')
export const initializeBookProgress = () => {
  return {
    type: BOOK_PROGRESS_INITIALIZE,
  }
}

export const BOOK_PROGRESS_UPDATE = createActionType('viewer/progress', 'UPDATE')
export const updateBookProgress = (percentage: number) => (dispatch, getState) => {
  const state = getState()
  const { bookId } = selectors.viewer.basicInfo(state)
  const computed = selectors.viewer.computed(bookId)(state)
  const pageNo = Math.floor(computed.length * percentage) + 1

  return dispatch({
    id: bookId,
    percentage,
    pageNo,
    type: BOOK_PROGRESS_UPDATE,
  })
}

// TODO: 无需 destroy
export const BOOK_PROGRESS_DESTROY = createActionType('viewer/progress', 'DESTROY')
export const destroyBookProgress = () => {
  return {
    type: BOOK_PROGRESS_DESTROY,
  }
}
