'use strict'

const _ = require('lodash')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const validator = require('../utils/validator')

const utils = {
  globalDefaultOptions: ['context'],

  checkAdminPermissions(options) {
    let role = options.context.user?options.context.user.role:'visitor'

    if(role === 'admin') {
      return options
    } else {
      return Promise.reject(new errors.NoPermissionError(i18n('errors.api.auth.needAdminPermission')))
    }
  },

  checkUserPermissions(options) {
    let user = options.context.user?options.context.user:null

    if(user) {
      return options
    }

    return Promise.reject(new errors.NoPermissionError(i18n('errors.api.auth.loginRequired')))
  },

  validate(requiredOptions) {
    return function() {
      let object, options

      if (arguments.length === 2) {
        object = arguments[0];
        options = _.clone(arguments[1]) || {};
      } else if (arguments.length === 1) {
        options = _.clone(arguments[0]) || {};
      } else {
        options = {};
      }

      requiredOptions = requiredOptions.concat(utils.globalDefaultOptions)

      function checkOptions(options) {
        object =  _.pick(object, requiredOptions)
        options = _.pick(options, requiredOptions)

        const dataToCheck = Object.assign({}, options, object)

        if(_.isEmpty(dataToCheck)) {
          return Promise.reject(new errors.BadRequestError(i18n('errors.api.validation.inputEmpty')))
        }

        if(_.size(dataToCheck) !== requiredOptions.length) {
          return Promise.reject(new errors.BadRequestError(i18n('errors.validation.unmatchedOptionQuantity')))
        }

        let validationErrors = utils.validateOptions(dataToCheck)

        if(validationErrors.length === 0) {
          return Promise.resolve(Object.assign({}, options, {data: object}))
        }

        return Promise.reject(new errors.ValidationError(validationErrors[0]))
      }

      return checkOptions(options)
    }
  },

  validateOptions(options) {
    const noValidation = ['data', 'context']
    let errors = []

    for (let prop in options) {
      if (noValidation.indexOf(prop) === -1) {
        let validateResult = validator(options[prop], prop)

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
