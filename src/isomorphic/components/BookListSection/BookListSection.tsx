import React, { Component } from 'react'
import { Link } from 'react-router'
import BookList from '../BookList'
import CSSModules from 'react-css-modules'
const styles = require('./BookListSection.css')

interface IProps {
  bookEntities: any
  title?: string
  moreLink?: string
}

@CSSModules(styles, {
  allowMultiple: true
})
class BookListSection extends Component<IProps, {}> {
  render() {
    let title = this.props.title
    let moreLink = this.props.moreLink ? this.props.moreLink : null

    return (
      <div styleName="book-list-section">
        {
          this.props.title && (
            <h2 styleName="section-title">{title}</h2>
          )
        }
        {
          moreLink ? (
            <Link className="more" to={moreLink}>查看更多</Link>
          ) : null
        }
        <BookList bookEntities={this.props.bookEntities} />
      </div>
    )
  }
}

export default BookListSection
