export default function book(state = { status: {}, contentNodes: [[]] }, action){
  switch (action.type) {
    case "REQUEST_BOOK":
      return Object.assign({}, state, {
        status: Object.assign({}, state.status, {
          loading: true
        }),
        id: action.bookId
      })

    case "RECEIVE_BOOK":
      return Object.assign({}, state, {
        status: Object.assign({}, state.status, {
          loading: false,
          formated: false,
          styled: false
        }),
        contentNodes: action.contentNodes
      })

    case "STYLE_BOOK":
      return Object.assign({}, state, {
        status: Object.assign({}, state.status, {
          loading: false,
          styled: true,
          formated: false
        }),
        style: action.config.style
      })

    case "FORMAT_BOOK":
      return Object.assign({}, state, {
        status: Object.assign({}, state.status, {
          loading: false,
          formated: true
        }),
        contentNodes: action.contentNodes
      })

    case "CACHE_BOOK":
      return Object.assign({}, state, {
        status: Object.assign({}, state.status, {
          loading: false,
          formated: true,
          cached: true
        })
      })

    default:
      return state
  }
}
