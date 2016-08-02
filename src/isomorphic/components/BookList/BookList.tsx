import React, { Component } from 'react'
import Book from '../Book'
import CSSModules from 'react-css-modules'
const styles = require('./_book-list.scss')

interface Props {
  bookEntities: any
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
