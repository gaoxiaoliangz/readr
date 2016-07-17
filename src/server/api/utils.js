const _ = require('lodash')
const errors = require('../errors')
const i18n = require('../utils/i18n')


function getIdMatch(options) {
  return _.pick(options, (val, key) => {
    return key.indexOf('id') !== -1
  })
}

function handleNotFound(itemName) {
  return Promise.reject(new errors.NotFoundError(i18n('errors.api.general.notFound', itemName)))
}

/**
 * 查询结果过滤
 * 作为 model 返回结果数据数组方法的 iteratee 使用
 */

// for map
function excludeFields(fieldsToExclude) {
  return res => _.omit(res, fieldsToExclude)
}

function includeFields(fieldsToInclude) {
  if (fieldsToInclude.length === 0) {
    return res => res
  }
  return res => _.pick(res, fieldsToInclude)
}

// for filter
function limitResults(limit) {
  if (isNaN(limit) || limit === 0) {
    return () => true
  }
  return (res, index) => index < limit
}

module.exports = {
  getIdMatch,
  excludeFields,
  includeFields,
  limitResults,
  handleNotFound
}
