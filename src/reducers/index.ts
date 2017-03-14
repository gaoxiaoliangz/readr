import _ from 'lodash'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'better-redux-form'
import components from './components'
import pagination from './pagination'
import { entities as entities2, appData } from './entities2'
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

export function entities(state = {}, action) {
  if (action.response && action.response.entities) {
    return _.merge({}, state, action.response.entities)
  }

  if (action.type === ActionTypes.REMOVE_ENTITY) {
    const {name, id} = action
    return _.assign({}, state, {
      [name]: _.omit(state[name], [id])
    })
  }

  return state
}

const DEFAULT_VISTOR_STATE = { user: { role: 'visitor' }, isFetching: false, determined: false }
export function session(state = DEFAULT_VISTOR_STATE, action: Action) {
  switch (action.type) {
    case ActionTypes.SESSION2.REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })

    case ActionTypes.SESSION2.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        determined: true,
        user: action.payload.response
      })

    case ActionTypes.SESSION2.FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        determined: true
      })

    case ActionTypes.LOGOUT.SUCCESS:
      return Object.assign({}, DEFAULT_VISTOR_STATE, {
        determined: true
      })

    default:
      return state
  }
}
// export function session(state = DEFAULT_VISTOR_STATE, action) {
//   switch (action.type) {
//     case ActionTypes.AUTH.REQUEST:
//       return Object.assign({}, state, {
//         isFetching: true
//       })

//     case ActionTypes.AUTH.SUCCESS:
//       return Object.assign({}, state, {
//         isFetching: false,
//         determined: true,
//         user: action.response
//       })

//     case ActionTypes.AUTH.FAILURE:
//       return Object.assign({}, state, {
//         isFetching: false,
//         determined: true
//       })

//     case ActionTypes.LOGOUT.SUCCESS:
//       return Object.assign({}, DEFAULT_VISTOR_STATE, {
//         determined: true
//       })

//     default:
//       return state
//   }
// }

const rootReducer = combineReducers({
  components,
  entities,
  errorMessage,
  session,
  routing,
  form,
  pagination,
  appData,
  entities2,
  session2: receiveData(ActionTypes.SESSION2, json => {
    return 'heheh'
  })
})

export default rootReducer
