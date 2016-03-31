export default function book(state = {content: { nodes: [] }}, action){
  switch (action.type) {
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
          nodes: action.contentNodes
        })
      })

    case "SET_BOOK_STYLE":
      return Object.assign({}, state, {
        config: action.config
      })

    case "CALCULATE_BOOK_CONTENT":
      return Object.assign({}, state, {
        content: Object.assign({}, state.content, {
          nodes: action.contentNodes,
          isCalculated: true
        })
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
          isFetching: false,
          isCalculated: true,
          isCached: true,
          isLoadedFromCache: true
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
