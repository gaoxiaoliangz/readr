import React, { Component } from 'react'
import classnames from 'classnames'
const styles1: any = require('./_book-page-list.scss')
const styles2: any = require('./_book-page.scss')
import CSSModules from 'react-css-modules'

interface IProps {
  nodes: any
  fluid: boolean
}

@CSSModules(Object.assign({}, styles1, styles2))
class BookPageWithRawHtml extends Component<IProps, {}> {

  bookHtml: any

  constructor(props) {
    super(props)
  }

  getContentHtml() {
    return this.bookHtml
  }

  render() {
    const { fluid, nodes } = this.props

    const classNameOfPages = classnames({
      'pages': !fluid,
      'pages--fluid': fluid
    })

    const classNameOfPage = classnames({
      'page': !fluid,
      'page--fluid': fluid
    })

    return (
      <ul className={classNameOfPages}>
        <li className={classNameOfPage}>
          <div ref={ref => { this.bookHtml = ref }} className="content" dangerouslySetInnerHTML={{ __html: nodes.join('') }}></div>
        </li>
      </ul>
    )
  }
}

export default BookPageWithRawHtml
