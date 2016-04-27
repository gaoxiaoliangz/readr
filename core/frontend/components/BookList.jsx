import React, { Component } from 'react'
import { Appbar, Button, Container } from 'muicss/react'
import { Link } from 'react-router'
import Book from 'components/Book'

class BookList extends Component {
  render() {
    let bookList = this.props.bookList

    return (
      <Container>
        <div className="book-box">
          <h1 className="page-title">新书速递</h1>
          <ul className="book-list clearfix">
            {
              bookList?(
              bookList.map((book, index) =>(
                <Book id={book.id} key={index} book={book} />
              ))
              ):null
            }
          </ul>
        </div>
      </Container>
    )
  }
}

export default BookList
