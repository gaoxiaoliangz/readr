import _ from 'lodash'
import md5 from '../../../vendor_modules/md5'

const SUCCESS = 'SUCCESS'

const isSuccessAction = action => {
  console.log(action)
  // return true
  // return _.last(action.type.split('/')) === SUCCESS
}

const cacheResponseAction = action => {
  console.log('cached')
}

export default store => next => action => {
  if (action.cacheKey) {
    console.log(md5('hehehe'))
    next({
      type: 'cache'
    })
    // return false
  }

  if (action.cacheKey && isSuccessAction(action)) {
    cacheResponseAction(action)
    next(action)
    return false
  }

  next(action)
}
