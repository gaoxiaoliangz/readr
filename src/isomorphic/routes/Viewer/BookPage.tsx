import React, { Component } from 'react'
// import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import CSSModules from 'react-css-modules'
const styles: any = require('./_book-page.scss')

@CSSModules(styles)
class BookPage extends Component<any, any> {
  render() {
    let page = this.props.page
    let style = this.props.style

    return (
      <li styleName="page" style={style}>
        <div styleName="content">
          {
            page.props.children.map((node, index) => {
              if (node.type !== 'p') {
                console.error('Unsupported content found!')
              }
              return (
                <p {...index === 0 ? {style: {marginTop: page.props.offset}} :{}}
                  key={index} >
                  {node.props.children}
                </p>
              )
            })
          }
        </div>
        <div styleName="page-no">{page.props.pageNo}</div>
      </li>
    )
  }
}

export default BookPage
