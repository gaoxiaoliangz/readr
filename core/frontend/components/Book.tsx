import React, { Component } from 'react'
import { Link } from 'react-router'
import BookInfoPopup from 'components/BookInfoPopup'

export default class Book extends Component<any, any> {
  render() {
    let book = this.props.book
    let title = book.title
    let description = book.description
    let bookId = this.props.id
    let author = book.author.map(a => a.name).join(', ')

    return (
      <li className="book">
        <Link to={"/book/"+bookId} >
          <div className="book-cover"><img src={book.cover}/></div>
          <div className="book-meta">
            <span title={book.title} className="book-name">{book.title}</span>
            <span className="book-author">{author}</span>
          </div>
        </Link>
        <BookInfoPopup bookId={bookId} title={title} author={author} description={description} />
      </li>
    )
  }
}
