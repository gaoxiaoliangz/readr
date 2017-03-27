import _ from 'lodash'

export default function parseUrlencoded(queryObj, encodeString = true) {
  if (!queryObj || _.isEmpty(queryObj)) {
    return ''
  }

  return _
    .map(queryObj, (value, key) => {
      if (typeof value === 'object' && value !== null) {
        return JSON.stringify(value)
      }

      if (encodeString) {
        return `${key}=${encodeURIComponent(value as string)}`
      }

      return `${key}=${value}`
    })
    .join('&')
}
