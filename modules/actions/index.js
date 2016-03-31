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
function requestBookContent(bookId) {
  return {
    type: REQUEST_BOOK_CONTENT,
    bookId
  }
}

export const RECEIVE_BOOK_CONTENT = 'RECEIVE_BOOK_CONTENT'
function receiveBookContent(bookId, nodes) {
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

// export const CACHE_BOOK = 'CACHE_BOOK'
// export function cacheBookContent(bookId, book) {
//   localStorage.setItem(`book${bookId}_content`, JSON.stringify(book))
//   return {
//     type: CACHE_BOOK,
//     bookId
//   }
// }


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

// export const LOAD_BOOK_FROM_CACHE = 'LOAD_BOOK_FROM_CACHE'
// export function loadBookContentFromCache(bookId) {
//   let book = localStorage.getItem(`book${bookId}_book`)
//   let cacheReadingState = 'SUCCESS'
//   if(!book) {
//     cacheReadingState = 'FAILURE'
//     book = {}
//   }else{
//     book = JSON.parse(book)
//   }
//   return {
//     type: LOAD_BOOK_FROM_CACHE,
//     bookId,
//     cacheReadingState,
//     book
//   }
// }


export const LOAD_PAGES = 'LOAD_PAGES'
export function loadPages(startPage) {
  return {
    type: LOAD_PAGES,
    currentPage: startPage
  }
}

export function fetchBookContentIfNeeded(bookId, callbackIfNotCached, callbackIfCached) {
  const fullUrl = "/api/v0.1/books/" + bookId + '/content/'
  return (dispatch, getState) => {
    dispatch(loadBookContentFromCache(bookId))
    if(!getState().book.content.isCached) {
      dispatch(requestBookContent(bookId))
      fetch(fullUrl).then(response => response.json()).then(json => {
        let contentNodes = parseHTML(json.data[0].html)
        dispatch(receiveBookContent(bookId, contentNodes))
        callbackIfNotCached()
      })
    }else{
      callbackIfCached()
    }
  }
}
