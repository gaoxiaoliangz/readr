import React, { Component } from 'react'
import _ from 'lodash'
import PT from 'prop-types'
import model from './bookModel'
import { FETCH_STATUS } from '../../constants'
import LayoutEstimator from './LayoutEstimator'
import BookPage from './BookPage'

class Book extends Component {
  static propTypes = {
    clientCurrPage: PT.number.isRequired,
    book: PT.object.isRequired,
    pages: PT.array.isRequired,
    bookNodes: PT.array.isRequired,
    bookStatus: PT.string.isRequired,
    isEstimatingLayout: PT.bool.isRequired,
    bookReady: PT.bool.isRequired,
    match: PT.shape({
      params: PT.shape({
        id: PT.string
      })
    })
  }

  componentDidMount() {
    const { id } = this.props.match.params
    model.initBook(id)
  }

  handleCalcDone = result => {
    model.putLayoutInfo(result)
  }

  render() {
    const { book, bookStatus, bookNodes, isEstimatingLayout, clientCurrPage, bookReady, pages } = this.props
    const isFetching = bookStatus === FETCH_STATUS.FETCHING
    const currentPage = pages[clientCurrPage - 1]
    return (
      <div>
        {
          isFetching
            ? 'loading'
            : (
              <div>
                {book.title}
                {book.author}
                {
                  isEstimatingLayout && (
                    <LayoutEstimator
                      onCalcDone={this.handleCalcDone}
                      sections={bookNodes}
                    />
                  )
                }
                <div onClick={() => { model.$set('clientCurrPage', clientCurrPage - 1) }}>prev</div>
                <div onClick={() => { model.$set('clientCurrPage', clientCurrPage + 1) }}>Next</div>
                {
                  bookReady && (
                    <BookPage page={currentPage} />
                  )
                }
              </div>
            )
        }
      </div>
    )
  }
}

export default model.connect(Book, (state, props) => {
  const bookId = props.match.params.id
  return {
    ...state.book,
    bookNodes: _.get(state, ['book', 'bookNodes', bookId], []),
    book: _.get(state, ['shelf', 'localBooks', bookId], {
      content: []
    }),
    pages: _.get(state, ['book', 'bookPages', bookId], [])
  }
})
