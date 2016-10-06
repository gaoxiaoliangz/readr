import schemas from '../../../services/schemas'
import { CALL_API_OBJ } from '../../middleware/api'
import _ from 'lodash'
import helpers from '../../../helpers'



export const BOOK_REQUEST = 'data-fetching/book/REQUEST'
export const BOOK_SUCCESS = 'data-fetching/book/SUCCESS'
export const BOOK_FAILURE = 'data-fetching/book/FAILURE'
export function fetchBook(bookId, fields?: Array<any>) {
  let endpoint = `books/${bookId}`

  if (fields) {
    endpoint += `?fields=${fields.join(',')}`
  }

  const CALL_API: CALL_API_OBJ = {
    types: [BOOK_REQUEST, BOOK_SUCCESS, BOOK_FAILURE],
    endpoint,
    schema: schemas.BOOK
  }

  return {
    bookId,
    CALL_API
  }
}
