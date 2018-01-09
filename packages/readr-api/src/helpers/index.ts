import errors from '../errors'
import i18n from '../utils/i18n'
import computeHash from './computeHash'

export function notFoundError(itemName?) {
  return new errors.NotFoundError(i18n('errors.api.general.notFound', itemName))
}

export function notFoundIn(collectionName?) {
  return new errors.NotFoundError(i18n('errors.api.general.notFoundIn', collectionName))
}

export { computeHash }
