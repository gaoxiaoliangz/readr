// import 'isomorphic-fetch'
import 'whatwg-fetch'

export default store => next => action => {
  const CALL_API = action[CALL_API]
  const { types, endpoint } = CALL_API
  const [ requestType, successType, failureType ] = types

  next({type: requestType})
  
}
