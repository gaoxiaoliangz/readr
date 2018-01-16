import React, { Component } from 'react'
import Book, { BookEntity } from '../Book/Book'
import CSSModules from 'react-css-modules'
import styles from './BookList.scss'

interface IBook extends BookEntity {
  to?: string
}

export interface Props {
  prependList?: any[]
  bookEntities: IBook[]
  onDelBook?: (bookEntity: BookEntity) => void
}

@CSSModules(styles)
class BookList extends Component<Props, {}> {
  render() {
    const { prependList, onDelBook } = this.props
    return (
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
          this.props.bookEntities && this.props.bookEntities.length !== 0
            ? (
              this.props.bookEntities.map((book, index) => {
                const { title, authors, description, cover, to } = book
                return (
                  <li key={index}>
                    <Book
                      id={book.id}
                      title={title || '无标题'}
                      authors={authors}
                      description={description}
                      cover={cover}
                      disablePopup
                      percentage={book.percentage}
                      to={to}
                      onDelBook={onDelBook && (() => {
                        onDelBook(book)
                      })}
                    />
                  </li>
                )
              })
            )
            : (
              <li>暂无记录</li>
            )
        }
      </ul>
    )
  }
}

export default BookList
