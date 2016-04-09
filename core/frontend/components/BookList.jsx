import React, { Component } from 'react'
import { Appbar, Button, Container } from 'muicss/react'
import { Link } from 'react-router'
import Book from 'components/Book'

class BookList extends Component {
  render() {
    return (
      <Container>
        <div className="book-box">
          <h1 className="page-title">新书速递</h1>
          <ul className="book-list clearfix">
            {
              this.props.bookList?(
              this.props.bookList.map((book, index) =>(
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
