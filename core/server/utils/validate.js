'use strict'
const i18n = require('./i18n')
const _ = require('lodash')
const errors = require('../errors')
const validator = require('./validator')


function validate(permittedOptions) {
  return options => {
    options = _.pick(options, permittedOptions)

    if(_.isEmpty(options)) {
      return Promise.reject(new errors.BadRequestError('Empty auth info!'))
    }

    if(_.size(options) !== permittedOptions.length) {
      return Promise.reject(new errors.BadRequestError('Wrong auth input quantity!'))
    }

    for (let prop in options) {
      let validateResult = validator(options[prop], prop)

      if (validateResult.isValid === false) {
        return Promise.reject(new errors.ValidationError(validateResult.message, prop))
        break
      }
    }

    return options
  }
}

module.exports = validate
