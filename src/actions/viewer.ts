import * as selectors from '../selectors'
import * as ACTION_TYPES from '../constants/actionTypes'
import helpers from '../helpers'

// viewer
export const initializeViewerConfig = (bookId: string, config: ViewerConfig = {}) =>
  ({ bookId, config, type: ACTION_TYPES.VIEWER.INITIALIZE_CONFIG })

export const initializeViewer = (bookId: string) =>
  ({ bookId, type: ACTION_TYPES.VIEWER.INITIALIZE })

export const configViewer = (bookId: string, payload) => ({
  bookId,
  payload,
  type: ACTION_TYPES.VIEWER.CONFIG,
})

// book
export const calcBook = (bookId: string, wrap: HTMLElement) => ({
  bookId,
  wrap,
  type: ACTION_TYPES.VIEWER.CALC_START,
})

export const calcBookSuccess = (bookId: string, computed) => {
  return {
    bookId,
    computed,
    type: ACTION_TYPES.VIEWER.CALC_SUCCESS,
  }
}

export const calcBookFailure = (bookId: string, error: Error) => {
  return {
    bookId,
    error,
    type: ACTION_TYPES.VIEWER.CALC_FAILURE,
  }
}

export const initializeBookProgress = () =>
  ({ type: ACTION_TYPES.VIEWER.BOOK_PROGRESS_INITIALIZE })

// progress
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
    type: ACTION_TYPES.VIEWER.BOOK_PROGRESS_UPDATE,
  })
}

export const destroyBookProgress = () => {
  return {
    type: ACTION_TYPES.VIEWER.BOOK_PROGRESS_DESTROY,
  }
}

export const viewerJumpTo = (percentage: number) =>
  ({ type: ACTION_TYPES.VIEWER.JUMP, percentage })

// sub components
export const toggleViewerPanel = (reset?: boolean) =>
  ({ type: ACTION_TYPES.VIEWER.PANEL_TOGGLE, reset })

export const toggleViewerPreference = (reset?: boolean) =>
  ({ type: ACTION_TYPES.VIEWER.PREFERENCE_TOGGLE, reset })

export const toggleViewerNavigation = (reset?: boolean) =>
  ({ type: ACTION_TYPES.VIEWER.NAVIGATION_TOGGLE, reset })

// config
export const changeViewerFontSize = (fontSizeInPixel: number) =>
  ({ type: ACTION_TYPES.VIEWER.FONT_CHANGE, fontSize: fontSizeInPixel })

export const changeViewerTheme = (themeName: string) =>
  ({ type: ACTION_TYPES.VIEWER.THEME_CHANGE, theme: themeName })

export const toggleViewerScrollMode = (reset?: boolean) =>
  ({ type: ACTION_TYPES.VIEWER.SCROLL_MODE_TOGGLE, reset })
