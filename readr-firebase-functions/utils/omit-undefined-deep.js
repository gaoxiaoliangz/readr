const _ = require('lodash')

const omitUndefinedDeep = (input, config = {}) => {
  const { replaceUndefinedWith = null } = config
  const inputType = Array.isArray(input)
    ? 'array'
    : typeof input
  switch (inputType) {
    case 'object': {
      const output = {}
      Object.keys(input).map(key => {
        const value = input[key]
        const type = Array.isArray(value)
          ? 'array'
          : typeof value
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
