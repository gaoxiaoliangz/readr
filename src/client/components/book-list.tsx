import React, { Component } from 'react'
import Book from './book'

interface Props {
  bookEntities: any
}

class BookList extends Component<Props, {}> {
  render() {
    return (
      <ul className="book-list clearfix">
        {
          this.props.bookEntities ? (
            this.props.bookEntities.map((book, index) => {
              const { title, author, description, cover } = book
              return (
                <Book
                  id={book.id}
                  key={index}
                  title={title}
                  author={author.map(a => a.refData ? a.refData.name : '').join(', ')}
                  description={description}
                  cover={cover}
                />
              )
            })
          ) : null
        }
      </ul>
    )
  }
}

export default BookList
