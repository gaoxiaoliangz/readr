import * as ACTION_TYPES from '../../constants/actionTypes'

export default store => next => action => {

  if (action.type === ACTION_TYPES.DOUBAN_BOOKS.SUCCESS) {
    action.response.result = action.response.result.books
  }

  return next(action)
}
