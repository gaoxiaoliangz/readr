import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import _ from 'lodash'
import path from 'path'
import { groupNodesByPage } from '../../../renderers/paging'
import dataProvider from '../../models/data-provider'
import { notFoundError } from '../../helpers'
import AppDoc from '../../../app/components/AppDoc'
import HTMLObjectsRenderer from '../../../app/components/HTMLObjectsRenderer'
import evaluate from '../../../renderers/evaluate'
import { getCssLinks } from '../../middleware/render/render-view'
import parseEpub from '../../../parsers/epub/epub'
import parseHTML from '../../../parsers/html'
import parseLink from '../../../parsers/link'

const debug = require('debug')('readr:api:renderedPages')

type RendererConfig = {
  fontSize: number
  width: number
  lineHeight: number
}
const calcHeights = async (sections, rendererConfig: RendererConfig) => {
  debug('calcHeights start')
  // get node heights in sections
  const htmlString = renderToStaticMarkup(
    <AppDoc
      link={getCssLinks()}
      appMarkup={
        <div className="sections">
          {
            sections.map((section, index) => {
              return (
                <HTMLObjectsRenderer key={index} htmlObjects={section} {...rendererConfig} />
              )
            })
          }
        </div>
      }
    />
  )

  const heights = evaluate(htmlString, {
    saveShotAsPng: false,
    evalCallback: `
      var sections = document.querySelector('.sections').childNodes
      var heights = []
      var allHeights = []
      Array.prototype.forEach.call((sections), function(section) {
        Array.prototype.forEach.call(section.childNodes, function(node) {
          heights.push(node.clientHeight)
        })
        allHeights.push(heights)
        heights = []
      })
      return allHeights
    `
  }).then(_heights => {
    return _heights
  })

  debug('calcHeights end')
  return heights
}

// const queryBookFile = async (bookId) => {
//   debug('queryBookFile')
//   const bookEntity = await dataProvider.Book.utils.findById(bookId) as any
//   const fileId = bookEntity.file

//   if (!fileId) {
//     return Promise.reject(notFoundError('book'))
//   }

//   return await dataProvider.File.utils.findById(fileId) as any
// }
type BookContent = {
  id: string
  html: string
  path: string
  pathObject: GeneralObject
}[]
const resolveBookContent = async (bookContent: BookContent) => {
  debug('resolveBookContent')

  const isInternalUri = uri => {
    return uri.indexOf('http://') === -1 && uri.indexOf('https://') === -1
  }

  const sections = bookContent.map((section, index) => {
    let parsedSection = {
      ...section,
      ...{
        htmlObject: parseHTML(section.html, {
          resolveHref(href) {
            if (isInternalUri(href)) {
              const { name, hash } = parseLink(href)
              if (hash) {
                return `#${name},${hash}`
              }
              return `#${name}`
            }
            return href
          },
          resolveSrc(src) {
            if (isInternalUri(src)) {
              // todo: may have bugs
              const absolutePath = path.resolve('/', src).substr(1)
              debug('absolutePath', absolutePath)

              const buffer = epub.resolve(absolutePath).asNodeBuffer()
              const base64 = buffer.toString('base64')
              return `data:image/png;base64,${base64}`
            }
            return src
          }
        })
      }
    }
    if (index === 0 && parsedSection.htmlObject.length === 0) {
      const defaultFirstSectionContent = `
          <br/>
          <br/>
          <br/>
          <h1>${epub.metadata.title}</h1>
          <p>${epub.metadata.author}</p>
        `
      parsedSection.htmlObject = parseHTML(defaultFirstSectionContent)
    }

    return parsedSection
  })
  return sections
}

const resolveBookContentMem = _.memoize(resolveBookContent)

const validateNonNullOptions = (options, nonNullFieldList) => {
  for (const field of nonNullFieldList) {
    if (_.isUndefined(options[field])) {
      return new Error(`Required field ${field} is not provided!`)
    }
  }
  return true
}

type RenderedPagesOptions = {
  pageHeight: number
  width: number
  fontSize: number
  lineHeight: number
}
export const renderPages = async (bookId, options: RenderedPagesOptions) => {
  console.time('resolveBookPages')
  const nonNullFieldList = ['pageHeight', 'width', 'fontSize', 'lineHeight']
  const validateResult = validateNonNullOptions(options, nonNullFieldList)

  if (validateResult !== true) {
    return Promise.reject(validateResult)
  }

  const { pageHeight, width, fontSize, lineHeight } = options

  const sections = await resolveBookContentMem(bookId)
  const heights = await calcHeights(_.map(sections, section => section.htmlObject), {
    width,
    fontSize,
    lineHeight
  })

  debug('groupNodesByPage start')

  let pageSum = 0
  const pages = sections
    .map((section, index) => {
      const result = groupNodesByPage(section.htmlObject, {
        nodeHeights: heights[index],
        pageHeight,
        pageStartFrom: pageSum,
        meta: {
          section: section.pathObject.name
        }
      })
      pageSum += result.length
      return result
    })
    .reduce((a, b) => {
      return a.concat(b)
    }, [])
  debug('groupNodesByPage end')
  console.timeEnd('resolveBookPages')

  return pages
}

export default renderPages
