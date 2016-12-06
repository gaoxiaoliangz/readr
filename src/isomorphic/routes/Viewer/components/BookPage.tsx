import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classnames from 'classnames'
import CSSModules from 'react-css-modules'
import Markdown from '../../../elements/Markdown'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../store/actions'
import * as selectors from '../../../store/selectors'
const styles = require('./BookPage.scss')

const renderers = {
  paragraph(text) {
    return `<p class="${styles['gb-line']}">${text}</p>`
  },

  link(href, title, text) {
    if (href.indexOf('http://') === -1) {
      return `<a href="${href}" class="js-book-nav">${text}</a>`
    }

    return `<a href="${href}" target="_blank">${text}</a>`
  },

  line(ele: HTMLElement) {
    const tagName = ele.tagName
    if (tagName !== 'P') {
      return `<div class="${styles['gb-line']}">${ele.outerHTML || ele.innerHTML || ele.textContent}</div>`
    }
    return ele.outerHTML
  }
}

interface Props {
  page: TBookPage
  pageHeight?: number
  fluid: boolean
  active?: boolean
}

interface AllProps extends Props {
  fontSize?: number
  theme?: string
  isScrollMode?: boolean
  // currentPageNo?: number
}

const mapStateToProps = (state, ownProps) => {
  const { fontSize, theme, isScrollMode } = selectors.viewer.config(state)
  // const currentPageNo = selectors.viewer.progress(config.bookId)(state)

  return { fontSize, theme, isScrollMode }
}

@connect<AllProps>(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)
@CSSModules(styles, {
  allowMultiple: true
})
export default class BookPage extends Component<AllProps, {}> {

  bookPageDom: HTMLDivElement

  render() {
    const { page: { nodes, meta }, pageHeight, fluid, fontSize,
      theme, isScrollMode, active } = this.props
    const mdInput = nodes.join('\n\n')
    const contentStyle = { fontSize } as {
      marginTop?: number
      fontSize?: number
    }
    let liStyle = {}

    if (meta && pageHeight) {
      if (isScrollMode) {
        liStyle = {
          position: 'absolute',
          top: pageHeight * (meta.pageNo - 1),
          height: pageHeight || 'auto'
        }
      } else {
        liStyle = {
          position: 'absolute',
          top: 0,
          display: active ? 'block' : 'none',
          // display: currentPageNo === meta.pageNo ? 'block' : 'none',
          height: pageHeight || 'auto'
        }
      }
    }

    if (meta && meta.offset) {
      contentStyle.marginTop = meta.offset
    }

    const className = classnames({
      'page': !fluid,
      'page--fluid': fluid,
      [theme && theme.toLocaleLowerCase()]: Boolean(theme)
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
            markedRenderers={renderers}
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
