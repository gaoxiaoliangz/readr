import _ from 'lodash'

/**
 * add properties to both object and typing
 * @param originalObj 
 * @param objToMerge 
 */
const modifyObject = <T1, T2>(originalObj: T1, objToMerge: T2) => {
  _.forEach(objToMerge, (val, key) => {
    originalObj[key] = val
  })
  return originalObj as T1 & T2
}

export default modifyObject
