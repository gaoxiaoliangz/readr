import React, { Component } from 'react'
// import { Link } from 'react-router'
import { Button } from '../../elements/_form'
import CSSModules from 'react-css-modules'
const styles = require('./_book-info-popup.scss')

@CSSModules(styles, {
  allowMultiple: true
})
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
      <div styleName="book-info-popup">
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <Button color="blue" to={'/viewer/book/' + bookId}>阅读</Button>
        <div styleName="description">
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default BookInfoPopup
