import React, { Component } from 'react'
import * as utils from './BookPageList.utils'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import CSSModules from 'react-css-modules'
const styles: any = require('./_book-page.scss')

interface IProps {
  page: utils.TPage
}

interface IState {
}

@CSSModules(styles)
class BookPage extends Component<IProps, IState> {
  render() {
    const { page: { nodes, meta } } = this.props
    const style = {
      position: 'absolute',
      // todo
      top: 900 * (meta.pageNo - 1)
    }

    return (
      <li styleName="page" style={style}>
        <div style={{marginTop: meta.offset}} styleName="content" dangerouslySetInnerHTML={{ __html: nodes.join('') }} />
        <div styleName="page-no">{meta.pageNo}</div>
      </li>
    )
  }
}

export default BookPage
