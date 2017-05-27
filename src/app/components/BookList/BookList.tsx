import React, { Component } from 'react'
import Book from '../Book'
import CSSModules from 'react-css-modules'
const styles = require('./BookList.scss')

export interface Props {
  bookEntities: {
    id: string
    title: string
    authors: any
    description: string
    cover: string
  }[]
}

@CSSModules(styles)
class BookList extends Component<Props, {}> {
  render() {
    return (
      <ul styleName="book-list" className="clearfix">
        {
          this.props.bookEntities && this.props.bookEntities.length !== 0
            ? (
              this.props.bookEntities.map((book, index) => {
                const { title, authors, description, cover } = book
                {/*const _authors = authors && authors.map(author => author.name).join(', ') || '未知作者'*/}
                return (
                  <li key={index}>
                    <Book
                      id={book.id}
                      title={title || '无标题'}
                      authors={authors}
                      description={description}
                      cover={cover}
                      disablePopup
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
