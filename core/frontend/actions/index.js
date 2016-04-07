import { parseHTML } from 'utils'
import $ from 'jquery'
import _ from 'lodash'
import * as styles from 'constants/styles'

import { callApi } from 'utils'


export const SET_LANG = 'SET_LANG'
export function setLang(lang) {
  return { type: "SET_LANG", lang: lang }
}


export function fetchBookContent(bookId, endpoint) {
  return promisedCallApi({
    types: ['BOOK_CONTENT_REQUEST', 'BOOK_CONTENT_SUCCESS', 'BOOK_CONTENT_FAILURE'],
    endpoint
  }, { bookId })
}


export function fetchBookInfo(bookId, endpoint) {
  return {
    bookId,
    CALL_API: {
      types: ['BOOK_INFO_REQUEST', 'BOOK_INFO_SUCCESS', 'BOOK_INFO_FAILURE'],
      endpoint
    }
  }
}

export const READ_CONTENT_FROM_CACHE = 'READ_CONTENT_FROM_CACHE'
export function readContentFromCache(bookId, content) {
  return {
    type: READ_CONTENT_FROM_CACHE,
    bookId,
    content
  }
}

export const LOAD_PAGES = 'LOAD_PAGES'
export function loadPages(pages) {
  return {
    type: LOAD_PAGES,
    pages
  }
}

export const JUMP_TO = 'JUMP_TO'
export function jumpTo(pageNo) {
  return {
    type: JUMP_TO,
    currentPage: pageNo
  }
}


//////////// //////////// //////////// //////////// //////////// //////////// //////////




export const REQUEST_BOOK_CONTENT = 'REQUEST_BOOK_CONTENT'
export function requestBookContent(bookId) {
  return {
    type: REQUEST_BOOK_CONTENT,
    bookId
  }
}

export const RECEIVE_BOOK_CONTENT = 'RECEIVE_BOOK_CONTENT'
export function receiveBookContent(bookId, content) {
  return {
    type: RECEIVE_BOOK_CONTENT,
    bookId,
    content,
    receivedAt: Date.now()
  }
}

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







// todo: merge with api.js
function promisedCallApi(CALL_API, actionArgObj){
  return (dispatch, getState) => {
    let { endpoint } = CALL_API
    const { types } = CALL_API
    const [ requestType, successType, failureType ] = types

    function actionWith(data) {
      const finalAction = Object.assign({}, actionArgObj, data)
      return finalAction
    }

    dispatch(actionWith({type: requestType}))

    if (typeof endpoint === 'function') {
      endpoint = endpoint(getState())
    }

    return new Promise((resolve, reject) => {
      callApi(endpoint).then(response => {
        dispatch(actionWith({
          response,
          type: successType
        }))
        resolve(getState)
      },
      error => {
        dispatch(actionWith({
          type: failureType,
          error: error.message || 'Oops!'
        }))
        reject(getState)
      })
    })
  }
}

export function dispatchWrap(shellFunction) {
  return (dispatch, getState) => {
    return shellFunction(dispatch, getState)
  }
}
