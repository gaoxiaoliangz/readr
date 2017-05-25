import calcHeights from './calcHeights'
import { groupNodesByPage } from '../../../renderers/paging'

type Section = {
  id: string
  htmlString: string
  toHtmlObject: () => ParsedNode[]
}

type Config = {
  sections: Section[]
  fontSize: number
  width: number
  lineHeight: number
  pageHeight: number
}

const genPages = (bookId: string, config: Config) => {
  const { sections } = config
  const _sections = sections.map(section => {
    return {
      htmlObject: section.toHtmlObject(),
      id: section.id
    }
  })
  const heights = calcHeights(_sections, {
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
