import $ from 'jquery'
import { getCache, setCache, callApi } from 'utils'
import { API_ROOT } from 'constants/APIS'

export function initBook(bookId, actions, view) {
  let pageHeight = view.pageHeight
  let pageWidth = view.pageWidth
  let screen = view.screen

  function htmlToPages(html) {
    let nodes = parseHTML(html)
    let nodeHeights = getNodeHeights('.pages ul>li>.content', actions)
    let pages = groupNodesByPage(nodes, nodeHeights, pageHeight)

    return {
      type: 'pages',
      props: {
        children: pages,
        view
      }
    }
  }

  return new Promise((resolve, reject) => {
    actions.wrap((dispatch, getState) => {
      let pages = getCache(`book${bookId}_pages`)

      if(pages){
        pages = JSON.parse(pages)

        if(!compareObjects(view, pages.props.view )) {
          let nodes = pages.props.children.reduce((a, b) => (Array.concat(a, b.props.children)),[])
          let html = parseNodes(nodes)

          // loadHTML is not async, but only in this way setBookMode can work
          // still haven't figured out why this happens
          actions.promisedWrap((dispatch) => {
            console.log(html);
            actions.loadHTML(html)
          }).then(getState => {
            pages = htmlToPages(html)
            actions.loadPages(pages)
            setCache(`book${bookId}_pages`, JSON.stringify(pages))

            resolve({ pages })
          })
        }else{
          actions.loadPages(pages)
          actions.setBookMode('vertical')

          resolve({ pages })
        }
      }else{
        actions.fetchBookContent(bookId, `books/${bookId}/content`).then(getState => {
          let pages = htmlToPages(getState().book.html)

          actions.loadPages(pages)
          setCache(`book${bookId}_pages`, JSON.stringify(pages))

          resolve({ pages })
        }).catch((err) => {
          console.error(err)

          reject(err)
        })
      }
    })
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

export function getProgress(bookId) {
  return new Promise(resolve => {
    callApi(`${API_ROOT}books/${bookId}/progress`).then((res) => {
      resolve(res)
    })
  })
}

export function setProgress(bookId, progress) {
  return new Promise(resolve => {
    callApi(`${API_ROOT}books/${bookId}/progress`, 'POST', progress).then((res) => {
      resolve(res)
    })
  })
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

function parseNodes(nodes) {
  let html = ''

  for (let i = 0; i < nodes.length; i++) {
    if(nodes[i].type !== 'p') {
      console.error('Unsupported node found!')
      continue
    }else{
      html += `<p>${nodes[i].props.children}</p>`
    }
  }

  return html
}

// very rough but enough for use here
function compareObjects(obj1, obj2) {
  let isEqual = true

  try {
    for(let prop in obj1) {
      if(obj1[prop] !== obj2[prop]) {
        isEqual = false
        break
      }
    }
  } catch (e) {
    console.error(e)
    isEqual = false
  }

  return isEqual
}
