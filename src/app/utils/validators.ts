import validator from 'validator'

export const required = value => (value ? undefined : '必填')
export const maxLength = max => value =>
  value && value.length > max ? `不能超过 ${max} 个字符` : undefined
export const minLength = min => value =>
  value && value.length < min ? `不能少于 ${min} 个字符` : undefined
export const isValidEmail = email => !validator.isEmail(email) ? '不是一个有效的邮箱！' : undefined
