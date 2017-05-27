import _ from 'lodash'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'better-redux-form'
// import { ApolloClient } from 'react-apollo'
import components from './components'
import { entities } from './entities'
import * as TYPES from '../actions/actionTypes'
import { ROLES } from '../../constants'
import receiveData from './utils/receiveData'
import paginate from './utils/paginate'
import viewer from './viewer'
import apolloClient from '../apolloClient'

// const apoClient = new ApolloClient()

function errorMessage(state = [], action) {
  const { error, type } = action

  if (error) {
    const message = _.get(action, 'payload.message', 'Unknown error occurred!')
    console.error(`${type}: ${message}`)
    return [...state, message]
  }

  return state
}

const rootReducer = combineReducers({
  components,
  entities,
  errorMessage,
  routing,
  form,
  viewer,
  // it's true that define pagination in reducers is much better
  pagination: combineReducers({
    books: paginate(TYPES.BOOKS),
    bookShelves: paginate(TYPES.SHELF),
    users: paginate(TYPES.USERS)
  }),
  session: receiveData(TYPES.SESSION, {
    role: ROLES.VISITOR
  }),
  profile: receiveData(TYPES.PROFILE),
  // apollo: apolloClient.reducer(),
})

export default rootReducer
