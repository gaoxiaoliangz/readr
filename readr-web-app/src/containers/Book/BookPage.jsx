import React from 'react'
import PT from 'prop-types'
import ContentRenderer from './ContentRenderer'

const BookPage = props => {
  const { page: { nodes, pageNo, offset, pageHeight } } = props
  return (
    <div style={{
      height: pageHeight,
      overflow: 'hidden'
    }}>
      <div style={{
        marginTop: offset
      }}>
        <ContentRenderer nodes={nodes} />
      </div>
      <div>{pageNo}</div>
    </div>
  )
}

BookPage.propTypes = {
  page: PT.object.isRequired
}

export default BookPage
