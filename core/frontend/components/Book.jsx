import React, { Component } from 'react'
import { Appbar, Button, Container } from 'muicss/react'
import { Link } from 'react-router'

export default class Book extends Component {
  render() {
    let book = this.props.book

    return (
      <li className="book">
        <Link to={"/bookstore/book/"+this.props.id} >
          <div className="book-cover"><img src={book.image}/></div>
          <div className="book-meta">
            <span title={book.title} className="book-name">{book.title}</span>
            <span className="book-author">{Array.isArray(book.author)?book.author.join(' '):book.author}</span>
          </div>
        </Link>
      </li>
    )
  }
}
