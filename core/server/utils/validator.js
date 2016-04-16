'use strict'

const i18n = require('./i18n')
const errors = require('../errors')
const _ = require('lodash')

function validator (input, type) {
  let isDefined = false
  let numberTypes = ['pageSum', 'id', 'bookId', 'userId', 'percentage', 'pageNo']
  let stringifiedJSONTypes = ['doubanBook']
  let stringTypes = ['email', 'password', 'login', 'username', 'role']

  if(numberTypes.indexOf(type) !== -1) {
    isDefined = true

    if(isNaN(parseInt(input))) {
      return i18n('errors.validation.invalidFormat', type)
    }
  }

  if(stringTypes.indexOf(type) !== -1) {
    isDefined = true

    if(typeof input !== 'string') {
      // return i18n('errors.validation.invalidFormat', { from: type, to: 'common.types'})
      return i18n('errors.validation.invalidFormat')
    }
    if(input.length === 0) {
      return i18n('errors.validation.inputEmpty', type)
    }
    if(type === 'email') {
      let emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/

      if(!emailReg.test(input)){
        return i18n('errors.validation.emailInvalid')
      }
    }
    if(type === 'password') {
      if(input.length <= 6) {
        return i18n('errors.validation.passwordLength')
      }
    }
  }

  if(isDefined) {
    return true
  }else{
    return i18n('errors.validation.unsupportedInputFound')
  }









  // while (true) {
  //   // doubanBook should be object
  //   if(type !== 'doubanBook') {
  //     if(typeof input === 'undefined') {
  //       isValid = false
  //       message = i18n('errors.validation.inputUndefined')
  //       break
  //     }
  //     if(input === '') {
  //       isValid = false
  //       message = i18n('errors.validation.inputEmpty')
  //       break
  //     }
  //     if(typeof input !== 'string'){
  //       isValid = false
  //       message = i18n('errors.validation.inputTypeInvalid')
  //       break
  //     }
  //     if(typeof input.length > 20){
  //       isValid = false
  //       message = i18n('errors.validation.inputTooLong')
  //       break
  //     }
  //   }
  //
  //   const switchTypes = {
  //     email() {
  //       if(input.length < 6) {
  //         message = i18n('errors.validation.emailInvalid')
  //         isValid = false
  //       }
  //     },
  //     bookContent() {
  //       if(input.length <1) {
  //         message = i18n('errors.validation.invalidFormat')
  //         isValid = false
  //       }
  //     },
  //     doubanBook() {
  //       if(typeof input === 'undefined') {
  //         message = i18n('errors.validation.invalidFormat')
  //         isValid = false
  //       }
  //     },
  //     id() {
  //       if(input.length !== 8) {
  //         message = i18n('errors.validation.invalidFormat')
  //         isValid = false
  //       }
  //     },
  //     login() {
  //       if(input.length < 5) {
  //         message = i18n('errors.validation.invalidFormat')
  //         isValid = false
  //       }
  //     },
  //     username() {
  //       if(input.length < 5) {
  //         message = i18n('errors.validation.invalidFormat')
  //         isValid = false
  //       }
  //     },
  //     password() {
  //       if(input.length < 6) {
  //         message = i18n('errors.validation.passwordLength')
  //         isValid = false
  //       }
  //     },
  //     default() {
  //       message = i18n('errors.validation.unsupportedInputFound')
  //       isValid = false
  //     }
  //   }
  //   switchTypes[type]?switchTypes[type]():switchTypes.default()
  //
  //   break
  // }
  //
  // if(!isValid) {
  //   result.message = message
  // }
  // result.isValid = isValid
  //
  // return result
}

module.exports = validator
