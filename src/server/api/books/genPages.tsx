import { parseHTML } from '@gxl/epub-parser'
import calcHeights from './calcHeights'
import { groupNodesByPage } from '../../../renderers/paging'

type Section = {
  id: string
  htmlString: string
  toHtmlObject: () => ParsedNode[]
}

type Config = {
  bookId: string
  sections: Section[]
  fontSize: number
  width: number
  lineHeight: number
  pageHeight: number
  defaultFirstSectionHTML: string
}

const genPages = async (config: Config) => {
  const { bookId, sections, defaultFirstSectionHTML } = config
  const _sections = sections.map((section, index) => {
    let htmlObject = section.toHtmlObject()

    if (index === 0 && htmlObject.length === 0) {
      htmlObject = parseHTML(defaultFirstSectionHTML)
    }

    return {
      htmlObject,
      id: section.id
    }
  })
  const heights = await calcHeights(_sections, {
    fontSize: config.fontSize,
    lineHeight: config.lineHeight,
    width: config.width
  })

  let pageSum = 0
  const pages = _sections
    .map((section, index) => {
      const result = groupNodesByPage(section.htmlObject, {
        nodeHeights: heights[index],
        pageHeight: config.pageHeight,
        pageStartFrom: pageSum,
        meta: {
          sectionId: section.id
        }
      })
      pageSum += result.length
      return result
    })
    .reduce((a, b) => {
      return a.concat(b)
    }, [])

  return pages
}

export default genPages
