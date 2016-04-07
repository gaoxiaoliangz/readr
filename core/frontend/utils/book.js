import $ from 'jquery'

// the function with the most complexed algorithm
export function groupNodesByPage(nodes, nodeHeights, pageHeight) {
  let pages = []
  let pageNodes = []
  let thisPageHeight = 0
  let pageIndex = 0

  // todo: add function cache
  // todo: check long paragraph situation
  function getPageOffset(pageIndex, pageHeight, nodeHeights) {
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

    let offset = getPageOffset(pageIndex, pageHeight, nodeHeights)

    if(thisPageHeight + offset > pageHeight) {
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

function loadBookContentFromCache(bookId) {
  return localStorage.getItem(`book${bookId}_content`)
}

function cacheBookContent(bookId, content) {
  if(typeof content !== 'string' && typeof content === 'object') {
    content = JSON.stringify(content)
    localStorage.setItem(`book${bookId}_content`, content)
    return true
  }else if(typeof content === 'string'){
    localStorage.setItem(`book${bookId}_content`, content)
    return true
  }else{
    return false
  }
}

// if content not in cache, then fetched data will be cached
export function mountBookContent(bookId, actions) {
  return new Promise(resolve => {
    actions.dispatchWrap((dispatch, getState) => {
      let bookContent = loadBookContentFromCache(bookId)
      if(bookContent) {
        actions.readContentFromCache(bookId, bookContent)
        resolve(getState)
      }else{
        actions.fetchBookContent(bookId, `books/${bookId}/content`).then(getState => {
          cacheBookContent(bookId, getState().book.html)
          resolve(getState)
        })
      }
    })
  })
}

export function parseHTML(htmlString) {
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

export function convertPercentageToPage(p, pageSum) {
  if(p>1) {
    console.error("Wrong parameter!")
    return null
  } else {
    return parseInt(p*pageSum) + 1
  }
}

export function genPageList(config) {
  let {startPage, quantity, offset, pages} = config
  let newPages = []

  while (startPage - offset < 0) {
    offset--
  }
  startPage = startPage - offset

  for (let i = startPage; i < quantity + startPage; i++) {
    let page = pages[i]
    newPages.push(page)
  }

  return newPages
}
