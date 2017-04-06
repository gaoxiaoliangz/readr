import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import fs from 'fs'
import _ from 'lodash'
import { makeBasicAPIMethods } from './utils'
import dataProvider from '../models/data-provider'
import * as helpers from '../helpers'
import { notFoundError } from '../helpers'
import parsers from '../../parsers'
import request from '../../utils/network/request'
import AppDoc from '../../app/components/AppDoc'
import Template from '../../renderers/Template'
import evaluate from '../../renderers/evaluate'

export const resolveBookPages = async (options) => {
  const { id: bookId } = options
  const bookEntity = await dataProvider.Book.utils.findById(bookId) as any
  const fileId = bookEntity.file
  const file = await dataProvider.File.utils.findById(fileId) as any
  let bookContent

  if (!fileId) {
    return Promise.reject(notFoundError('book'))
  }

  if (file.mimetype === 'application/epub+zip') {
    bookContent = await parsers.epub(file.content)
    let { sections } = bookContent
    sections = [sections[1], sections[2]]

    // get node heights in sections
    const htmlString = renderToStaticMarkup(
      <AppDoc
        style={`
          a {
            display: inline-block;
            color: #666;
          }
          p {
            color: #666;
          }
        `}
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

    const heights = await evaluate(htmlString, {
      saveShotAsPng: true,
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
    // return heights
    return sections.map((section, index) => {
      return {
        ...{ heights: heights[index] },
        ...section
      }
    })
  } else if (bookEntity.file.mimetype === 'text/plain') {
    // todo
    bookContent = await parsers.txt(file.content)
  } else {
    return Promise.reject(new Error('Unsupported file type!'))
  }

  return {
    _id: bookEntity._id,
    file_id: fileId,
    content: bookContent
  }
}

export default {
  resolveBookPages
}
