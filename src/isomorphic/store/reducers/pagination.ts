import * as actions from '../actions'
import paginate from './paginate'
import { combineReducers } from 'redux'

const DEFAULT_KEY = 'default'

export default combineReducers({
  books: paginate({
    mapActionToKey: action => DEFAULT_KEY,
    types: [
      actions.BOOKS.REQUEST,
      actions.BOOKS.SUCCESS,
      actions.BOOKS.FAILURE,
    ]
  })
})
