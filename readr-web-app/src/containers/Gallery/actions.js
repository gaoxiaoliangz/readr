import { createTransitionActionCreator } from '../../xstateMiddleware'

export const transition = createTransitionActionCreator('gallery')

export const search = (query) => {
  return dispatch => {
    const encodedQuery = encodeURIComponent(query)
    setTimeout(() => {
      fetchJsonp( // eslint-disable-line
        `https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&tags=${encodedQuery}`,
        { jsonpCallback: 'jsoncallback' })
        .then(res => res.json())
        .then(data => {
          dispatch(transition('SEARCH_SUCCESS', data.items))
        })
        .catch(err => {
          console.error(err)
          dispatch(transition('SEARCH_FAILURE'))
        })
    }, 1000)
  }
}

export const updateItems = items => {
  return {
    type: 'UPDATE_GALLERY_ITEMS',
    payload: items
  }
}

export const setPhoto = item => {
  return {
    type: 'SET_GALLERY_PHOTO',
    payload: item
  }
}
