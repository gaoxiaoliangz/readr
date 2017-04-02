import _ from 'lodash'
const debug = require('debug')('readr:utils2')

interface ParseNestedObjectConfig {
  // children must be returned from parser
  // or it may not work as expected
  parser?: (node, children) => any
  finalParser?: (node, path) => any

  childrenKey: string
}

export const parseNestedObjectWithoutFilter = (_rootObject: Object | Object[], config: ParseNestedObjectConfig) => {
  const { childrenKey, parser, finalParser } = config
  let indices = []
  let level = -1

  const parseNestedObject = (rootObject: Object | Object[]): any[] => {
    const makeArray = () => {
      if (Array.isArray(rootObject) || _.isArrayLikeObject(rootObject) || _.isArrayLike(rootObject)) {
        return rootObject
      }
      return [rootObject]
    }

    const rootArray = makeArray()
    const lastIndex = rootArray.length - 1

    level++
    indices.push({ lastIndex, index: 0 })

    return Array.prototype
      .map.call(rootArray, (object, index) => {
        indices[level].index = index

        if (object[childrenKey]) {
          const children = parseNestedObject(object[childrenKey])
          if (parser) {
            return parser(object, children)
          }
          return {
            ...object,
            ...{
              [childrenKey]: children
            }
          }
        }
        const path = indices.map(i => {
          return i.index
        })

        if (index === lastIndex) {
          debug('recalculate level')
          let minus = 0
          const removeLastIfMatch = (arr) => {
            const last = _.last(arr) as any
            if (!last) {
              return arr
            }
            if ((last.index === last.lastIndex) && arr.length !== 0) {
              minus++
              const newArr = arr.slice(0, arr.length - 1)
              return removeLastIfMatch(newArr)
            }
            return arr
          }
          indices = removeLastIfMatch(indices)
          level = level - minus
        }

        if (finalParser) {
          return finalParser(object, path)
        }
        return object
      })
  }

  return parseNestedObject(_rootObject)
}
