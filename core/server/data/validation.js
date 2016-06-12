'use strict';

// const FLAGS = {
// }

const validators = {
  email: function(input) {
    return true
  },
  id: function(input) {
    if(input.length === 8) {
      return true
    }

    return 'length'
  },
  string: function(input) {
    if(typeof input === 'string') {
      return true
    }

    return false
  },
  isRequired: function (input) {
    return (typeof input === 'undefined' ? false : true)
  },
  // isOptional
  isEmpty: function () {
    
  }
}

const combined = {
  
}

const Validation = {
  validators: validators,

  exec: function (data, scheme) {
    let allErrors = []

    for(let prop in data) {
      let input = data[prop]
      let validators = scheme[prop]

      if(typeof validators === 'undefined') {
        // todo: 参数为定义错误
        allErrors.push(new Error(`${prop} not defined`))
        continue
      }

      if(!Array.isArray(validators)) {
        validators = [validators]
      }

      let errors = validators
        .map(fn => {
          return fn(input)
        })
        .filter(res => {
          if(res !== true) {
            return true
          }
        })
      
      if(errors.length !== 0) {
        allErrors = allErrors.concat(errors)
      }
    }

    return (allErrors.length === 0 ? true : allErrors)
  }
}

module.exports = Validation