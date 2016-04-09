import { combineReducers } from 'redux'
import book from './book'
import user from './user'
import notification from './notification'

const rootReducer = combineReducers({
  book,
  user,
  notification
})

export default rootReducer
