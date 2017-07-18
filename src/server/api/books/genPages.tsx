import { parseHTML } from '@gxl/epub-parser'
import _ from 'lodash'
import render from './render'
import { sectionsToPages } from './paging'

type Config = {
  bookId: string
  sections: Section[]
  fontSize: number
  width: number
  lineHeight: number
  pageHeight: number
  defaultFirstSectionHTML: string
  sectionGapLines?: number
  newPageAfterSection?: boolean
}

const sectionGapTpl = (lines = 0): HtmlNodeObject[] => parseHTML(_.times(lines, () => '<br/>').join(''))

const genPages = async (config: Config) => {
  const { bookId, sections: rawSections, defaultFirstSectionHTML, pageHeight, sectionGapLines, newPageAfterSection } = config
  const sections = rawSections
    .map((section, index) => {
      let htmlObjects = section.htmlObjects
      if (section.htmlObjects) {
        htmlObjects = section.toHtmlObjects()
      }

      if (index === 0 && htmlObjects.length === 0) {
        htmlObjects = parseHTML(defaultFirstSectionHTML)
      }

      return {
        ...section,
        htmlObjects: htmlObjects.concat(sectionGapTpl(sectionGapLines))
      }
    })

  const sectionsOfNodeHeights = await render(sections, {
    fontSize: config.fontSize,
    lineHeight: config.lineHeight,
    width: config.width
  })

  return sectionsToPages({
    sections,
    sectionsOfNodeHeights,
    newPageAfterSection,
    pageHeight
  })
}

export default genPages
