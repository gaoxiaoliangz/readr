import React from 'react'
import PT from 'prop-types'
import ContentRenderer from './ContentRenderer'
import './BookPage.scss'

const BookPage = props => {
  const { page: { nodes, pageNo, offset, pageHeight } } = props
  return (
    <div styleName="page">
      <div
        style={{
          height: pageHeight,
          overflow: 'hidden'
        }}>
        <ContentRenderer
          style={{
            marginTop: offset
          }}
          nodes={nodes}
        />
        <div styleName="page-no">{pageNo}</div>
      </div>
    </div>
  )
}

BookPage.propTypes = {
  page: PT.object.isRequired
}

export default BookPage
