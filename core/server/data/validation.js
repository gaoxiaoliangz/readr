'use strict'

const i18n = require('../utils/i18n')
const validator = require('validator')
// const errors = require('../errors')
// const _ = require('lodash')
const Promise = require('bluebird')
let Validation

Validation = {
  mark: {
    optional: 'optional',
  },

  // pipeline for validators
  // pipeline: function pipeline(tasks, ...args) {
  pipeline: function pipeline(tasks /* initial args */) {
    const args = Array.prototype.slice.call(arguments, 1)
    if (typeof tasks === 'function') {
      tasks = [tasks]
    }
    const errors = tasks
      .filter(task => (typeof task === 'function'))
      .map(task => task.apply(null, args))
      .filter(res => (res !== true))
    // 如果有错误只返回第一个
    return (errors.length === 0 ? true : errors[0])
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
      const res = validator.isEmail(input)
      return (res ? true : i18n('errors.validation.invalidFormat', 'Email'))
    },

    // todo
    id: function id(input) {
      if (input.length === 8) {
        return true
      }

      return i18n('errors.validation.invalidFormat', 'id')
    },

    string: function string(input) {
      if (typeof input === 'string') {
        return true
      }
      // todo
      return false
    },

    any: function any(input) {
      if (typeof input !== 'undefined') {
        return true
      }
      // todo
      return false
    },
  },

  presets: {
    id: [],
    username: [],
    password: [],
  },

  exec: function exec(data, schema) {
    if (!Validation.preCheck.validateSchema(schema)) {
      return [i18n('errors.validation.invalidFormat', 'schema')]
    }
    if (!Validation.preCheck.hasNoUnsupportedInput(data, schema)) {
      return [i18n('errors.validation.invalidFormat', 'data')]
    }
    if (!Validation.preCheck.hasAllNeededInput(data, schema)) {
      return [i18n('errors.validation.invalidFormat', 'data')]
    }

    const errors = Object.keys(data)
      .map(key => {
        return Validation.pipeline(schema[key], data[key])
      })
      .filter(res => (res !== true))

    return (errors.length === 0 ? true : errors)
  },

  exec2: function execPromise(schema) {
    return data => {
      const result = Validation.exec(data, schema)

      if (result === true) {
        return data
      }

      return Promise.reject(result)
    }
  },
}

module.exports = Validation
