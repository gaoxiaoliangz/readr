'use strict'

const _ = require('lodash')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const validator = require('../utils/validator')

const utils = {
  globalDefaultOptions: ['context'],
  noTrimTypes: ['password'],

  requireAdminPermissions(options) {
    const role = options.context.user ? options.context.user.role : 'visitor'

    if (role === 'admin') {
      return options
    }

    return Promise.reject(
      new errors.NoPermissionError(i18n('errors.api.auth.needAdminPermission'))
    )
  },

  requireUserPermissions(options) {
    const user = options.context.user ? options.context.user : null

    return user
      ? options
      : Promise.reject(new errors.NoPermissionError(i18n('errors.api.auth.loginRequired')))
  },

  validate(requiredOptions, additionalOptions) {
    if(typeof additionalOptions === 'undefined') {
      additionalOptions = []
    }

    return function() {
      let object = {}
      let options = {}

      if (arguments.length === 2) {
        object = arguments[0];
        options = _.clone(arguments[1]) || {};
      } else if (arguments.length === 1) {
        options = _.clone(arguments[0]) || {};
      }

      requiredOptions = requiredOptions.concat(utils.globalDefaultOptions)

      const isOptionLengthCorrect = (object, options, requiredOptions) => {
        let combined = Object.assign({}, object, options)

        combined = _.pick(combined, requiredOptions)

        if(_.size(combined) === requiredOptions.length) {
          return true
        }

        return false
      }

      const checkOptions = (options) => {
        if(!isOptionLengthCorrect(object, options, requiredOptions)) {
          return Promise.reject(new errors.BadRequestError(i18n('errors.validation.unmatchedOptionQuantity')))
        }

        let permittedOptions = requiredOptions.concat(additionalOptions)

        object =  utils.trimOptions(_.pick(object, permittedOptions))
        options = utils.trimOptions(_.pick(options, permittedOptions))

        const combinedOptions = Object.assign({}, options, object)

        if(_.isEmpty(combinedOptions)) {
          return Promise.reject(new errors.BadRequestError(i18n('errors.api.validation.inputEmpty')))
        }

        let validationErrors = utils.validateOptions(combinedOptions)

        if(validationErrors.length === 0) {
          return Promise.resolve(Object.assign({}, options, {data: object}))
        }

        return Promise.reject(new errors.ValidationError(validationErrors[0]))
      }

      return checkOptions(options)
    }
  },

  trimOptions(options) {
    const longStringTypes = validator.longStringTypes
    const stringTypes = validator.stringTypes

    // trim short string inputs
    // and we dont't trim password
    for (var prop in options) {
      if(longStringTypes.indexOf(prop) === -1 && stringTypes.indexOf(prop) !== -1 && utils.noTrimTypes.indexOf(prop) === -1) {
        options[prop] = options[prop].trim()
      }
    }

    return options
  },

  validateOptions(options) {
    const noValidation = ['data', 'context']
    let errors = []

    for (let prop in options) {
      if (noValidation.indexOf(prop) === -1) {
        let validateResult = validator.doValidate(options[prop], prop)

        if (validateResult !== true) {
          errors.push(validateResult)
          break
        }
      }
    }

    return errors
  }
}

module.exports = utils
