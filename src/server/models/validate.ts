import utils from '../utils'
const errors: any = require('../errors')

const reduceTasks = utils.reduceTasks
const i18n = utils.i18n

export default function validate(data, schema, isEditing?): any {
  if (typeof data === 'undefined') {
    return Promise.reject(new errors.BadRequestError(i18n('errors.validation.preCheck.emptyObject')))
  }

  const suppliedFields = Object.keys(data)
  const allFields = Object.keys(schema.fields)
  const requiredFields = allFields.filter(key => Boolean(schema.fields[key].required))
  const unsupportedFields = suppliedFields.filter(key => allFields.indexOf(key) === -1)
  const missedFields = requiredFields.filter(key => suppliedFields.indexOf(key) === -1)

  if (unsupportedFields.length > 0) {
    return Promise.reject(new errors.BadRequestError(i18n('errors.validation.preCheck.unsupportedInput', unsupportedFields[0])))
  }

  if (missedFields.length > 0 && !isEditing) {
    return Promise.reject(new errors.BadRequestError(i18n('errors.validation.preCheck.missRequiredFields', missedFields[0])))
  }

  // 验证 fields，因为每个 field 可能有不止一个 validator
  const validateField = (key, val, validators: any[]) => {
    return reduceTasks(validators.map(validation => {
      if (validation[0](val)) {
        return Promise.resolve(true)
      }
      return Promise.reject(new errors.BadRequestError(validation[1]))
    }))
  }

  // 所有 fields 验证一遍
  return reduceTasks(Object.keys(data).map(key => {
    const validators = schema.fields[key].validators
    if (validators) {
      return validateField(key, data[key], validators)
    }
    // 跳过未定义 validation 的 filed
    return Promise.resolve(true)
  }))
}
