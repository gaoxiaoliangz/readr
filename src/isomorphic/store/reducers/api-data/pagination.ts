import paginate from './paginate'
import { combineReducers } from 'redux'
import * as actions from '../../actions'

export default combineReducers({
  books: paginate({
    mapActionToKey: action => action.flowType,
    types: ['BOOKS_REQUEST', 'BOOKS_SUCCESS', 'BOOKS_FAILURE'],
    merge: action => action.merge
  }),
  authors: paginate({
    mapActionToKey: action => action.filter,
    types: [actions.AUTHOR_REQUEST, actions.AUTHOR_SUCCESS, actions.AUTHOR_FAILURE]
  }),
  bookCollections: paginate({
    mapActionToKey: action => action.flowType,
    types: ['COLLECTIONS_REQUEST', 'COLLECTIONS_SUCCESS', 'COLLECTIONS_FAILURE']
  }),
  userList: paginate({
    // TODO
    mapActionToKey: action => 'all',
    types: ['USER_LIST_REQUEST', 'USER_LIST_SUCCESS', 'USER_LIST_FAILURE'],
  }),
  doubanBookSearchResults: paginate({
    mapActionToKey: action => action.query,
    types: [actions.DOUBAN_BOOK_SEARCH_REQUEST, actions.DOUBAN_BOOK_SEARCH_SUCCESS, actions.DOUBAN_BOOK_SEARCH_FAILURE]
  }),
  bookSearchResults: paginate({
    mapActionToKey: action => action.query,
    types: ['BOOK_SEARCH_REQUEST', 'BOOK_SEARCH_SUCCESS', 'BOOK_SEARCH_FAILURE']
  }),
  // bookList: paginate({
  //   mapActionToKey: action => action.filter,
  //   types: ['BOOK_LIST_REQUEST', 'BOOK_LIST_SUCCESS', 'BOOK_LIST_FAILURE']
  // }),
  // shelf: paginate({
  //   mapActionToKey: action => action.userId,
  //   types: ['SHELF_REQUEST', 'SHELF_SUCCESS', 'SHELF_FAILURE']
  // }),
})
