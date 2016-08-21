import React, { Component } from 'react'
import BookPageList from './BookPageList'

interface IProps {
  nodes: string[]
  fluid: boolean
}

class BookPageWithRawHtml extends Component<IProps, {}> {

  constructor(props) {
    super(props)
  }

  bookPageList: any

  getContentHtml() {
    return this.bookPageList.bookPage.bookPageDom
  }

  render() {
    const { fluid, nodes } = this.props

    return (
      <BookPageList
        fluid={fluid}
        nodes={nodes}
        nodeHeights={[]}
        pageCount={1}
        pageHeight={0}
        isCalcMode
        ref={ref => { this.bookPageList = ref }}
      />
    )
  }
}

export default BookPageWithRawHtml
