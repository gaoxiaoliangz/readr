import { combineReducers } from 'redux'
import book from './book'
import user from './user'

const rootReducer = combineReducers({
  book,
  user
})

export default rootReducer
