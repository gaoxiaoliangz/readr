export default store => next => action => {
  console.info(action.type)
  next(action)
}
