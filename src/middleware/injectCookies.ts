export default cookies => store => next => action => {
  if (action.meta && action.meta.isLoadAction && action.payload.request) {
    action.payload.request.cookies = cookies
    next(action)
  } else {
    next(action)
  }
}
