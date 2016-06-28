const validator = require('validator')

const additionalValidators = {
  lengthMin(len) {
    return input => {
      return input.length >= len
    }
  },

  lengthMax(len) {
    return input => {
      return input.length <= len
    }
  }
}

module.exports = Object.assign({}, validator, additionalValidators)
