import * as ActionTypes from '../actions/actionTypes'

export default store => next => action => {

  if (action.type === ActionTypes.DOUBAN_BOOKS.SUCCESS) {
    action.response.result = action.response.result.books
  }

  return next(action)
}
