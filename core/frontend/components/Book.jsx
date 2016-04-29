import React, { Component } from 'react'
import { Link } from 'react-router'
import BookInfoPopup from 'components/BookInfoPopup'

export default class Book extends Component {
  render() {
    let book = this.props.book
    let title = book.title
    let author = book.author
    let description = book.summary
    let bookId = this.props.id

    return (
      <li className="book">
        <Link to={"/book/"+bookId} >
          <div className="book-cover"><img src={book.image}/></div>
          <div className="book-meta">
            <span title={book.title} className="book-name">{book.title}</span>
            <span className="book-author">{Array.isArray(book.author)?book.author.join(' '):book.author}</span>
          </div>
        </Link>
        <BookInfoPopup bookId={bookId} title={title} author={author} description={description} />
      </li>
    )
  }
}
