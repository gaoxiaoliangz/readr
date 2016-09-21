import _ from 'lodash'
import {reducer as form} from 'redux-form'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import components from './components'
import * as apiDataReducers from './api-data'
// import * as actions from '../actions'

// deprecated
function elements(state = {}, action) {
  if (action.type === 'CHANGE_VALUE') {
    // lodash#merge 不支持 Symbol
    return Object.assign({}, state, {
      [action.name]: Object.assign({}, state[action.name], {
        value: action.value
      })
    })
  }

  if (action.type === 'UPDATE_ELEMENT') {
    return Object.assign({}, state, {
      [action.name]: Object.assign({}, state[action.name], action.data)
    })
  }

  return state
}

const rootReducer = combineReducers(Object.assign({}, {
  components,
  elements,
  routing,
  form
}, apiDataReducers))

export default rootReducer
