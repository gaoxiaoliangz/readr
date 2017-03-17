import { selectors as form } from 'better-redux-form'
import _ from 'lodash'
import * as viewer from './viewer'
import schemas from '../schemas'
import { pagedEntities } from './utils'

export const session = state => _.get(state, 'session', {})
export const profile = state => _.get(state, 'profile', {})

export const bookList = pagedEntities({
  schema: schemas.BOOK_ARRAY,
  paginationName: 'books'
})

export const shelf = pagedEntities({
  schema: schemas.SHELF_BOOK_ARRAY,
  paginationName: 'bookShelves'
})

export const userList = pagedEntities({
  schema: schemas.USER_ARRAY,
  paginationName: 'users'
})

export * from './entityUtils'
export * from './entities'
export { form, viewer }
