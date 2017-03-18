import _ from 'lodash'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'better-redux-form'
import components from './components'
import { entities } from './entities'
import * as TYPES from '../constants/actionTypes'
import { ROLES } from '../constants'
import receiveData from './utils/receiveData'
import paginate from './utils/paginate'
import viewer from './viewer'

function errorMessage(state = [], action) {
  const { error } = action

  if (error) {
    const message = _.get(action, 'payload.message', 'Unknown error occurred!')
    return [...state, message]
  }

  return state
}

const rootReducer = combineReducers({
  components,
  viewer,
  entities,
  errorMessage,
  routing,
  form,
  // it's true that define pagination in reducers is much better
  pagination: combineReducers({
    books: paginate(TYPES.BOOKS),
    bookShelves: paginate(TYPES.SHELF),
    users: paginate(TYPES.USERS)
  }),
  session: receiveData(TYPES.SESSION, {
    role: ROLES.VISITOR
  }),
  profile: receiveData(TYPES.PROFILE)
})

export default rootReducer
