export default function book(state = "hahah", action){
  switch (action.type) {
    case "REQUEST_BOOK":
      return {
        isFetching: true
      }
    case "RECEIVE_BOOK":
      return {
        isFetching: false,
        book: action.book
      }
    default:
      return state
  }
}
