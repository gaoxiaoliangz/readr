'use strict'

const i18n = require('./i18n')
const errors = require('../errors')
const _ = require('lodash')

function validator (input, type) {
  let isValid = true
  let message = ''
  let result = {}

  while (true) {
    // doubanBook should be object
    if(type !== 'doubanBook') {
      if(typeof input === 'undefined') {
        isValid = false
        message = i18n('errors.validation.inputUndefined')
        break
      }
      if(input === '') {
        isValid = false
        message = i18n('errors.validation.inputEmpty')
        break
      }
      if(typeof input !== 'string'){
        isValid = false
        message = i18n('errors.validation.inputTypeInvalid')
        break
      }
      if(typeof input.length > 20){
        isValid = false
        message = i18n('errors.validation.inputTooLong')
        break
      }
    }

    const switchTypes = {
      email() {
        if(input.length < 6) {
          message = i18n('errors.validation.emailInvalid')
          isValid = false
        }
      },
      bookContent() {
        if(input.length <1) {
          message = i18n('errors.validation.invalidFormat')
          isValid = false
        }
      },
      doubanBook() {
        if(typeof input === 'undefined') {
          message = i18n('errors.validation.invalidFormat')
          isValid = false
        }
      },
      id() {
        if(input.length !== 8) {
          message = i18n('errors.validation.invalidFormat')
          isValid = false
        }
      },
      login() {
        if(input.length < 5) {
          message = i18n('errors.validation.invalidFormat')
          isValid = false
        }
      },
      password() {
        if(input.length < 6) {
          message = i18n('errors.validation.passwordLength')
          isValid = false
        }
      },
      default() {
        message = i18n('errors.validation.unsupportedInputFound')
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
