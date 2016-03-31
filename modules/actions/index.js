import { parseHTML } from 'utils'
import $ from 'jquery'
import Immutable from 'immutable'
import _ from 'lodash'

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
function receiveBookContent(bookId, contentNodes) {
  return {
    type: RECEIVE_BOOK_CONTENT,
    bookId,
    contentNodes,
    receivedAt: Date.now()
  }
}

export const SET_BOOK_STYLE = 'SET_BOOK_STYLE'
export function setBookStyle(bookId, config) {
  return {
    type: SET_BOOK_STYLE,
    config
  }
}


export const CALCULATE_BOOK_CONTENT = 'CALCULATE_BOOK_CONTENT'
function calculateBookContent(bookId, contentNodes, config) {
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
    bookId,
    contentNodes: newContentNodes,
    config,
    // todo: 900
    pageSum: parseInt(heightSum/900)+1
  }
}



export const CACHE_BOOK_CONTENT = 'CACHE_BOOK_CONTENT'
export function cacheBookContent(bookId, book) {
  localStorage.setItem(`book${bookId}_cache`, JSON.stringify(book))
  return {
    type: CACHE_BOOK_CONTENT,
    bookId
  }
}

// todo
export const LOAD_BOOK_CONTENT_FROM_CACHE = 'LOAD_BOOK_CONTENT_FROM_CACHE'
export function loadBookContentFromCache(bookId) {
  localStorage.getItem(`book${bookId}_cache`)
  return {
    type: CACHE_BOOK,
    bookId
  }
}



export const LOAD_PAGES = 'LOAD_PAGES'
export function loadPages(bookId, page) {
  return {
    type: LOAD_PAGES,
    bookId,
    currentPage: page
  }
}

export function mountBook(bookId, config, callback) {
  const fullUrl = "/api/v0.1/books/" + bookId + '/content/'
  return (dispatch, getState) => {
    dispatch(requestBookContent(bookId))
    fetch(fullUrl).then(response => response.json()).then(json => {
      let contentNodes = parseHTML(json.data[0].html)
      dispatch(receiveBookContent(bookId, contentNodes))
      dispatch(setBookStyle(bookId, config))
      dispatch(calculateBookContent(bookId, contentNodes, config))
      dispatch(cacheBookContent(bookId, getState().book))
      callback()
    })
  }
}
