import React, { Component } from 'react'
import { Link } from 'react-router'
import BookInfoPopup from 'components/BookInfoPopup'
import _ from 'lodash'

export default class Book extends Component<any, any> {
  render() {
    let book = this.props.book
    let title = book.title
    let description = book.description
    let author = ''

    if (!_.isEmpty(this.props.book)) {
      author = book.author.map(a => a ? a.name : '').join(', ')
    }

    return (
      !_.isEmpty(this.props.book) && (
        <li className="book">
          <Link to={'/book/' + this.props.id} >
            <div className="book-cover"><img src={book.cover}/></div>
            <div className="book-meta">
              <span title={book.title} className="book-name">{book.title}</span>
              <span className="book-author">{}</span>
            </div>
          </Link>
          <BookInfoPopup bookId={this.props.id} title={title} author={author} description={description} />
        </li>
      )
    )
  }
}