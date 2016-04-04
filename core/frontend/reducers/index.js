import { combineReducers } from 'redux'
import lang from './lang'
import book from './book'

const rootReducer = combineReducers({
  lang,
  book
})

export default rootReducer
