import * as actions from '../actions'

export default store => next => action => {

  if (action.type === actions.DOUBAN_BOOK_SEARCH_SUCCESS) {
    action.response.result = action.response.result.books
  }

  return next(action)
}
