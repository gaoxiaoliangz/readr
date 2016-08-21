import React, { Component } from 'react'
import * as utils from './BookPageList.utils'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classnames from 'classnames'
import CSSModules from 'react-css-modules'
const styles: any = require('./_book-page.scss')

interface IProps {
  page: utils.TPage
  pageHeight: number
  fluid: boolean
}

interface IState {
}

@CSSModules(styles)
class BookPage extends Component<IProps, IState> {

  bookPageDom: HTMLDivElement

  render() {
    const { page: { nodes, meta }, pageHeight, fluid } = this.props
    const style = {
      position: 'absolute',
      top: pageHeight * (meta.pageNo - 1)
    }
    const className = classnames({
      'page': !fluid,
      'page--fluid': fluid
    })

    console.log('render')

    return (
      <li styleName={className} style={style}>
        <div
          style={{ marginTop: meta.offset, height: pageHeight || 'auto' }}
          styleName="content"
          dangerouslySetInnerHTML={{ __html: nodes.join('') }}
          ref={ref => { this.bookPageDom = ref }}
          />
        <div styleName="page-no">{meta.pageNo}</div>
      </li>
    )
  }
}

export default BookPage
