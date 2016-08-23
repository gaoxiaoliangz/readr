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

export default Object.assign({}, validator, additionalValidators)
