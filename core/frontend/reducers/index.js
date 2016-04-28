import { combineReducers } from 'redux'
import book from './book'
import user from './user'
import notification from './notification'
import confirm from './confirm'
import view from './view'
import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
  book,
  user,
  notification,
  view,
  confirm,
  routing
})

export default rootReducer
