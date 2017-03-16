import { selectors as form } from 'better-redux-form'
import _ from 'lodash'
import * as viewer from './viewer'
import schemas from '../schemas'
import { pagedEntities } from './utils'

export const session = state => {
  return _.get(state, 'session', {})
}

export const bookList = pagedEntities({
  schema: schemas.BOOK_ARRAY,
  paginationName: 'books'
})

export * from './entityUtils'
export * from './entities'
export { form, viewer }
