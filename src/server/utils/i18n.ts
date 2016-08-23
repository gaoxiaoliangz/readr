/**
 * referenced ghost i18n.js, it's a simplified version
 * and I used js to store local translations instead of json
 */

import cnTranslations from '../translations/cn'
import _ from 'lodash'

function addPadding(str) {
  if (!str) {
    return ''
  }

  if (escape(str.substr(-1)).indexOf('%u') !== 0) {
    return ` ${str} `
  }

  return str
}

function getMatchingString(msgPath): any {
  let matchingString = cnTranslations
  const path = msgPath.split('.')

  for (let i = 0; i < path.length; i++) {
    if (matchingString[path[i]]) {
      matchingString = matchingString[path[i]]
    } else {
      matchingString = null
      break
    }
  }

  return matchingString
}

function addPunc(str, lang?) {
  // todo: lang
  return `${str}！`
}

export default function i18n(msgPath, value?) {
  let matchingString = getMatchingString(msgPath)

  if (_.isNull(matchingString)) {
    console.error('Unable to find matching path [' + msgPath + '] in locale file.\n')
    matchingString = 'i18n error: path "' + msgPath + '" was not found.'
  } else {
    const placeholderIndex = matchingString.indexOf('{value}')

    if (placeholderIndex !== -1) {
      const before = matchingString.substring(0, placeholderIndex)
      const after = matchingString.substr(placeholderIndex + 7)
      let matchingValue = ''

      if (typeof value !== 'undefined') {
        matchingValue = getMatchingString(`common.terms.${value}`)
        if (_.isNull(matchingValue)) {
          matchingValue = value
        }
        matchingValue = addPadding(matchingValue)
      }

      matchingString = addPunc(before + matchingValue + after)
    } else {
      matchingString = addPunc(matchingString)
    }
  }

  return matchingString.trim()
}
