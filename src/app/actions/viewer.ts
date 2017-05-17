import * as ACTION_TYPES from './actionTypes'

// viewer
export const initializeViewer = (bookId: string, config: Viewer.Config = {}) => ({
  payload: { bookId, config },
  type: ACTION_TYPES.VIEWER.INITIALIZE
})

export const setViewerId = (bookId: string) => ({
  payload: bookId,
  type: ACTION_TYPES.VIEWER.SET_ID
})

export const configViewer = (config: Viewer.Config = {}, isInit: boolean = false) => ({
  payload: config,
  meta: { isInit },
  type: ACTION_TYPES.VIEWER.CONFIG,
})

export const setStatus = (status: Viewer.Status = {}) => ({
  payload: status,
  type: ACTION_TYPES.VIEWER.SET_STATUS,
})

export const viewerGoTo = (loc: number) =>
  ({ type: ACTION_TYPES.VIEWER.GO_TO, payload: loc })


// book
export const calcBook = (bookId: string, wrap: HTMLElement) => ({
  payload: { bookId, wrap },
  type: ACTION_TYPES.VIEWER.CALC_TRIGGER,
})

export const calcBookSuccess = (bookId: string, computed) => ({
  payload: { bookId, computed },
  type: ACTION_TYPES.VIEWER.CALC_SUCCESS,
})

export const calcBookFailure = (bookId: string, error: Error) => ({
  payload: error,
  meta: { bookId },
  error: true,
  type: ACTION_TYPES.VIEWER.CALC_FAILURE,
})

export const updateLocalProgress = (bookId, progress: Viewer.LocalProgress) => ({
  payload: { progress, bookId },
  type: ACTION_TYPES.VIEWER.UPDATE_LOCAL_PROGRESS,
})

// sub components
export const toggleViewerPanel = (reset?: boolean) =>
  ({ type: ACTION_TYPES.VIEWER.PANEL_TOGGLE, payload: reset })

export const toggleViewerPreference = (reset?: boolean) =>
  ({ type: ACTION_TYPES.VIEWER.PREFERENCE_TOGGLE, payload: reset })

export const toggleViewerNavigation = (reset?: boolean) =>
  ({ type: ACTION_TYPES.VIEWER.NAVIGATION_TOGGLE, payload: reset })

export const toggleViewerProgressInfo = (reset?: boolean) =>
  ({ type: ACTION_TYPES.VIEWER.PROGRESS_INFO_TOGGLE, payload: reset })

// master action of sub components
export const setComponents = (state: Viewer.Components) =>
  ({ type: ACTION_TYPES.VIEWER.SET_COMPONENT, payload: state })

export const destroy = (clearData: boolean = false) =>
  ({ type: ACTION_TYPES.VIEWER.DESTROY, payload: clearData })
