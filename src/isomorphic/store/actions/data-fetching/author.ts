import { Schemas } from '../../../schemas'
import { CALL_API_OBJ } from '../../middleware/api'
import utils from '../../../utils'

export const AUTHOR_REQUEST = 'data-fetching/author/REQUEST'
export const AUTHOR_SUCCESS = 'data-fetching/author/SUCCESS'
export const AUTHOR_FAILURE = 'data-fetching/author/FAILURE'
export function fetchAuthors(options) {
  const CALL_API: CALL_API_OBJ = {
    types: [AUTHOR_REQUEST, AUTHOR_SUCCESS, AUTHOR_FAILURE],
    endpoint: `authors?${utils.parseFormData(options)}`,
    schema: Schemas.AUTHOR_ARRAY,
  }

  return {
    filter: options.q ? `query/${options.q}` : 'newest',
    CALL_API
  }
}
