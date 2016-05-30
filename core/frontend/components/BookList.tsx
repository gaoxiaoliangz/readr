import React, { Component } from 'react'
import { Link } from 'react-router'
import Book from 'components/Book'

class BookList extends Component<any, any> {
  render() {
    let bookList = this.props.bookList

    return (
      <ul className="book-list clearfix">
        {
          bookList?(
          bookList.map((book, index) =>(
            <Book id={book.id} key={index} book={book} />
          ))
          ):null
        }
      </ul>
    )
  }
}

export default BookList
