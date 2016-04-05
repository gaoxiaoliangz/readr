import { parseHTML } from 'utils'
import $ from 'jquery'
import Immutable from 'immutable'
import _ from 'lodash'
import * as styles from 'constants/styles'

const CONTENT_SELECTOR = '.pages ul li .content'

export function setLang(lang) {
  return { type: "SETLANG", lang: lang }
}


export const REQUEST_BOOK_CONTENT = 'REQUEST_BOOK_CONTENT'
export function requestBookContent(bookId) {
  return {
    type: REQUEST_BOOK_CONTENT,
    bookId
  }
}

export const RECEIVE_BOOK_CONTENT = 'RECEIVE_BOOK_CONTENT'
export function receiveBookContent(bookId, nodes) {
  return {
    type: RECEIVE_BOOK_CONTENT,
    bookId,
    nodes,
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


export const CALCULATE_BOOK_CONTENT = 'CALCULATE_BOOK_CONTENT'
export function calculateBookContent(contentNodes, pageHeight) {
  let newContentNodes = _.cloneDeep(contentNodes)
  let content = document.querySelector(CONTENT_SELECTOR)
  let heightSum = 0

  Array.prototype.forEach.call(content.childNodes, (node, index) => {
    if(node.tagName.toLowerCase() !== "p") {
      console.error("Unsupported content found!")
    }
    let height = node.clientHeight
    heightSum += height
    newContentNodes[index].props.style = {
      height: height
    }
  })

  return {
    type: CALCULATE_BOOK_CONTENT,
    contentNodes: newContentNodes,
    pageSum: parseInt(heightSum/pageHeight)+1
  }
}


export const CACHE_BOOK_CONTENT = 'CACHE_BOOK_CONTENT'
export function cacheBookContent(bookId, content) {
  localStorage.setItem(`book${bookId}_content`, JSON.stringify(content))
  return {
    type: CACHE_BOOK_CONTENT,
    bookId
  }
}

export const LOAD_BOOK_CONTENT_FROM_CACHE = 'LOAD_BOOK_CONTENT_FROM_CACHE'
export function loadBookContentFromCache(bookId) {
  let content = localStorage.getItem(`book${bookId}_content`)
  let cacheReadingState = 'SUCCESS'
  let nodes = []
  let pageSum = 0

  if(!content) {
    cacheReadingState = 'FAILURE'
  }else{
    content = JSON.parse(content)
    nodes = content.nodes
    pageSum = content.pageSum
  }
  return {
    type: LOAD_BOOK_CONTENT_FROM_CACHE,
    bookId,
    cacheReadingState,
    contentNodes: nodes,
    pageSum: pageSum
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


export const LOAD_PAGES = 'LOAD_PAGES'
export function loadPages(startPage) {
  return {
    type: LOAD_PAGES,
    currentPage: startPage
  }
}

export function fetchBookContent(bookId) {
  const fullUrl = "/api/v0.1/books/" + bookId + '/content/'
  return (dispatch, getState) => {
    return new Promise(function(resolve){
      dispatch(requestBookContent(bookId))
      fetch(fullUrl).then(response => response.json()).then(json => {
        console.log(json.data);
        let contentNodes = parseHTML(json.data[0].html)
        dispatch(receiveBookContent(bookId, contentNodes))
        resolve(getState)
      })
    })
  }
}

export function dispatchWrap(shellFunction) {
  return (dispatch, getState) => {
    return shellFunction(dispatch, getState)
  }
}
