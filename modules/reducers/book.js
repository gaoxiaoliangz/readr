export default function book(state = { isLoading: false, content: "<p>loading</p>", unFormated: true }, action){
  switch (action.type) {
    case "REQUEST_BOOK":
      return Object.assign({}, state, {
        isLoading: true,
        bookId: action.bookId
      })

    case "RECEIVE_BOOK":
      return Object.assign({}, state, {
        isLoading: false,
        content: action.content,
        bookId: action.bookId,
        unFormated: true
      })

    default:
      return state
  }
}
