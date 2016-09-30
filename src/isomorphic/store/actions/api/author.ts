import schemas from '../../../services/schemas'
import { CALL_API_OBJ } from '../../middleware/api'
import utils from '../../../utils'

export const AUTHOR_REQUEST = 'data-fetching/authors/REQUEST'
export const AUTHOR_SUCCESS = 'data-fetching/authors/SUCCESS'
export const AUTHOR_FAILURE = 'data-fetching/authors/FAILURE'
export function fetchAuthors(options) {
  const CALL_API: CALL_API_OBJ = {
    types: [AUTHOR_REQUEST, AUTHOR_SUCCESS, AUTHOR_FAILURE],
    endpoint: `authors?${utils.parseUrlencoded(options)}`,
    schema: schemas.AUTHOR_ARRAY,
    pagination: {
      name: 'authors',
      query: options.q
    }
  }

  return {
    CALL_API
  }
}
