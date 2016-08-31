import _ from 'lodash'
import errors from '../../errors'
import i18n from '../../utils/i18n'
import parseEntityResults, { includeFields, excludeFields } from './parse-entity-results'

function getIdMatch(options) {
  return _.pick(options, (val, key) => {
    return key.indexOf('id') !== -1
  })
}

function handleNotFound(itemName) {
  return Promise.reject(new errors.NotFoundError(i18n('errors.api.general.notFound', itemName)))
}

export default {
  getIdMatch,
  handleNotFound,
  parseEntityResults,
  includeFields,
  excludeFields
}
