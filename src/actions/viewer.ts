import * as selectors from '../selectors'
import * as ACTION_TYPES from '../constants/actionTypes'
import helpers from '../helpers'

// viewer
export const initializeViewer = (bookId: string) => ({
  payload: bookId,
  type: ACTION_TYPES.VIEWER.INITIALIZE
})

export const configViewer = (config: ViewerConfig = {}) => ({
  payload: config,
  type: ACTION_TYPES.VIEWER.CONFIG,
})

// book
export const calcBook = (bookId: string, wrap: HTMLElement) => ({
  payload: { bookId, wrap },
  type: ACTION_TYPES.VIEWER.CALC_START,
})

export const calcBookSuccess = (bookId: string, computed) => {
  return {
    payload: { bookId, computed },
    type: ACTION_TYPES.VIEWER.CALC_SUCCESS,
  }
}

export const calcBookFailure = (bookId: string, error: Error) => {
  return {
    payload: {
      ...error,
      ...{
        bookId
      }
    },
    error: true,
    type: ACTION_TYPES.VIEWER.CALC_FAILURE,
  }
}

// sub components
export const toggleViewerPanel = (reset?: boolean) =>
  ({ type: ACTION_TYPES.VIEWER.PANEL_TOGGLE, payload: reset })

export const toggleViewerPreference = (reset?: boolean) =>
  ({ type: ACTION_TYPES.VIEWER.PREFERENCE_TOGGLE, payload: reset })

export const toggleViewerNavigation = (reset?: boolean) =>
  ({ type: ACTION_TYPES.VIEWER.NAVIGATION_TOGGLE, payload: reset })

export const toggleViewerProgressInfo = (reset?: boolean) =>
  ({ type: ACTION_TYPES.VIEWER.PROGRESS_INFO_TOGGLE, payload: reset })











// progress
export const initializeBookProgress = () =>
  ({ type: ACTION_TYPES.VIEWER.PROGRESS_INITIALIZE })


export const updateBookProgress = (percentage: number) => (dispatch, getState) => {
  helpers.print('Action updateBookProgress')
  const state = getState()
  const { bookId } = selectors.viewer.config(state)
  const computed = selectors.viewer.computed(bookId)(state)
  const pageNo = Math.floor(computed.length * percentage) + 1

  return dispatch({
    id: bookId,
    percentage,
    pageNo,
    type: ACTION_TYPES.VIEWER.PROGRESS_UPDATE,
  })
}

export const destroyBookProgress = () => {
  return {
    type: ACTION_TYPES.VIEWER.PROGRESS_DESTROY,
  }
}

export const viewerJumpTo = (percentage: number) =>
  ({ type: ACTION_TYPES.VIEWER.JUMP, percentage })

