import { combineReducers } from 'redux'
import book from './book'
import user from './user'
import notification from './notification'
import view from './view'

const rootReducer = combineReducers({
  book,
  user,
  notification,
  view
})

export default rootReducer
