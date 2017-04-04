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

const groupIntoSections = (rects: RectInfo[], width: number) => {
  const sections = []
  let currentSection = []
  let currentSectionWidth = 0
  let prevTag
  rects.forEach(rect => {
    const rectWidth = rect.width || width
    const currentTag = rect.tag
    const tagChanged = currentTag !== prevTag
    currentSectionWidth += rectWidth

    if (currentSectionWidth >= width || tagChanged || rect.flow === 'newline' || rect.flow === 'block') {
      sections.push(currentSection)
      currentSection = []
      currentSectionWidth = 0
    }

    currentSection.push(rect)
    prevTag = currentTag
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

  parseNestedObjectWithoutFilter(objects, {
    childrenKey: 'children',

    finalParser(obj, path) {
      if (typeof obj === 'string') {
        Array.prototype.forEach.call(obj, (char, index) => {
          const tag = (_.get(objects, resolveRealPath(path.slice(0, path.length - 1)), {}) as any).tag
          const rect = getRectInfo(char, tag)
          const isTagInline = isInline(tag)

          chars.push({
            ...rect,
            ...{
              path,
              flow: ((0 === index) || !isTagInline) ? 'newline' : rect.flow
            }
          })
        })
      } else {
        chars.push({
          path,
          tag: obj.tag,
          flow: 'block'
        })
      }
      return obj
    }
  })
  const sections = groupIntoSections(chars, 500)
  const pages = groupIntoPages(sections, 600)
  return pages
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

    const flatten = ele => {
      const _children = ele.children || []
      _children.forEach(child => {
        if (!child.children) {
          arr.push(child)
        } else {
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

  // txtArr.forEach(txtObj => {
  //   if (!txtObj.isInline) {
  //     // totalHeight += 
  //   }
  //   if (currentWidth < width) {

  //   }
  // })
  return flatChildren
}

export const render = (objects) => {
  return objects.map(obj => {
    return getSectionHeight(obj, 600)
  })
}
