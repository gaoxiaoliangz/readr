export default store => next => action => {

  if (action.type === 'DOUBAN_BOOK_SEARCH_SUCCESS') {
    action.response.result = action.response.result.books
  }

  next(action)
}
