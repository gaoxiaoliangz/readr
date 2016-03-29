import { formatHTMLStringToArray } from 'utils'

export function setLang(lang) {
  return { type: "SETLANG", lang: lang }
}

export const GEN_BOOK_MAP = 'GEN_BOOK_MAP'
function cacheBook(bookId) {
  return {
    type: GEN_BOOK_MAP,
    bookId
  }
}

export const CACHE_BOOK = 'CACHE_BOOK'
function cacheBook(bookId) {
  return {
    type: CACHE_BOOK,
    bookId
  }
}

export const REQUEST_BOOK = 'REQUEST_BOOK'
function requestBook(bookId) {
  return {
    type: REQUEST_BOOK,
    bookId
  }
}

export const RECEIVE_BOOK = 'RECEIVE_BOOK'
function receiveBook(bookId, content) {
  return {
    type: RECEIVE_BOOK,
    bookId,
    content,
    receivedAt: Date.now()
  }
}

function fetchBook(bookId) {
  const fullUrl = "/api/v0.1/books/" + bookId + '/content/'
  return dispatch => {
    dispatch(requestBook(bookId))
    return fetch(fullUrl)
      .then(response => response.json())
      .then(json => {
        // dispatch(receiveBook(bookId, formatHTMLStringToArray(json.data[0].html)))
        dispatch(receiveBook(bookId, json.data[0].html))
      })
  }
}

function genBookMap(bookId) {
  return (dispatch, getState) => {

    dispatch(genBookMap(bookId))
  }
}


export function fetchBookIfNeeded(subreddit) {

  return (dispatch, getState) => {
    console.log(getState())
    return dispatch(fetchBook(subreddit))
  }
}
