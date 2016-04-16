'use strict'

/**
 * referenced ghost i18n.js, it's a simplified version
 * and I used js to store local translations instead of json
 */

const cn = require('../translations/cn')
const _ = require('lodash')

module.exports = function i18n(msgPath, object) {

  // TODO
  // object translations

  let matchingString = cn
  const path = msgPath.split('.')


  for (let i = 0; i < path.length; i++) {
    if(matchingString[path[i]]) {
      matchingString = matchingString[path[i]]
    }else{
      matchingString = null
      break
    }
  }

  if (_.isNull(matchingString)) {
    console.error('Unable to find matching path [' + msgPath + '] in locale file.\n')
    matchingString = 'i18n error: path "' + msgPath + '" was not found.'
  } else {
    const placeholderIndex = matchingString.indexOf('{value}')

    if(placeholderIndex !== -1){
      let before = matchingString.substring(0, placeholderIndex)
      let after = matchingString.substr(placeholderIndex + 7)

      if(object) {
        if(escape(object).indexOf("%u") !== 0) {
          object = object + ' '
        }
      }else{
        object = ''
      }

      // TODO
      matchingString = before + object + after
    }
  }

  return matchingString
}
