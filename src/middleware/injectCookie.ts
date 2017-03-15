export default cookie => store => next => action => {
  if (action.payload && action.payload.request) {
    action.payload.request.injectedCookie = cookie
    next(action)
  } else {
    next(action)
  }
}
