const FILTER_POST_STATUS = 'readr/manage-posts/FILTER_POST_STATUS'
const FILTER_POST_VISIBILITY = 'readr/manage-posts/FILTER_POST_VISIBILITY'
const FILTER_POST_CATEGORY = 'readr/manage-posts/FILTER_POST_CATEGORY'

export default function reducer(state = {}, action) {
  switch (action.type) {
    case FILTER_POST_STATUS:
      return {
        ...state,
        postStatus: action.payload
      }

    case FILTER_POST_VISIBILITY:
      return {
        ...state,
        postVisilibity: action.payload
      }

    case FILTER_POST_CATEGORY:
      return {
        ...state,
        postCategory: action.payload
      }
  
    default:
      return state
  }
}

export function filterPostStatus(status) {
  return {
    type: FILTER_POST_STATUS,
    payload: status
  }
}

export function filterPostVisilibity(visibility) {
  return {
    type: FILTER_POST_VISIBILITY,
    payload: visibility
  }
}

export function filterPostCategory(category) {
  return {
    type: FILTER_POST_CATEGORY,
    payload: category
  }
}
