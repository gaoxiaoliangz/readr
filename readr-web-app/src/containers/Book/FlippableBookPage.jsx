import React from 'react'
import PT from 'prop-types'
import BookPage from './BookPage'
import './FlippableBookPage.scss'

const FlippableBookPage = props => {
  const { page: { pageNo }, config: { contentWidth }, bookInfo: { title } } = props
  const wrapStyle = {
    maxWidth: contentWidth || 'auto'
  }
  return (
    <div styleName="page--flip" style={wrapStyle}>
      <div styleName="title">{title}</div>
      <BookPage {...props} />
      <div styleName="page-no">{pageNo}</div>
    </div>
  )
}

FlippableBookPage.propTypes = {
  page: PT.object.isRequired,
  config: PT.object.isRequired,
  bookInfo: PT.object.isRequired,
}

export default FlippableBookPage
