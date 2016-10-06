import _ from 'lodash'
import { reducer as form } from 'redux-form'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import components from './components'
import * as entities from './entities'
import pagination from './pagination'
import legacyPagination from './legacy-pagination'
import elements from './elements'

const rootReducer = combineReducers(Object.assign({}, {
  components,
  routing,
  form,
  pagination: (state, action) => {
    return pagination(legacyPagination(state, action), action)
  },

  // deprecated
  elements
}, entities))

export default rootReducer
