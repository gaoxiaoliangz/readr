'use strict'
const i18n = require('./i18n')


function validator (input, type) {
  let isValid = true
  let message = ''
  let result = {}

  while (true) {
    if(typeof input === 'undefined') {
      isValid = false
      message = 'Input is not defined!'
      break
    }
    if(input === '') {
      isValid = false
      message = 'Input cannot be empty!'
      break
    }
    if(typeof input !== 'string' && typeof input !== 'number'){
      isValid = false
      message = 'Input must be string or number!'
      break
    }
    if(typeof input.length > 20){
      isValid = false
      message = 'Input is too long!'
      break
    }

    const switchTypes = {
      email() {
        if(input.length < 6) {
          message = 'Wrong email format!'
          isValid = false
        }
      },
      id() {
        if(input.length !== 8) {
          message = 'Wrong id format!'
          isValid = false
        }
      },
      login() {
        if(input.length < 5) {
          message = 'Wrong login format!'
          isValid = false
        }
      },
      password() {
        if(input.length < 6) {
          message = 'Passwords must be at least 6 charactors long!'
          isValid = false
        }
      },
      default() {
        message = 'Undefined type found!'
        isValid = false
      }
    }
    switchTypes[type]?switchTypes[type]():switchTypes.default()

    break
  }

  if(!isValid) {
    result.message = message
  }
  result.isValid = isValid

  return result
}

module.exports = validator
