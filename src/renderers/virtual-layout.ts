import _ from 'lodash'
import { parseNestedObjectWithoutFilter } from '../parsers/utils2'


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

/**
 * mapping
 * linear <-> nestedObjects
 * 
 * linear: charObject[]
 * nestedObjects
 * 
 * eg: chars[240] <-> [root, 20, children, 1, chars, 70]
 */

const resolveRealPath = pathArr => {
  const _path = []
  pathArr.forEach((p, index) => {
    _path.push(p)
    if (pathArr.length - 1 !== index) {
      _path.push('children')
    }
  })
  return _path
}

const groupIntoSections = () => {

}

const groupIntoPages = () => {
  
}

interface RectInfo {
  width: number
  height: number
  flow: 'follow' | 'block'
  char: string
  tag: string
}

export const layoutChars = objects => {
  const rects = []
  const chars = []

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

  parseNestedObjectWithoutFilter(objects, {
    childrenKey: 'children',

    finalParser(obj, path) {
      if (typeof obj === 'string') {
        Array.prototype.forEach.call(obj, char => {
          chars.push({
            char,
            path,
            tag: (_.get(objects, resolveRealPath(path.slice(0, path.length - 1)), {}) as any).tag
          })
        })
        // return {
        //   chars: obj,
        //   path
        // }
      } else {
        chars.push({
          path,
          tag: obj.tag
        })
      }
      return obj
      // return {
      //   ...obj,
      //   ...{
      //     path
      //   }
      // }
    }
  })
  return chars
}


