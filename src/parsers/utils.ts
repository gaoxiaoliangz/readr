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
