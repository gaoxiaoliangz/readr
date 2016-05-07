'use strict'

const i18n = require('./i18n')
const errors = require('../errors')
const _ = require('lodash')

const validator = {
  numberTypes: ['pageSum', 'id', 'bookId', 'userId', 'percentage', 'pageNo'],
  stringifiedJSONTypes: ['bookInfo', 'books', 'tags'],
  stringTypes: ['email', 'password', 'login', 'username', 'role', 'name', 'fields'],
  longStringTypes: ['bookContent', 'description'],
  stringMaxLength: 60,

  getSupportedTypes() {
    return Array.prototype.concat(validator.numberTypes, validator.stringifiedJSONTypes, validator.stringTypes)
  },

  doValidate (input, type) {
    let isDefined = false
    let valid = false
    let message

    const numberTypes = validator.numberTypes
    const stringifiedJSONTypes = validator.stringifiedJSONTypes
    const stringTypes = validator.stringTypes
    const longStringTypes = validator.longStringTypes
    const arrayTypes = validator.arrayTypes

    function preCheck() {
      if(numberTypes.indexOf(type) !== -1) {
        isDefined = true

        if(isNaN(input)) {
          return i18n('errors.validation.invalidFormat', type)
        }
      }

      if(stringTypes.indexOf(type) !== -1) {
        isDefined = true

        if(typeof input !== 'string') {
          return i18n('errors.validation.invalidFormat', type)
        }
        if(input.length === 0) {
          return i18n('errors.validation.inputEmpty', type)
        }
        if(input.length > validator.stringMaxLength) {
          return i18n('errors.validation.maxLength', type)
        }
      }

      if(longStringTypes.indexOf(type) !== -1) {
        isDefined = true

        if(typeof input !== 'string') {
          return i18n('errors.validation.invalidFormat', type)
        }
        if(input.length === 0) {
          return i18n('errors.validation.inputEmpty', type)
        }
      }

      if(stringifiedJSONTypes.indexOf(type) !== -1) {
        isDefined = true

        try {
          JSON.parse(input)
        } catch (e) {
          return i18n('errors.validation.invalidJson')
        }
      }

      return false
    }

    const switchTypes = {
      email() {
        let emailReg = /^([a-zA-Z0-9_-_.])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/i

        if(!emailReg.test(input)){
          return i18n('errors.validation.invalidFormat', type)
        }
      },
      id() {
        if(input.length !== 8) {
          return i18n('errors.validation.invalidFormat', type)
        }
      },
      percentage() {
        if(input >= 1) {
          return i18n('errors.validation.invalidFormat', type)
        }
      },
      username() {
        if(input.length < 5) {
          return i18n('errors.validation.minLength', type)
        }
        if(!input[0].match(/[a-zA-Z]/)) {
          return i18n('errors.validation.username.onlyStartWithLetters')
        }
        if(!input.match(/^([a-zA-Z0-9_-_.])+$/i)) {
          return i18n('errors.validation.username.allowedChars')
        }
      },
      password() {
        if(input.length < 6) {
          return i18n('errors.validation.minLength', type)
        }
        if(!isNaN(input)) {
          return i18n('errors.validation.password.pureNumber')
        }
      }
    }

    let preCheckResult = preCheck()

    if(preCheckResult) {
      message = preCheckResult
    }else{
      let typeCheckResult = switchTypes[type]?switchTypes[type]():null

      if(typeCheckResult) {
        message = typeCheckResult
      }else{
        if(isDefined) {
          valid = true
        }else{
          message = i18n('errors.validation.inputUnsupported')
        }
      }
    }

    return valid?true:message
  }
}

module.exports = validator
