'use strict'
const i18n = require('../utils/i18n')
const _ = require('lodash')
const errors = require('../errors')
const validator = require('../utils/validator')

const utils = {
  globalDefaultOptions: ['context'],
  dataDefaultOptions: ['data'],

  checkAdminPermissions(options) {
    let role = options.context.user?options.context.user.role:'visitor'

    if(role === 'admin') {
      return options
    } else {
      return Promise.reject(new Error('Access denied!'))
    }
  },

  checkUserPermissions(options) {
    let user = options.context.user?options.context.user:null

    if(user) {
      return options
    }

    return Promise.reject(new Error('Login is required'))
  },

  validate(permittedOptions) {
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

      permittedOptions = permittedOptions.concat(utils.globalDefaultOptions)

      if(object) {
        permittedOptions = permittedOptions.concat(utils.dataDefaultOptions)
      }

      function checkOptions(options) {
        options = _.pick(options, permittedOptions)

        if(_.isEmpty(options)) {
          return Promise.reject(new errors.BadRequestError('Empty options'))
        }

        if(_.size(options) !== permittedOptions.length) {
          return Promise.reject(new errors.BadRequestError('Wrong option quantity!'))
        }

        let validationErrors = utils.validateOptions(options)

        if(validationErrors.length === 0) {
          return Promise.resolve(options)
        }

        return Promise.reject(new errors.ValidationError(validationErrors[0]))
      }

      if(object) {
        options.data = utils.checkObject(object)
        return checkOptions(options)
      }

      return checkOptions(options)
    }
  },

  checkObject(object) {
    // TODO
    console.log('objects are checked');
    return object
  },

  validateOptions(options) {
    const noValidation = ['data', 'context']
    let errors = []

    for (let prop in options) {
      if (noValidation.indexOf(prop) === -1) {
        let validateResult = validator(options[prop], prop)

        if (validateResult.isValid === false) {
          // return Promise.reject(new errors.ValidationError(validateResult.message, prop))
          errors.push(prop+': '+validateResult.message)
          break
        }
      }
    }

    return errors
  }

}

module.exports = utils
