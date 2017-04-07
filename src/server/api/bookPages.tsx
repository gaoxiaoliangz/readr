import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import fs from 'fs'
import _ from 'lodash'
import md5 from 'vendor/md5'
import { makeBasicAPIMethods } from './utils'
import { groupNodesByPage } from '../../renderers/paging'
import dataProvider from '../models/data-provider'
import * as helpers from '../helpers'
import { notFoundError } from '../helpers'
import parsers from '../../parsers'
import request from '../../utils/network/request'
import AppDoc from '../../app/components/AppDoc'
import Template from '../../renderers/Template'
import evaluate from '../../renderers/evaluate'
import { getCssLinks } from '../middleware/render/render-view'
import getCurrentTime from '../../utils/getCurrentTime'

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
                <Template key={index} htmlObjects={section.content} />
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
  return await dataProvider.File.utils.findById(fileId) as any
}

const queryBookFileMem = _.memoize(queryBookFile)

const parseEpub = buffer => {
  debug('parseEpub')
  return parsers.epub(buffer)
}

const parseEpubMem = _.memoize(parseEpub, cacheKeyResolver)

const resolveBookContent = async bookId => {
  debug('resolveBookContent')
  const file = await queryBookFile(bookId)
  return parseEpub(file.content)
}

const resolveBookContentMem = _.memoize(resolveBookContent)

export const resolveBookPages = async (options) => {
  console.time('resolveBookPages')
  const { id: bookId, pageNo, pageHeight } = options

  // let bookContent

  // if (!fileId) {
  //   return Promise.reject(notFoundError('book'))
  // }

  // if (file.mimetype === 'application/epub+zip') {
  const bookContent = await resolveBookContentMem(bookId)
  let { sections } = bookContent
  // sections = [sections[1], sections[2]]

  const heights = await calcHeightsMem(sections)

  debug('groupNodesByPage start')

  const pages = sections
    .map((section, index) => {
      return groupNodesByPage(section.content, heights[index], pageHeight)
    })
    .reduce((a, b) => {
      return a.concat(b)
    }, [])
  debug('groupNodesByPage end')
  console.timeEnd('resolveBookPages')
  return pages[pageNo - 1]
  // return sections.map((section, index) => {
  //   return {
  //     ...{ heights: heights[index] },
  //     ...section
  //   }
  // })
  // } else if (bookEntity.file.mimetype === 'text/plain') {
  // todo
  // bookContent = await parsers.txt(file.content)
  // return Promise.reject(new Error('Unsupported file type txt!'))
  // }
  // return Promise.reject(new Error('Unsupported file type!'))

  // return {
  //   _id: bookEntity._id,
  //   file_id: fileId,
  //   content: bookContent
  // }
}

export default {
  resolveBookPages
}
