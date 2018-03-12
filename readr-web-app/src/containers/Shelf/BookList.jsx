import React, { Component } from 'react'
import PT from 'prop-types'
import Book from './Book'
import './BookList.scss'

class BookList extends Component {
  static propTypes = {
    prependList: PT.array,
    onDelBook: PT.func.isRequired,
    onDownloadBook: PT.func.isRequired,
    books: PT.array.isRequired
  }

  render() {
    const { prependList, onDelBook, books, onDownloadBook } = this.props
    return (
      <div>
        <ul styleName="book-list" className="clearfix">
          {
            prependList && (
              prependList.map((item, index) => {
                return (
                  <li key={index}>{item}</li>
                )
              })
            )
          }
          {
            books && books.length !== 0
              ? (
                books.map((book, index) => {
                  return (
                    <li key={index}>
                      <Book
                        {...book}
                        onDelBook={onDelBook}
                        onDownloadBook={onDownloadBook}
                      />
                    </li>
                  )
                })
              )
              : (
                <li>Empty</li>
              )
          }
        </ul>
      </div>
    )
  }
}

export default BookList
