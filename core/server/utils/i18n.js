'use strict'

/**
 * referenced ghost i18n.js, it's a simplified version
 * and I used js to store local translations instead of json
 */

const cnTranslations = require('../translations/cn')
const _ = require('lodash')

function addPaddingRight(str) {
  if(str) {
    if(escape(str.substr(-1)).indexOf("%u") !== 0) {
      str = str + ' '
    }
  }else{
    str = ''
  }

  return str
}


module.exports = function i18n(msgPath, value) {

  function getMatchingString(msgPath) {
    let matchingString = cnTranslations
    const path = msgPath.split('.')

    for (let i = 0; i < path.length; i++) {
      if(matchingString[path[i]]) {
        matchingString = matchingString[path[i]]
      }else{
        matchingString = null
        break
      }
    }

    return matchingString
  }

  let matchingString = getMatchingString(msgPath)
  let matchingValue = getMatchingString(`common.terms.${value}`)

  if (_.isNull(matchingString)) {
    console.error('Unable to find matching path [' + msgPath + '] in locale file.\n')
    matchingString = 'i18n error: path "' + msgPath + '" was not found.'
  } else {
    const placeholderIndex = matchingString.indexOf('{value}')

    if(placeholderIndex !== -1){
      let before = matchingString.substring(0, placeholderIndex)
      let after = matchingString.substr(placeholderIndex + 7)

      if(_.isNull(matchingValue)) {
        matchingValue = value
      }

      matchingValue = addPaddingRight(matchingValue)
      matchingString = before + matchingValue + after
    }
  }

  return matchingString
}
