import $ from 'jquery'

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
