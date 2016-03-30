import { parseHTML } from 'utils'
import $ from 'jquery'
import Immutable from 'immutable'

export function setLang(lang) {
  return { type: "SETLANG", lang: lang }
}

// export const FORMAT_BOOK = 'FORMAT_BOOK'
// function formatBook(bookId, contentNodes, config) {
//   let content = document.querySelector(".pages ul li .content")
//   let contentNodesPaged = [[]]
//   let page = 0
//   let isNewPage = true
//   let nodesHeight = 0
//   let offsets = []
//   let startNodeIndeArr = []
//   let endNodeIndexArr = []
//
//   let setNewPage = function(index){
//     contentNodesPaged.push([])
//     page++
//     isNewPage = false
//     nodesHeight = 0
//     startNodeIndeArr.push(index)
//   }
//
//   Array.prototype.forEach.call(content.childNodes, (node, index) => {
//     if(node.tagName.toLowerCase() !== "p") {
//       console.error("Unsupported content found!")
//     }
//     contentNodes[0][index].props.style = {
//       height: node.clientHeight
//     }
//
//
//     if(index === 0){
//
//     }else{
//       let startNodeIndex = endNodeIndexArr[endNodeIndexArr.length-2]
//       nodesHeight = nodesHeight + node.clientHeight
//     }
//
//     if(isNewPage) {
//       setNewPage(index)
//     }else{
//       nodesHeight += nodesHeight
//       if (nodesHeight+offsets[offsets.length-1] > config.style.pageHeight) {
//         setNewPage(index)
//         endNodeIndexArr.push(index)
//       }
//     }
//     contentNodesPaged[page].push(node)
//   })
//
//   if (config.mode === "VERTICAL") {
//     // todo
//   }
//
//   return {
//     type: FORMAT_BOOK,
//     bookId,
//     contentNodes: contentNodesPaged,
//     config
//   }
// }


export const FORMAT_BOOK = 'FORMAT_BOOK'
function formatBook(bookId, contentNodes, config) {
  let content = document.querySelector(".pages ul li .content")
  let newContentNodes = [[]]
  let fuck = Immutable.Map(contentNodes[0][0].props)
  Array.prototype.forEach.call(content.childNodes, (node, index) => {
    if(node.tagName.toLowerCase() !== "p") {
      console.log(node.tagName.toLowerCase());
      console.error("Unsupported content found!")
    }

    let newNode = Object.assign({}, contentNodes[0][index])

    newNode.props.style = {
      height: node.clientHeight
    }
    newContentNodes[0].push(newNode)
  })


  console.log(fuck.get('children'));

  console.log(contentNodes[0][0].props.style);
  console.log(newContentNodes);

  return {
    type: FORMAT_BOOK,
    bookId,
    contentNodes: newContentNodes,
    config
  }
}

export const STYLE_BOOK = 'STYLE_BOOK'
export function styleBook(bookId, config) {
  let content = document.querySelector(".pages ul li .content")
  let defaultStyle = {
    fontSize: "18px",
    lineHeight: "1.8",
    fontWeight: "normal",
    pageWidth: "700px",
    pageHeight: "900px"
  }
  let style = Object.assign({}, defaultStyle, config.style)

  config.style = style
  $(content).css(config.style)

  return {
    type: STYLE_BOOK,
    bookId,
    config
  }
}

export const CACHE_BOOK = 'CACHE_BOOK'
export function cacheBook(bookId, book) {
  localStorage.setItem(`book${bookId}_cache`, JSON.stringify(book))
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

export function mountBook(bookId, config) {
  const fullUrl = "/api/v0.1/books/" + bookId + '/content/'
  return (dispatch, getState) => {
    dispatch(requestBook(bookId))
    fetch(fullUrl).then(response => response.json()).then(json => {
      let contentNodes = [parseHTML(json.data[0].html)]
      dispatch(receiveBook(bookId, contentNodes))
      dispatch(styleBook(bookId, config))
      dispatch(formatBook(bookId, contentNodes, config))
      dispatch(cacheBook(bookId, getState().book))
    })
  }
}
