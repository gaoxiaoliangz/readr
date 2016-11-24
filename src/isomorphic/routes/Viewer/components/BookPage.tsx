import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classnames from 'classnames'
import CSSModules from 'react-css-modules'
import Markdown from '../../../elements/Markdown'
const styles = require('./BookPage.scss')

interface Props {
  page: TBookPage
  pageHeight?: number
  fluid: boolean
}

@CSSModules(styles)
class BookPage extends Component<Props, {}> {

  bookPageDom: HTMLDivElement

  render() {
    const { page: { nodes, meta }, pageHeight, fluid } = this.props
    const mdInput = nodes.join('\n\n')
    let liStyle = {}
    let contentStyle = {}

    if (meta && pageHeight) {
      liStyle = {
        position: 'absolute',
        top: pageHeight * (meta.pageNo - 1),
        height: pageHeight || 'auto'
      }
    }

    if (meta && meta.offset) {
      contentStyle = { marginTop: meta.offset }
    }

    const className = classnames({
      'page': !fluid,
      'page--fluid': fluid
    })

    return (
      <li styleName={className} style={liStyle}>
        <div
          style={contentStyle}
          styleName="content"
          ref={ref => { this.bookPageDom = ref } }
          >
          <Markdown
            className="lines"
            input={mdInput}
            safe={false}
            renderers={{
              'Paragraph': p => {
                console.log(p)
                return <p>yes</p>
              }
              // 'Link': link => {
              //   console.log(link)
              //   return <span>a link</span>
              // }
            }}
            markedRenderers={{
              paragraph(text) {
                return `<p class="gb-line">${text}</p>`
              },
              link(href, title, text) {
                console.log(href, title, text)
                if (href.indexOf('http://') === -1) {
                  return `<a href="${href}" class="js-link-nav" title="${title}">${text}</a>`
                }

                return `<a href="${href}" title="${title}">${text}</a>`
              }
              // 'ALL': ele => {
              //   return `<div class="gb-line">${ele.outerHTML || ele.innerHTML || ele.textContent}</div>`
              // }
            }}
            />
        </div>
        {
          meta && (
            <div styleName="page-no">{meta.pageNo}</div>
          )
        }
      </li>
    )
  }
}

export default BookPage
