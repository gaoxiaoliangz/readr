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

const groupIntoSections = (rects: RectInfo[], width: number) => {
  const sections = []
  let currentSection = []
  let currentSectionWidth = 0
  rects.forEach(rect => {
    const rectWidth = rect.width || width
    currentSectionWidth += rectWidth

    if (currentSectionWidth >= width) {
      sections.push(currentSection)
      currentSection = []
    }
    currentSection.push(rect)
  })
  return sections
}

const groupIntoPages = (lines: RectInfo[][], pageHeight: number) => {
  const pages = []
  let currentPage = []
  let currentPageHeight = 0
  lines.forEach(line => {
    const lineHeight = _.maxBy(line, rect => {
      return rect.height
    }).height
    currentPageHeight += lineHeight

    if (currentPageHeight >= pageHeight) {
      pages.push(currentPage)
      currentPage = []
    }
    currentPage.push(line)
  })
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
        Array.prototype.forEach.call(obj, char => {
          const tag = (_.get(objects, resolveRealPath(path.slice(0, path.length - 1)), {}) as any).tag
          const rect = getRectInfo(char, tag)

          chars.push({
            ...rect,
            ...{
              path
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
