'use strict'

const Validator = require('validator')
const Errors = require('../errors')
const Promise = require('bluebird')
const i18n = require('../utils/i18n')
// const _ = require('lodash')
let Validation

Validation = {
  mark: {
    optional: 'optional',
  },

  // pipeline for validators
  pipeline: function pipeline(tasks, input, key) {
    const tasks2 = typeof tasks === 'function' ? [tasks] : tasks
    const errors = tasks2
      .filter(task => (typeof task === 'function'))
      .map(task => task(input))
      .filter(res => (res !== true))

    // 如果有错误只返回第一个
    return (
      errors.length === 0
        ? true
        : {
          type: errors[0],
          for: key,
        }
    )
  },

  preCheck: {
    validateSchema: function validateSchema(schema) {
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
            if (v === Validation.mark.optional) {
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
    },

    hasNoUnsupportedInput: function hasNoUnsupportedInput(data, schema) {
      return Object.keys(data).every(key => {
        if (typeof schema[key] !== 'undefined') {
          return true
        }
        return false
      })
    },

    hasAllNeededInput: function hasAllNeededInput(data, schema) {
      return Object.keys(schema).every(key => {
        // make validators array
        const validators = Array.isArray(schema[key])
          ? schema[key]
          : [schema[key]]

        if (validators.indexOf(Validation.mark.optional) !== -1
          || typeof data[key] !== 'undefined') {
          return true
        }
        return false
      })
    },
  },

  validator: {
    email: function email(input) {
      return Validation.makeValidator(
        Validator.isEmail,
        'errors.validation.invalidFormat'
      )(input)
    },

    lengthGreaterThan: function lengthGreaterThan(len) {
      return input => {
        return (input.length > len ? true : 'errors.validation.minLength')
      }
    },

    length: function length(len) {
      return input => {
        return (input.length === len ? true : 'errors.validation.length')
      }
    },

    id: function id(input) {
      return Validation.makeValidator(
        [
          Validation.validator.length(8),
          Validation.validator.string,
        ],
        'errors.validation.invalidFormat'
      )(input)
    },

    string: function string(input) {
      if (typeof input === 'string') {
        return true
      }

      return 'errors.validation.valueType.notString'
    },

    any: function any(input) {
      if (typeof input !== 'undefined') {
        return true
      }

      return 'errors.validation.valueType.undefined'
    },
  },

  makeValidator: function makeValidator(validators, errorMsg) {
    return input => {
      let errors = (typeof validators === 'function' ? [validators] : validators)
        .map(v => v(input))
        .filter(r => (r !== true))

      if (errors.length === 0) {
        return true
      }

      errors = errors.filter(err => {
        return (err !== false)
      })

      // 如果定义了 errorMsg 则优先使用 errorMsg
      if (typeof errorMsg !== 'undefined' || errors.length === 0) {
        return errorMsg
      }

      return (errors[0] !== false ? errors[0] : 'errors.validation.undefined')
    }
  },

  exec: function exec(data, schema) {
    if (!Validation.preCheck.validateSchema(schema)) {
      return [{ type: 'errors.validation.invalidFormat', for: 'schema' }]
    }
    if (!Validation.preCheck.hasNoUnsupportedInput(data, schema)) {
      return [{ type: 'errors.validation.invalidFormat', for: 'data' }]
    }
    if (!Validation.preCheck.hasAllNeededInput(data, schema)) {
      return [{ type: 'errors.validation.invalidFormat', for: 'data' }]
    }

    const errors = Object.keys(data)
      .map(key => {
        return Validation.pipeline(schema[key], data[key], key)
      })
      .filter(res => (res !== true))

    return (errors.length === 0 ? true : errors)
  },

  exec2: function execPromise(schema) {
    return data => {
      let result = Validation.exec(data, schema)

      if (result === true) {
        return data
      }

      result = result.map(r => new Errors.BadRequestError(i18n(r.type), r.type))
      // 和之前 api 兼容，一次输出一个错误
      return Promise.reject(result[0])
    }
  },
}

module.exports = Validation
