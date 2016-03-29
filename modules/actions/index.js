export function setLang(lang) {
  return { type: "SETLANG", lang: lang }
}


// function fetchBookData(bookId) {
//   const fullUrl = "/api/v0.1/books/" + bookId + '/content/'
//
//   return new Promise(function(resolve){
//     fetch(fullUrl).then(function(res){
//       return res.json()
//     }).then(function(json){
//       resolve(json)
//     })
//   })
// }


// export function loadBook(bookId) {
//   return {
//     type: "LOAD",
//     bookId: bookId,
//     data: fetchBookData(bookId)
//   }
// }





export function fetchBook(bookId) {
  const fullUrl = "/api/v0.1/books/" + bookId + '/content/'
  return dispatch => {
    dispatch(requestBook(bookId))
    return fetch(fullUrl)
      .then(response => response.json())
      .then(json => dispatch(receiveBook(bookId, json)))
  }
}

export const REQUEST_BOOK = 'REQUEST_BOOK'
export function requestBook(bookId) {
  return {
    type: REQUEST_BOOK,
    bookId
  }
}

export const RECEIVE_BOOK = 'RECEIVE_BOOK'
export function receiveBook(bookId, json) {
  return {
    type: RECEIVE_BOOK,
    bookId,
    book: json
    // receivedAt: Date.now()
  }
}
