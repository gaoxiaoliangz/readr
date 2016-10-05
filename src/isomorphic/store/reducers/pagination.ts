import * as actions from '../actions'
import paginate from './paginate'
import { combineReducers } from 'redux'

const DEFAULT_KEY = 'default'
const SEARCH_KEY = 'search'

export default combineReducers({
  books: paginate({
    mapActionToKey: action => {
      const {apiArgs} = action
      const {q} = apiArgs[0] || {} as any
      if (q) {
        return SEARCH_KEY
      }
      return DEFAULT_KEY
    },
    types: [
      actions.BOOKS.REQUEST,
      actions.BOOKS.SUCCESS,
      actions.BOOKS.FAILURE,
    ]
  })
})
