'use strict'

/**
 * referenced ghost i18n.js, it's a simplified version
 * and I used js to store local translations instead of json
 */

const cn = require('../translations/cn')
const _ = require('lodash')

module.exports = function i18n(msgPath) {
  let matchingString = cn
  const path = msgPath.split('.')

  path.forEach(function (key) {
      matchingString = matchingString[key] || null
  })

  if (_.isNull(matchingString)) {
      console.error('Unable to find matching path [' + msgPath + '] in locale file.\n')
      matchingString = 'i18n error: path "' + msgPath + '" was not found.'
  }

  return matchingString
}
