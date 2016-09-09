import React, { Component } from 'react'
// import { Link } from 'react-router'
import { Button } from '../../elements/_form'
import CSSModules from 'react-css-modules'
const styles = require('./BookInfoPopup.scss')

interface IProps {
  author: string
  title: string
  description: string
  bookId: string
}

@CSSModules(styles, {
  allowMultiple: true
})
class BookInfoPopup extends Component<IProps, {}> {
  constructor(props) {
    super(props)
  }

  render() {
    const { author, title, description, bookId } = this.props

    return (
      <div styleName="popup">
        <div styleName="header">
          <h2 styleName="title">{title}</h2>
          <p styleName="author">{author}</p>
          <Button color="blue" to={'/viewer/book/' + bookId}>阅读</Button>
        </div>
        <div styleName="description">
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default BookInfoPopup
