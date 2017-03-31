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
  parser: (node, children) => any
  childrenKey: string
}
const parseNestedObjectWrapper = (_rootObject: Object | Object[], config: ParseNestedObjectConfig) => {
  const { childrenKey, parser, preFilter, postFilter } = config

  const parseNestedObject = (rootObject: Object | Object[]): any[] => {
    const makeFakeRootObject = () => {
      if (Array.isArray(rootObject) || _.isArrayLikeObject(rootObject) || _.isArrayLike(rootObject)) {
        return {
          [childrenKey]: rootObject
        }
      }
      return rootObject
    }

    return Array.prototype
      .filter.call(makeFakeRootObject()[childrenKey], object => {
        if (preFilter) {
          return preFilter(object)
        }
        return true
      })
      .map(object => {
        return parser(object, parseNestedObject(object))
      })
      .filter(object => {
        if (postFilter) {
          return postFilter(object)
        }
        return true
      })
  }

  // no matter what is passed it always wrap with array
  // I have to unwrap it here
  return _.first(parseNestedObject(_rootObject))
}

export const parseNestedObject = parseNestedObjectWrapper
