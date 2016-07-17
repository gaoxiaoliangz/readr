import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Button from 'elements/Button'

class BookInfoPopup extends Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    let author = this.props.author
    let title = this.props.title
    let description = this.props.description
    let bookId = this.props.bookId

    return (
      <div className="book-info-popup popup">
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <Button color="blue" to={'/viewer/book/' + bookId}>阅读</Button>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default BookInfoPopup
