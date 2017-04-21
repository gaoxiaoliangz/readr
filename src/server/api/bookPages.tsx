import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import _ from 'lodash'
import path from 'path'
import md5 from 'vendor/md5'
import { groupNodesByPage } from '../../renderers/paging'
import dataProvider from '../models/data-provider'
import { notFoundError } from '../helpers'
import AppDoc from '../../app/components/AppDoc'
import Template from '../../renderers/Template'
import evaluate from '../../renderers/evaluate'
import { getCssLinks } from '../middleware/render/render-view'
import parseEpub from '../../parsers/epub/epub'
import parseHTML from '../../parsers/html'

const debug = require('debug')('readr:api:bookPages')

const calcHeights = async (sections) => {
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
                <Template key={index} htmlObjects={section} />
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

const cacheKeyResolver = obj => {
  const hash = md5(obj)
  debug('obj hash', hash)
  return hash
}

const calcHeightsMem = _.memoize(calcHeights, cacheKeyResolver)

const queryBookFile = async (bookId) => {
  debug('queryBookFile')
  const bookEntity = await dataProvider.Book.utils.findById(bookId) as any
  const fileId = bookEntity.file

  if (!fileId) {
    return Promise.reject(notFoundError('book'))
  }

  return await dataProvider.File.utils.findById(fileId) as any
}

const resolveBookContent = async bookId => {
  debug('resolveBookContent')
  const file = await queryBookFile(bookId)
  const { content, mimetype } = file

  // todo: text/plain
  if (mimetype === 'application/epub+zip') {
    const epub = await parseEpub(content)

    const { bookContent } = epub
    const sections = bookContent.map(section => {
      return {
        ...section,
        ...{
          htmlObject: parseHTML(section.html, {
            resolveHref(href) {
              if (href.indexOf('http://') === -1) {
                return `#${href}`
              }
              return href
            },
            resolveSrc(src) {
              if (src.indexOf('http://') === -1) {
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
    })
    return sections
  }

  return Promise.reject(new Error('Unsupported file type!'))
}

const resolveBookContentMem = _.memoize(resolveBookContent)

export const resolveBookPages = async (options) => {
  console.time('resolveBookPages')

  const { id: bookId, pageHeight } = options

  if (!pageHeight) {
    // todo: general validation
    return Promise.reject(new Error('pageHeight undefined!'))
  }

  const sections = await resolveBookContentMem(bookId)
  const heights = await calcHeightsMem(_.map(sections, section => section.htmlObject))

  debug('groupNodesByPage start')

  const pages = sections
    .map((section, index) => {
      return groupNodesByPage(section.htmlObject, heights[index], pageHeight, index)
    })
    .reduce((a, b) => {
      return a.concat(b)
    }, [])
  debug('groupNodesByPage end')
  console.timeEnd('resolveBookPages')

  return pages
}

export default {
  resolveBookPages
}
