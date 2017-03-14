export default cookie => store => next => action => {
  if (action.meta && action.meta.isLoadAction && action.payload.request) {
    action.payload.request.injectedCookie = cookie
    next(action)
  } else {
    next(action)
  }
}
