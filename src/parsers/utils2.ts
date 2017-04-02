import _ from 'lodash'
const debug = require('debug')('readr:utils2')

interface ParseNestedObjectConfig {
  // children must be returned from parser
  // or it may not work as expected
  parser?: (node, children) => any
  finalParser?: (node, path) => any

  childrenKey: string
}

const parseNestedObjectWrapper = (_rootObject: Object | Object[], config: ParseNestedObjectConfig) => {
  const { childrenKey, parser, finalParser } = config
  // let path = []
  let indices = []
  // let lastIndices = []
  // let loopCount = 0
  let level = -1
  // let levelHistory = []
  // let info
  // let previousIndex
  // const counts: GeneralObject = {}
  // const progress: GeneralObject = {}
  // let progress = []

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
    // indices.push(0)
    // progress.push({ lastIndex })
    // progress = progress.concat([{ lastIndex }])
    // levelHistory.push(level)

    return Array.prototype
      .map.call(rootArray, (object, index) => {
        indices[level].index = index

        console.log('level:', level)
        console.log('indices:', indices)
        console.log('object:', object)

        // progress[level].index = index
        // progress = progress.map((p, _index) => {
        //   if (_index === level) {
        //     return {
        //       ...p,
        //       ...{
        //         index
        //       }
        //     }
        //   }
        //   return p
        // })
        // indices.push(index)
        // path.push({indices, len: rootArray.length})
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

        // count level ends
        // const minus = _.reduce(progress, (a, b) => {
        //   const c = b.index === b.lastIndex ? 1 : 0
        //   return a + c
        // }, 0)

        // progress = progress.filter(p => {
        //   return p.index !== p.lastIndex
        // })


        // levelHistory.push(level)
        // const _level = level
        // level -= minus
        // if (level === 0) {
        //   levelHistory = []
        // }
        const path = indices.map(i => {
          return i.index
        })

        if (index === lastIndex) {
          debug('recalculate level')


          let minus = 0

          // const removeLast = (arr) => {
          //   return arr.slice(0, arr.length - 2)
          // }

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
          // indices = indices.filter((v, _index) => {
          //   if (v.index === v.lastIndex) {
          //     minus++
          //     return false
          //   }
          //   return true
          // })
          indices = removeLastIfMatch(indices)




          level = level - minus
        }


        console.log('--- out ---')

        if (finalParser) {
          // const _path = path
          // path = []
          // indices = []

          return finalParser(object, { path })
        }
        return object
      })
  }

  return parseNestedObject(_rootObject)
}

export const parseNestedObject = parseNestedObjectWrapper
