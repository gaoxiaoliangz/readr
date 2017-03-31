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
export const parseNestedObject = (rootObject, config: ParseNestedObjectConfig) => {
  const { childrenKey, parser, preFilter, postFilter } = config

  return Array.prototype
    .filter.call(rootObject[childrenKey], object => {
      if (preFilter) {
        return preFilter(object)
      }
      return true
    })
    .map(object => {
      return parser(object, parseNestedObject(object, config))
    })
    .filter(object => {
      if (postFilter) {
        return postFilter(object)
      }
      return true
    })
}
