import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import _ from 'lodash'
import AppDoc from '../../../app/components/AppDoc'
import HTMLObjectsRenderer from '../../../app/components/HTMLObjectsRenderer'
import evaluate from '../../helpers/evaluate'
import { getCSSUri } from '../../middleware/render/renderView'

const debug = require('debug')('readr:bookapi:render')

type MappedSection = {
  id: string
  htmlObjects: HtmlNodeObject[]
}
type RenderConfig = {
  fontSize: number
  width: number
  lineHeight: number
}
const render = async (sections: MappedSection[], rendererConfig: RenderConfig) => {
  debug('start')
  // get node heights in sections
  const htmlString = renderToStaticMarkup(
    <AppDoc
      link={getCSSUri()}
      appMarkup={
        <div className="sections">
          {
            sections.map((section, index) => {
              return (
                <HTMLObjectsRenderer
                  key={index}
                  htmlObjects={section.htmlObjects}
                  {...rendererConfig}
                />
              )
            })
          }
        </div>
      }
    />
  )

  const heights = await evaluate(htmlString, {
    saveShotAsPng: process.env.SAVE_PHANTOM_RENDER_IMAGE === '1',
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
  })
    .then(_heights => {
      return _heights
    })

  debug('end')
  return heights as number[][]
}

export default render
