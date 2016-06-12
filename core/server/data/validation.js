'use strict'

const i18n = require('../utils/i18n')
// const errors = require('../errors')
// const _ = require('lodash')


const flags = {
  isOptional: 'isOptional',
  isRequired: 'isRequired',
  skip: 'skip',
}

const validators = {
  email(input) {
    const emailReg = /^([a-zA-Z0-9_-_.])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/i

    if (!emailReg.test(input)) {
      return i18n('errors.validation.invalidFormat', 'Email')
    }

    return true
  },
  // todo
  id(input) {
    if (input.length === 8) {
      return true
    }
    // todo
    return 'length'
  },
  string(input) {
    if (typeof input === 'string') {
      return true
    }
    // todo
    return false
  },
  any(input) {
    if (typeof input !== 'undefined') {
      return true
    }
    // todo
    return false
  },
}

// const combined = {
//   // todo
// }


function exec(data, scheme) {
  let allErrors = []

  // validator can be a single function or an array
  // this makes sure validators are all arrays
  const makeValidatorArray = (prop, scheme2) => {
    let validators2 = scheme2[prop]

    if (!Array.isArray(validators2)) {
      validators2 = [validators2]
    }

    return validators2
  }

  // handle optional inputs
  for(let prop in scheme) {
    const validators2 = makeValidatorArray(prop, scheme)

    if (validators2.indexOf(flags.isOptional) === -1) {
      if (typeof data[prop] === 'undefined') {
        allErrors.push(new Error(`${prop} not found`))
      }
    }
  }

  for(let prop in data) {
    const input = data[prop]
    let validators2 = scheme[prop]

    if (typeof validators2 === 'undefined') {
      // todo: 发现不支持的参数
      // allErrors.push(new Error(`${prop} not permitted`))
      allErrors.push(`${prop} not permitted`)
      continue
    }

    validators2 = makeValidatorArray(prop, scheme)

    const errors2 = validators2
      .map(fn => {
        return fn(input)
      })
      .filter(res => {
        if (res !== true) {
          return true
        }

        return false
      })

    if (errors2.length !== 0) {
      allErrors = allErrors.concat(errors2)
    }
  }

  return (allErrors.length === 0 ? true : allErrors)
}

function exec2(scheme) {
  return data => {
    const result = exec(data, scheme)

    if (result === true) {
      return data
    }

    return Promise.reject(result)
  }
}

const Validation = {
  validators,
  flags,
  exec,
  exec2,
}

module.exports = Validation
