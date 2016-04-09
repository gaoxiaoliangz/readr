import $ from 'jquery'
import { readCache, saveCache } from 'utils'


// not pure, tell me if there's a bette way to do this
export function initBook(bookId, actions, pageHeight) {
  return new Promise((resolve, reject) => {
    let pages = readCache(`book${bookId}_pages`)

    if(pages){
      actions.loadPages(JSON.parse(pages))
      actions.setBookMode('vertical')
      resolve(true)
    }else{
      actions.fetchBookContent(bookId, `books/${bookId}/content`).then(getState => {
        let nodes = parseHTML(getState().book.html)
        let nodeHeights = getNodeHeights('.pages ul>li>.content', actions)
        let pages = groupNodesByPage(nodes, nodeHeights, pageHeight)

        saveCache(`book${bookId}_pages`, JSON.stringify(pages))
        actions.loadPages(pages)
        resolve(true)
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    }
  })
}

// the function with the most complexed algorithm
export function groupNodesByPage(nodes, nodeHeights, pageHeight) {
  let pages = []
  let pageNodes = []
  let thisPageHeight = 0
  let pageIndex = 0


  // todos:
  // check long paragraph situation
  // add function cache
  function getPageOffset(pageIndex, nodeHeights, pageHeight) {
    let offset = 0
    if(pageIndex !== 0) {
      let i = 0
      let nodeHeightSum = 0
      while(nodeHeightSum < pageHeight * pageIndex) {
        nodeHeightSum += nodeHeights[i]
        i++
      }
      offset = nodeHeightSum - nodeHeights[i-1] - pageIndex * pageHeight
    }
    return offset
  }

  for (var i = 0; i < nodes.length; i++) {
    thisPageHeight += nodeHeights[i]
    pageNodes.push(nodes[i])
    nodes[i].props.index = i

    let offset = getPageOffset(pageIndex, nodeHeights, pageHeight)

    if(thisPageHeight + offset > pageHeight || i === nodes.length - 1) {
      pages.push({
        props: {
          children: pageNodes,
          style: {
            top: pageIndex*pageHeight,
            position: 'absolute',
            height: pageHeight
          },
          pageNo: pageIndex+1,
          offset
        },
        type: "page"
      })

      pageIndex++
      thisPageHeight = 0
      pageNodes = []
    }

    // add prev node
    if(pageIndex !== 0 && pageNodes.length === 0){
      pageNodes.push(nodes[i])
      thisPageHeight = nodeHeights[i]
    }
  }

  return pages
}

export function convertPercentageToPage(p, pageSum) {
  if(p>1) {
    console.error("Wrong parameter!")
    return null
  } else {
    return parseInt(p*pageSum) + 1
  }
}

export function filterPages(config) {
  let {startPage, quantity, offset, pages} = config
  let newPages = []

  while (startPage - offset < 0) {
    offset--
  }
  startPage = startPage - offset

  for (let i = startPage; i < quantity + startPage && i < pages.length; i++) {
    let page = pages[i]
    newPages.push(page)
  }

  return newPages
}


/*
 * functions being used internally
 */

function getNodeHeights(selector, actions) {
  actions.setBookMode('render')

  let nodes = document.querySelector(selector).childNodes
  let nodesHeight = []

  Array.prototype.forEach.call(nodes, (node, index) => {
    if(node.tagName.toLowerCase() !== "p") {
      console.error("Unsupported content found!")
    }
    nodesHeight.push(node.clientHeight)
  })

  actions.setBookMode('vertical')

  return nodesHeight
}

function parseHTML(htmlString) {
  let nodes = []
  let $html = $(htmlString)

  for (var i = 0; i < $html.length; i++) {
    if($html[i].nodeType != 1) {
      continue
    }else{
      nodes.push({
        type: $html[i].tagName.toLowerCase(),
        props: {
          children: $html[i].innerHTML
        }
      })
    }
  }
  return nodes
}
