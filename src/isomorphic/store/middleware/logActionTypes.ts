export default store => next => action => {
  console.info(action.type)
  // if (action.type === '@@router/LOCATION_CHANGE') {
  //   console.info(action.payload)
  // }

  next(action)
}
