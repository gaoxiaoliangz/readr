import React from 'react'
import PT from 'prop-types'
import BookPage from './BookPage'
import './FlippableBookPage.scss'

const FlippableBookPage = props => {
  const { page: { pageNo } } = props
  return (
    <div styleName="page--flip">
      <BookPage {...props} />
      <div styleName="page-no">{pageNo}</div>
    </div>
  )
}

FlippableBookPage.propTypes = {
  page: PT.object.isRequired,
  config: PT.object.isRequired,
}

export default FlippableBookPage
