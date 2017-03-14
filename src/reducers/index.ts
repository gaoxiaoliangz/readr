import _ from 'lodash'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'better-redux-form'
import components from './components'
import pagination from './pagination'
import { entities as entities2 } from './entities2'
import * as ActionTypes from '../constants/actionTypes'
import receiveData from './receiveData'

type Action = {
  payload?: any
  meta?: any
  type: string
}

function errorMessage(state = [], action) {
  const { error } = action

  if (error) {
    const message = _.get(action, 'error.message') || _.get(action, 'payload.message', '发生未知错误！')
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
  pagination,
  entities2,
  session: receiveData(ActionTypes.SESSION2)
})

export default rootReducer
