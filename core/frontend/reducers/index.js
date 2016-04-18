import { combineReducers } from 'redux'
import book from './book'
import user from './user'
import notification from './notification'
import confirm from './confirm'
import view from './view'

const rootReducer = combineReducers({
  book,
  user,
  notification,
  view,
  confirm
})

export default rootReducer
