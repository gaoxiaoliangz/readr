import _ from 'lodash'

export default function objectToUrlencoded(originalObj) {
  let object = _.cloneDeep(originalObj)
  let encodedurl = ''

  for (let prop in object) {
    if (typeof object[prop] === 'object') {
      object[prop] = object[prop].toString()
    }

    encodedurl = `${encodedurl}${prop}=${object[prop]}&`
  }

  return encodedurl.substr(0, encodedurl.length - 1)
}