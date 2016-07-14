const errors = require('../errors')
const i18n = require('../utils/i18n')
const Promise = require('bluebird')
const _ = require('lodash')


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
  limitResults
}
