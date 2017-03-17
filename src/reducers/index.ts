import _ from 'lodash'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'better-redux-form'
import components from './components'
// import pagination from './pagination'
import { entities } from './entities'
import * as ActionTypes from '../constants/actionTypes'
import { ROLES } from '../constants'
import receiveData from './utils/receiveData'
import paginate from './utils/paginate'

type Action = {
  payload?: any
  meta?: any
  type: string
}

function errorMessage(state = [], action) {
  const { error } = action

  if (error) {
    const message = _.get(action, 'error.message') || _.get(action, 'payload.message', 'Unknown error occurred!')
    return [...state, message]
  }

  return state
}

// export function entities(state = {}, action) {
//   if (action.response && action.response.entities) {
//     return _.merge({}, state, action.response.entities)
//   }

//   if (action.type === ActionTypes.REMOVE_ENTITY) {
//     const {name, id} = action
//     return _.assign({}, state, {
//       [name]: _.omit(state[name], [id])
//     })
//   }

//   return state
// }

const rootReducer = combineReducers({
  components,
  entities,
  errorMessage,
  routing,
  form,
  pagination: combineReducers({
    books: paginate(ActionTypes.BOOKS),
    bookShelves: paginate(ActionTypes.SHELF)
  }),
  session: receiveData(ActionTypes.SESSION, {
    role: ROLES.VISITOR
  }),
  profile: receiveData(ActionTypes.PROFILE)
})

export default rootReducer
