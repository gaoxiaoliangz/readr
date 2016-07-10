const errors = require('../errors')
const i18n = require('../utils/i18n')
const Promise = require('bluebird')
const _ = require('lodash')
const apiMethods = require('./methods')


// tasks 可以是返回 Promise 的 fn
// 也可以是 Promise
function pipeline(tasks) {
  return Promise.reduce(tasks, (result, task) => {
    if (typeof task === 'function') {
      return task.call(this)
    }
    // 如果 task 是 Promise blue bird 貌似会自动把 promise resolve 出来，是 reject 直接就终止执行
    // 所以 写 task#then 会出错
    return task
  })
}

function validate(data, isEditing) {
  const suppliedFields = Object.keys(data)
  const allFields = Object.keys(this.schema.fields)
  const requiredFields = allFields.filter(key => Boolean(this.schema.fields[key].required))
  const unsupportedFields = suppliedFields.filter(key => allFields.indexOf(key) === -1)
  const missedFields = requiredFields.filter(key => suppliedFields.indexOf(key) === -1)

  if (unsupportedFields.length > 0) {
    return Promise.reject(new errors.BadRequestError(i18n('errors.validation.preCheck.unsupportedInput', unsupportedFields[0])))
  }

  if (missedFields.length > 0 && !isEditing) {
    return Promise.reject(new errors.BadRequestError(i18n('errors.validation.preCheck.missRequiredFields', missedFields[0])))
  }

  // 验证 fields，因为每个 field 可能有不止一个 validator
  const validateField = (key, val, validators) => {
    return pipeline(validators.map(validation => {
      if (validation[0](val)) {
        return Promise.resolve(true)
      }
      return Promise.reject(new errors.BadRequestError(validation[1]))
    }))
  }

  // 所有 fields 验证一遍
  return pipeline(Object.keys(data).map(key => {
    const validators = this.schema.fields[key].validators
    if (validators) {
      return validateField(key, data[key], validators)
    }
    // 跳过未定义 validation 的 filed
    return Promise.resolve(true)
  }))
}



function getIdMatch(options) {
  if (options.id) {
    return { _id: options.id }
  }

  const match = {}
  _.forEach(options, (val, key) => {
    if (key.indexOf('id')) {
      match[key] = val
    }
  })

  return match
}

function excludeFields(fieldsToExclude) {
  return res => _.omit(res, fieldsToExclude)
}

function includeFields(fieldsToInclude) {
  if (fieldsToInclude.length === 0) {
    return res => res
  }
  return res => _.pick(res, fieldsToInclude)
}

function limitResults(limit) {
  if (isNaN(limit) || limit === 0) {
    return () => true
  }
  return (res, index) => index < limit
}

function mapApiMethods(methodConfig) {
  return methodName => {
    switch (methodName) {
      case 'find':
        return apiMethods.find

      case 'edit':
        return apiMethods.edit

      case 'add':
        return apiMethods.add

      case 'browse':
        return apiMethods.browse

      case 'delete':
        return apiMethods.delete

      default:
        return new Error('API method not defined!')
    }
  }
}




module.exports = {
  pipeline,
  validate,
  getIdMatch,
  excludeFields,
  includeFields,
  limitResults,
  mapApiMethods
}
