export default function book(state, action) {
  if(typeof state === 'undefined') {
    state = {}
  }
  switch (action.type) {

    case 'BOOK_CONTENT_REQUEST':
      return Object.assign({}, state, {
        isFetchingContent: true,
        id: action.bookId
      })

    case 'BOOK_CONTENT_SUCCESS':
      return Object.assign({}, state, {
        isFetchingContent: false,
        html: action.response.data[0].html
      })

    case 'BOOK_INFO_REQUEST':
      return Object.assign({}, state, {
        isFetchingInfo: true,
        id: action.bookId
      })

    case 'BOOK_INFO_SUCCESS':
      return Object.assign({}, state, {
        isFetchingInfo: false,
        meta: action.response.data[0]
      })

    case 'READ_CONTENT_FROM_CACHE':
      return Object.assign({}, state, {
        html: action.content
      })

    case 'LOAD_PAGES':
      return Object.assign({}, state, {
        isPagesLoaded: true,
        pages: action.pages,
        html: null
      })

    case 'SET_BOOK_MODE':
      return Object.assign({}, state, {
        mode: action.mode
      })

    case 'JUMP_TO':
      return Object.assign({}, state, {
        isPagesLoaded: true,
        currentPage: action.currentPage
      })

    case 'DOUBAN_BOOK_SEARCH_REQUEST':
      return Object.assign({}, state, {
        isFetchingSearch: true
      })

    case 'DOUBAN_BOOK_SEARCH_SUCCESS':
      return Object.assign({}, state, {
        isFetchingSearch: false,
        searchResults: action.response
      })

    case 'DOUBAN_BOOK_SEARCH_FAILURE':
      return Object.assign({}, state, {
        isFetchingSearch: false,
        error: action.response
      })

    case 'CLEAR_BOOK_SEARCH':
      return Object.assign({}, state, {
        searchResults: null
      })


  //  todo: remove

    case 'SET_VIEW_SCREEN':
      return Object.assign({}, state, {
        view: Object.assign({}, state.view, {
          screen: action.screen,
          style: action.style
        })
      })

    case 'SET_VIEW_MODE':
      return Object.assign({}, state, {
        view: Object.assign({}, state.view, {
          mode: action.mode
        })
      })

    case 'CUSTOMIZE_VIEW':
      return Object.assign({}, state, {
        view: Object.assign({}, state.view, {
          customStyle: action.customStyle
        })
      })

    case 'CALCULATE_BOOK_CONTENT':
      return Object.assign({}, state, {
        content: Object.assign({}, state.content, {
          nodes: action.contentNodes,
          isCalculated: true,
          pageSum: action.pageSum
        }),
      })

    case 'CACHE_BOOK_CONTENT':
      return Object.assign({}, state, {
        content: Object.assign({}, state.content, {
          isCached: true
        })
      })

    case 'CACHE_VIEW':
      return Object.assign({}, state, {
        view: Object.assign({}, state.view, {
          isCached: true
        })
      })

    case 'LOAD_VIEW_FROM_CACHE':
      return Object.assign({}, state, {
        view: Object.assign({}, state.view, {
          nodes: action.contentNodes,
          isCached: action.cacheReadingState==='SUCCESS'?true:false,
          cacheReadingState: action.cacheReadingState,
          mode: action.mode,
          screen: action.screen,
          style: action.style
        })
      })


    default:
      return state
  }
}
