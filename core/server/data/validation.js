'use strict'

const i18n = require('../utils/i18n')
const errors = require('../errors')
const _ = require('lodash')


const flags = {
  isOptional: 'isOptional',
  isRequired: 'isRequired',
  skip: 'skip'
}

const validators = {
  email: function(input) {
    let emailReg = /^([a-zA-Z0-9_-_.])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/i

    if(!emailReg.test(input)){
      console.log('678');
      return i18n('errors.validation.invalidFormat', 'Email')
    }

    return true
  },
  // todo
  id: function(input) {
    if(input.length === 8) {
      return true
    }
    // todo
    return 'length'
  },
  string: function(input) {
    if(typeof input === 'string') {
      return true
    }
    // todo
    return false
  },
  any: function (input) {
    if(typeof input !== 'undefined') {
      return true
    }
    // todo
    return false
  }
}

const combined = {
  // todo
}

const Validation = {
  validators: validators,
  flags: flags,

  exec: function (data, scheme) {
    let allErrors = []

    // validator can be a single function or an array
    // this makes sure validators are all arrays
    const makeValidatorArray = (prop, scheme) => {
      let validators = scheme[prop]

      if(!Array.isArray(validators)) {
        validators = [validators]
      }

      return validators
    }
    
    // handle optional inputs
    for(let prop in scheme) {
      let validators = makeValidatorArray(prop, scheme)

      if(validators.indexOf(flags.isOptional) === -1) {
        if(typeof data[prop] === 'undefined') {
          allErrors.push(new Error(`${prop} not found`))
        }
      }
    }

    for(let prop in data) {
      let input = data[prop]
      let validators = scheme[prop]

      if(typeof validators === 'undefined') {
        // todo: 发现不支持的参数
        allErrors.push(new Error(`${prop} not permitted`))
        continue
      }

      validators = makeValidatorArray(prop, scheme)

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