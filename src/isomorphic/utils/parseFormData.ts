import _ from 'lodash'

// todo
export default function objectToUrlencoded(originalObj) {
  if (_.isEmpty(originalObj)) {
    return ''
  }

  let object = _.cloneDeep(originalObj)
  let encodedurl = ''

  for (let prop in object) {
    if (typeof object[prop] === 'object' && object[prop] !== null) {
      object[prop] = object[prop].toString()
    }

    encodedurl = `${encodedurl}${prop}=${object[prop]}&`
  }

  return encodedurl.substr(0, encodedurl.length - 1)
}
