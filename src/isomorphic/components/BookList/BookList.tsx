import React, { Component } from 'react'
import Book from '../Book'
import CSSModules from 'react-css-modules'
const styles = require('./_book-list.scss')

interface Props {
  bookEntities: {
    id: string
    title: string
    authors: any
    description: string
    cover: string
  }[]
}

@CSSModules(styles, {
  allowMultiple: true
})
class BookList extends Component<Props, {}> {
  render() {
    return (
      <ul className="book-list clearfix">
        {
          this.props.bookEntities ? (
            this.props.bookEntities.map((book, index) => {
              const { title, authors, description, cover } = book
              return (
                <Book
                  id={book.id}
                  key={index}
                  title={title}
                  authors={authors.map(author => author.name).join(', ')}
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
