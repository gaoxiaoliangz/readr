import { parseHTML } from 'utils'
import $ from 'jquery'

export function setLang(lang) {
  return { type: "SETLANG", lang: lang }
}

export const FORMAT_BOOK = 'FORMAT_BOOK'
function formatBook(bookId, contentNodes, config) {
  let $content = $("#book"+bookId)

  let view = {}

  // view = {
  //   bookHeight: $(selector).height(),
  //   pageSum: Math.ceil($(selector).height()/config.pageHeight),
  //   windowWidth: $(window).width(),
  //   pageHeight: config.pageHeight,
  //   pageWidth: $(selector).width(),
  //   fontSize: $(selector).find("p").css("font-size"),
  //   lineHeight: $(selector).find("p").css("line-height")
  // }

  let defaultConfig = {
    fontSize: "18px",
    lineHeight: "1.8",
    fontWeight: "normal",
    pageWidth: "700px",
    pageHeight: "900px"
  }

  config = Object.assign({}, defaultConfig, config)
  $content.css(config.style)

  if (config.mode === "VERTICAL") {
    // todo
  }

  $content.children().each(function(index){
    let height = $(this).height()
    let type = $(this).prop("tagName").toLowerCase()

    if(type !== "p") {
      console.error("Unsupported content found!")
    }

    contentNodes[index].props.style = {
      height: height
    }
  })

  return {
    type: FORMAT_BOOK,
    bookId,
    contentNodes,
    config
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
function receiveBook(bookId, contentNodes) {
  return {
    type: RECEIVE_BOOK,
    bookId,
    contentNodes,
    receivedAt: Date.now()
  }
}

// function fetchBook(bookId) {
//   const fullUrl = "/api/v0.1/books/" + bookId + '/content/'
//   return dispatch => {
//     dispatch(requestBook(bookId))
//       fetch(fullUrl).then(response => response.json()).then(json => {
//         let contentNodes = [parseHTML(json.data[0].html)]
//         dispatch(receiveBook(bookId, contentNodes))
//       })
//   }
// }


function fetchBook(bookId) {
  const fullUrl = "/api/v0.1/books/" + bookId + '/content/'
  return new Promise(function(resolve) {
    return dispatch => {
      dispatch(requestBook(bookId))
      fetch(fullUrl).then(response => response.json()).then(json => {
        let contentNodes = [parseHTML(json.data[0].html)]
        dispatch(receiveBook(bookId, contentNodes))
        resolve(contentNodes)
      })
    }
  })
}



// function genBookMap(bookId) {
//   return (dispatch, getState) => {
//
//     dispatch(genBookMap(bookId))
//   }
// }


// export function genFormatedContent(selector, config) {
//
//
//
//
//
//   return map
// }



function fetchBookIfNeeded(bookId) {
  return (dispatch, getState) => {
    return dispatch(fetchBook(bookId))
  }
}


// export function mountBook(bookId, config) {
//   return (dispatch, getState) => {
//     dispatch(fetchBook(bookId))
//     return (dispatch) => {
//       return dispatch(formatBook(bookId, getState().book.contentNodes, config))
//     }
//   }
// }

export function mountBook(bookId, config) {
  return (dispatch, getState) => {
    // dispatch(fetchBook(bookId).then(function(data){
    //   dispatch(formatBook(bookId, data, config))
    // }))
    dispatch(fetchBook(bookId))
  }
}


// export function mountBook(bookId, config) {
//   return (dispatch, getState) => {
//     dispatch(fetchBook(bookId))
//   }
// }
