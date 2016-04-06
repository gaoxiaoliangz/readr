export default function book(state, action) {
  if(typeof state === "undefined") {
    state = {content: { nodes: [] }, view: {}}
  }
  switch (action.type) {

    case "BOOK_CONTENT_REQUEST":
      return Object.assign({}, state, {
        content: Object.assign({}, state.content, {
          isFetching: true
        }),
        id: action.bookId
      })

    // old
    case "REQUEST_BOOK_CONTENT":
      return Object.assign({}, state, {
        content: Object.assign({}, state.content, {
          isFetching: true
        }),
        id: action.bookId
      })

    case "RECEIVE_BOOK_CONTENT":
      return Object.assign({}, state, {
        content: Object.assign({}, state.content, {
          isFetching: false,
          nodes: action.nodes
        })
      })

    case "SET_VIEW_SCREEN":
      return Object.assign({}, state, {
        view: Object.assign({}, state.view, {
          screen: action.screen,
          style: action.style
        })
      })

    case "SET_VIEW_MODE":
      return Object.assign({}, state, {
        view: Object.assign({}, state.view, {
          mode: action.mode
        })
      })

    case "CUSTOMIZE_VIEW":
      return Object.assign({}, state, {
        view: Object.assign({}, state.view, {
          customStyle: action.customStyle
        })
      })

    case "CALCULATE_BOOK_CONTENT":
      return Object.assign({}, state, {
        content: Object.assign({}, state.content, {
          nodes: action.contentNodes,
          isCalculated: true,
          pageSum: action.pageSum
        }),
      })

    case "CACHE_BOOK_CONTENT":
      return Object.assign({}, state, {
        content: Object.assign({}, state.content, {
          isCached: true
        })
      })

    case "LOAD_BOOK_CONTENT_FROM_CACHE":
      return Object.assign({}, state, {
        content: Object.assign({}, state.content, {
          nodes: action.contentNodes,
          isFetching: false,
          isCalculated: true,
          isCached: action.cacheReadingState==='SUCCESS'?true:false,
          cacheReadingState: action.cacheReadingState,
          pageSum: action.pageSum
        })
      })

    case "CACHE_VIEW":
      return Object.assign({}, state, {
        view: Object.assign({}, state.view, {
          isCached: true
        })
      })

    case "LOAD_VIEW_FROM_CACHE":
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

    case "LOAD_PAGES":
      return Object.assign({}, state, {
        isPagesLoaded: true,
        currentPage: action.currentPage
      })

    default:
      return state
  }
}
