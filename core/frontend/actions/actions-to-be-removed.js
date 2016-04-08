// todo: to remove
export const SET_VIEW_SCREEN = 'SET_VIEW_SCREEN'
export function setViewScreen(screen) {
  let style

  if(screen == "HD") {
    style = styles.BOOK_HD_STYLE
  } else if (screen == "MOBILE") {
    style = styles.BOOK_MOBILE_STYLE
  }
  return {
    type: SET_VIEW_SCREEN,
    screen,
    style
  }
}

export const SET_VIEW_MODE = 'SET_VIEW_MODE'
export function setViewMode(mode) {
  return {
    type: SET_VIEW_MODE,
    mode
  }
}

export const CUSTOMIZE_VIEW = 'CUSTOMIZE_VIEW'
export function customizeView(customStyle) {
  return {
    type: CUSTOMIZE_VIEW,
    customStyle
  }
}

export const CACHE_VIEW = 'CACHE_VIEW'
export function cacheView(bookId, view) {
  localStorage.setItem(`book${bookId}_view`, JSON.stringify(view))
  return {
    type: CACHE_VIEW,
    bookId
  }
}

export const LOAD_VIEW_FROM_CACHE = 'LOAD_VIEW_FROM_CACHE'
export function loadViewFromCache(bookId) {
  let view = localStorage.getItem(`book${bookId}_view`)
  let cacheReadingState = 'SUCCESS'
  if(!view) {
    cacheReadingState = 'FAILURE'
    view = {}
  }else{
    view = JSON.parse(view)
  }
  return {
    type: LOAD_VIEW_FROM_CACHE,
    bookId,
    cacheReadingState,
    mode: view.mode,
    screen: view.screen,
    style: view.style
  }
}
// end of to remove
