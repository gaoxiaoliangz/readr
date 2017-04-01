import { parseNestedObject } from '../parsers/utils'

// data structure
// const htmlObject = [
//   {
//     tag: 'h1',
//     children: [
//       'Title'
//     ]
//   },
//   {
//     tag: 'p',
//     children: [
//       'first line', // these two should combine
//       'second line'
//     ]
//   }
// ]

interface RectInfo {
  width: number
  height: number
  flow: 'follow' | 'block'
  char: string
  tag: string
}

export const readRecursively = objects => {
  const rects = []
  // const chars = []

  const getRectInfo = (char, tag): RectInfo => {
    return {
      width: 16,
      height: 16,
      flow: 'follow',
      char,
      tag
    }
  }

  // const _read = (_objects) => {
  //   _objects.forEach(obj => {
  //     if (obj.children) {
  //       obj.children.forEach(child => {
  //         if (typeof child === 'string') {
  //           rects.push(getRectInfo(child, obj.tag))
  //         } else {
  //           _read([child])
  //         }
  //       })
  //     }
  //   })
  // }
  // _read(objects)

  return parseNestedObject(objects, {
    childrenKey: 'children',

    // parser(obj, children) {
    //   const tag = obj.tag
    //   if (!tag) {
    //     return Array.prototype.map.call(children[0], char => {
    //       return char
    //     })
    //   }
    //   return {
    //     ...obj,
    //     ...{ children }
    //   }
    //   // return 'parsed'
    // },

    // finalParser(obj) {
    //   if (typeof obj === 'string') {
    //     const chars = Array.prototype.map.call(obj, char => {
    //       return char
    //     })
    //     return {
    //       chars
    //     }
    //   }
    //   return obj
    // }
  })

  // return rects
}
