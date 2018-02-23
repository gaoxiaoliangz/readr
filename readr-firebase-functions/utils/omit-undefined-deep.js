const _ = require('lodash')

const getType = val => {
  if (val === null) {
    return 'null'
  }
  if (val instanceof RegExp) {
    return 'regExp'
  }
  if (typeof val === 'string') {
    return 'string'
  }
  if (Array.isArray(val)) {
    return 'array'
  }
  if (typeof val === 'function') {
    return 'function'
  }
  return typeof val
}

const omitUndefinedDeep = (input, config = {}) => {
  const { replaceUndefinedWith = null } = config
  const inputType = getType(input)

  switch (inputType) {
    case 'object': {
      const output = {}
      Object.keys(input).forEach(key => {
        const value = input[key]
        const type = getType(value)
        switch (type) {
          case 'undefined':
            if (!_.isUndefined(replaceUndefinedWith)) {
              output[key] = replaceUndefinedWith
            }
            break

          case 'function':
            break

          case 'object':
            output[key] = omitUndefinedDeep(value, config)
            break

          case 'array':
            output[key] = value.map(v => omitUndefinedDeep(v, config))
            break

          default:
            output[key] = value
            break
        }
      })
      return output
    }
    case 'array':
      return input.map(v => omitUndefinedDeep(v, config))
    default:
      return input
  }
}

module.exports = omitUndefinedDeep
