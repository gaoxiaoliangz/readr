const debug = require('debug')('readr:logActionTypes')

export default store => next => action => {
  // console.info(action.type)
  debug(action.type)
  next(action)
}
