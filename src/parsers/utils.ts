import _ from 'lodash'

export function flattenArray(arrayOfNestedObj, childrenName = 'children') {
  const list = []

  const push = infoList => {
    infoList.forEach(item => {
      list.push(_.omit(item, childrenName))
      if (item[childrenName]) {
        push(item[childrenName])
      }
    })
  }

  push(arrayOfNestedObj)
  return list
}

interface ParseNestedObjectConfig {
  preFilter?: (node) => boolean
  postFilter?: (node) => boolean
  parser: (node, children?) => any
  childrenKey: string
}
const parseNestedObjectWrapper = (_rootObject: Object | Object[], config: ParseNestedObjectConfig) => {
  const { childrenKey, parser, preFilter, postFilter } = config

  const parseNestedObject = (rootObject: Object | Object[]): any[] => {
    const makeArray = () => {
      if (Array.isArray(rootObject) || _.isArrayLikeObject(rootObject) || _.isArrayLike(rootObject)) {
        return rootObject
      }
      return [rootObject]
    }

    return Array.prototype
      .filter.call(makeArray(), object => {
        if (preFilter) {
          return preFilter(object)
        }
        return true
      })
      .map(object => {
        if (object[childrenKey]) {
          return parser(object, parseNestedObject(object[childrenKey]))
        }
        return object
      })
      .filter(object => {
        if (postFilter) {
          return postFilter(object)
        }
        return true
      })
  }

  return parseNestedObject(_rootObject)
}

export const parseNestedObject = parseNestedObjectWrapper
