// import React from 'react'
// import { renderToStaticMarkup } from 'react-dom/server'
// import _ from 'lodash'
// import path from 'path'
// import { groupNodesByPage } from '../../../renderers/paging'
// import dataProvider from '../../models/data-provider'
// import { notFoundError } from '../../helpers'
// import AppDoc from '../../../app/components/AppDoc'
// import HTMLObjectsRenderer from '../../../app/components/HTMLObjectsRenderer'
// import evaluate from '../../../renderers/evaluate'
// import { getCssLinks } from '../../middleware/render/render-view'
// import parseEpub from '../../../parsers/epub/epub'
// // import parseHTML from '../../../parsers/html'
// // import parseLink from '../../../parsers/link'

// import { parseHTML, parseLink } from '@gxl/epub-parser'

// const debug = require('debug')('readr:api:renderedPages')



// type BookContent = {
//   id: string
//   html: string
//   path: string
//   pathObject: GeneralObject
// }[]
// const resolveBookContent = async (bookContent: bookContent) => {
//   debug('resolveBookContent')
//   const file = await queryBookFile(bookId)
//   const { content, mimetype } = file

//   // todo: text/plain
//   if (mimetype === 'application/epub+zip') {
//     const epub = await parseEpub(content)
//     const isInternalUri = uri => {
//       return uri.indexOf('http://') === -1 && uri.indexOf('https://') === -1
//     }

//     const { bookContent } = epub
//     const sections = bookContent.map((section, index) => {
//       let parsedSection = {
//         ...section,
//         ...{
//           htmlObject: parseHTML(section.html, {
//             resolveHref(href) {
//               if (isInternalUri(href)) {
//                 const { name, hash } = parseLink(href)
//                 if (hash) {
//                   return `#${name},${hash}`
//                 }
//                 return `#${name}`
//               }
//               return href
//             },
//             resolveSrc(src) {
//               if (isInternalUri(src)) {
//                 // todo: may have bugs
//                 const absolutePath = path.resolve('/', src).substr(1)
//                 debug('absolutePath', absolutePath)

//                 const buffer = epub.resolve(absolutePath).asNodeBuffer()
//                 const base64 = buffer.toString('base64')
//                 return `data:image/png;base64,${base64}`
//               }
//               return src
//             }
//           })
//         }
//       }
//       if (index === 0 && parsedSection.htmlObject.length === 0) {
//         const defaultFirstSectionContent = `
//           <br/>
//           <br/>
//           <br/>
//           <h1>${epub.metadata.title}</h1>
//           <p>${epub.metadata.author}</p>
//         `
//         parsedSection.htmlObject = parseHTML(defaultFirstSectionContent)
//       }

//       return parsedSection
//     })
//     return sections
//   }


//   type RenderedPagesOptions = {
//     pageHeight: number
//     width: number
//     fontSize: number
//     lineHeight: number
//   }
//   export const renderPages = async (bookId, options: RenderedPagesOptions) => {
//     console.time('resolveBookPages')
//     const nonNullFieldList = ['pageHeight', 'width', 'fontSize', 'lineHeight']
//     const validateResult = validateNonNullOptions(options, nonNullFieldList)

//     if (validateResult !== true) {
//       return Promise.reject(validateResult)
//     }

//     const { pageHeight, width, fontSize, lineHeight } = options

//     const sections = await resolveBookContentMem(bookId)
//     const heights = await calcHeights(_.map(sections, section => section.htmlObject), {
//       width,
//       fontSize,
//       lineHeight
//     })

//     debug('groupNodesByPage start')

//     // let pageSum = 0
//     // const pages = sections
//     //   .map((section, index) => {
//     //     const result = groupNodesByPage(section.htmlObject, {
//     //       nodeHeights: heights[index],
//     //       pageHeight,
//     //       pageStartFrom: pageSum,
//     //       meta: {
//     //         section: section.pathObject.name
//     //       }
//     //     })
//     //     pageSum += result.length
//     //     return result
//     //   })
//     //   .reduce((a, b) => {
//     //     return a.concat(b)
//     //   }, [])
//     debug('groupNodesByPage end')
//     console.timeEnd('resolveBookPages')

//     return pages
//   }

//   export default renderPages
