import { combineReducers } from 'redux'

export default combineReducers({
  items: (state = [], { type, payload }) => {
    if (type === 'UPDATE_GALLERY_ITEMS') {
      return payload
    }
    return state
  },
  photo: (state = {}, { type, payload }) => {
    if (type === 'SET_GALLERY_PHOTO') {
      return payload
    }
    return state
  }
})
