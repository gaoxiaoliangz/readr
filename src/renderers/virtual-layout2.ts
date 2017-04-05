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

const isInline = tag => {
  const inlineTags = ['span', 'strong', 'small']
  return inlineTags.indexOf(tag) !== -1
}

// path [rootIndex, ..., childrenIndex, charIndex]
const groupIntoSections = (atoms: Atom[], width: number) => {
  const sections = []
  let currentSection = []
  let currentSectionWidth = 0

  atoms.forEach((atom, index) => {
    const { path, type } = atom
    const rectWidth = type === 3 ? 16 : width
    // const currentTag = atom.tag
    // const tagChanged = currentTag !== prevTag
    const prevAtom = atoms[index - 1] as Atom
    const rootIndexChangd = !prevAtom ? false : (
      path[0] !== prevAtom.path[0]
    )
    // check if is block ele under section ele
    let isBlockUnderSection = !isInline(atom.parentTag) && path.length > 3
    const pathLengthChanged = !prevAtom ? false : (
      path.length !== prevAtom.path.length
    )
    const childrenIndexChanged = (!prevAtom || path.length < 3) ? false : (
      path[path.length - 2] !== prevAtom.path[prevAtom.path.length - 2]
    )
    // if (pathLengthChanged)
    currentSectionWidth += rectWidth

    if (currentSectionWidth >= width || rootIndexChangd || type === 1) {
    // if (currentSectionWidth >= width || rootIndexChangd || type === 1 || pathLengthChanged || (childrenIndexChanged && isBlockUnderSection)) {
      sections.push(currentSection)
      currentSection = []
      currentSectionWidth = 0
    }

    currentSection.push(atom)
  })
  if (sections.length === 0) {
    sections.push(currentSection)
  }
  return sections
}

const groupIntoPages = (lines: RectInfo[][], pageHeight: number) => {
  const pages = []
  let currentPage = []
  let currentPageHeight = 0
  lines.forEach(line => {
    const lineHeight = (_.maxBy(line, rect => {
      return rect.height
    }) || {})['height'] || 16
    currentPageHeight += lineHeight

    if (currentPageHeight >= pageHeight) {
      pages.push(currentPage)
      currentPage = []
      currentPageHeight = 0
    }
    currentPage.push(line)
  })
  if (pages.length === 0) {
    pages.push(currentPage)
  }
  return pages
}

export const layoutChars = objects => {
  const rects = []
  const atoms = []

  const getRectInfo = (char, tag): RectInfo => {
    return {
      width: 16,
      height: 16,
      flow: 'follow',
      char,
      tag
    }
  }

  parseNestedObjectWithoutFilter(objects, {
    childrenKey: 'children',

    finalParser(obj, path) {
      // if (typeof obj === 'string') {
      //   Array.prototype.forEach.call(obj, (char, index) => {
      //     const tag = (_.get(objects, resolveRealPath(path.slice(0, path.length - 1)), {}) as any).tag
      //     const rect = getRectInfo(char, tag)
      //     const isTagInline = isInline(tag)

      //     chars.push({
      //       ...rect,
      //       ...{
      //         path,
      //         flow: ((0 === index) || !isTagInline) ? 'newline' : rect.flow
      //       }
      //     })
      //   })
      // } else {
      //   chars.push({
      //     path,
      //     tag: obj.tag,
      //     flow: 'block'
      //   })
      // }
      // return obj

      if (obj.type === 3) {
        Array.prototype.forEach.call(obj.text, (char, index) => {
          atoms.push({
            ...obj,
            ...{
              text: char,
              path: path.concat([index])
            }
          })
        })
      } else {
        atoms.push({
          ...obj,
          ...{
            path
          }
        })
      }

      return obj
    }
  })
  const sections = groupIntoSections(atoms, 1500)
  const pages = groupIntoPages(sections, 600)
  return pages
  // return atoms
}

const getItemWidth = (chars?) => {

}

const getSectionHeight = (section, width: number) => {
  const { children } = section

  const checkIsInline = (ele) => {
    if (typeof ele === 'string') {
      return true
    }
    // todo: what if a block level element showed in an inline element?
    return isInline(ele.tag)
  }

  /**
   * @param ele 
   * @return {isInline: boolean, text: string}
   */
  const extractText = (ele, reset = true) => {
    const textArr = ele.children
      .map(child => {
        if (typeof child === 'string') {
          return { isInline: !_.isUndefined(reset) ? reset : true, text: child }
        }
        if (checkIsInline(child)) {
          return extractText(child)
        }
        return extractText(child, false)
      })

    return _.flattenDeep(textArr) as { isInline, text }[]
  }


  const flattenChildren = _ele => {
    const arr = []
    let deep = false

    const flatten = ele => {
      const _children = ele.children || []
      _children.forEach(child => {
        if (!child.children) {
          arr.push({
            ...child,
            ...{ deep }
          })
        } else {
          deep = true
          flatten(child)
        }
      })
    }
    flatten(_ele)
    return arr
  }



  // const isAllInline = children.every(child => checkIsInline(child))

  // if (isAllInline) {
  //   const text = extractText(section)
  //   // ...
  // }
  const flatChildren = flattenChildren(section)
  // todo
  const lineHeight = 20
  let totalHeight = 0
  let currentWidth = 0

  // flatChildren.forEach(child => {
  //   if (!child.isInline) {
  //     // totalHeight += 
  //   }
  //   if (currentWidth < width) {

  //   }
  // })

  return flatChildren
}

export const render = (objects) => {
  // return objects.map(obj => {
  //   return getSectionHeight(obj, 600)
  // })
  return layoutChars(objects)
}
