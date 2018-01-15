import _ from 'lodash'

export default store => next => action => {
  if (typeof action.SERVER_STORE === 'undefined') {
    return next(action)
  }

  const actionBody = new Promise(resolve => {
    resolve(action.SERVER_STORE.body)
  })

  return actionBody.then(body => {
    return next(dispatch => {
      dispatch(body)
      return {
        ok: true,
        response: action.body.response
      }
    })
  })
}
