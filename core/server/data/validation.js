'use strict'

const i18n = require('../utils/i18n')
const validator = require('validator')
// const errors = require('../errors')
// const _ = require('lodash')


const mark = {
  optional: 'isOptional',
}

const types = {
  email(input) {
    // const emailReg = /^([a-zA-Z0-9_-_.])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/i

    // if (!emailReg.test(input)) {
    //   return i18n('errors.validation.invalidFormat', 'Email')
    // }

    // return true
    const res = validator.isEmail(input)
    console.log(res)
    
    return res
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

function schemaHasRightFormat(schema) {
  if (typeof schema !== 'object') {
    return false
  }

  return Object.keys(schema).every(key => {
    const validators = schema[key]

    if (typeof validators === 'function') {
      return true
    }

    if (Array.isArray(validators)) {
      return validators.every(v => {
        if (v === mark.optional) {
          return true
        }

        if (typeof v === 'function') {
          return true
        }

        return false
      })
    }

    return false
  })
}


function hasNoUnsupportedInput(data, schema) {
  return Object.keys(data).every(key => {
    if (typeof schema[key] !== 'undefined') {
      return true
    }
    return false
  })
}

function hasAllNeededInput(data, schema) {
  return Object.keys(schema).every(key => {
    // make validators array
    const validators = Array.isArray(schema[key])
      ? schema[key]
      : [schema[key]]

    if (validators.indexOf(mark.optional) !== -1 || typeof data[key] !== 'undefined') {
      return true
    }
    return false
  })
}

function exec(input, validators) {
  
}

function execAll(data, scheme) {
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
  for (const prop in scheme) {
    const validators2 = makeValidatorArray(prop, scheme)

    if (validators2.indexOf(mark.optional) === -1) {
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

function exeWithPromise(scheme) {
  return data => {
    const result = execAll(data, scheme)

    if (result === true) {
      return data
    }

    return Promise.reject(result)
  }
}

const Validation = {
  types,
  mark,
  execAll,
  exeWithPromise,
  hasNoUnsupportedInput,
  hasAllNeededInput,
  schemaHasRightFormat,
}

module.exports = Validation
