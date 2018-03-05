import React, { Component } from 'react'
import _ from 'lodash'
import PT from 'prop-types'
import model from './bookModel'
import { FETCH_STATUS } from '../../constants'
import ContentRenderer from './ContentRenderer'

class Book extends Component {
  static propTypes = {
    book: PT.object.isRequired,
    bookStatus: PT.string.isRequired,
    match: PT.shape({
      params: PT.shape({
        id: PT.string
      })
    })
  }

  componentDidMount() {
    const { id } = this.props.match.params
    model.loadBook(id)
  }

  render() {
    const { book, bookStatus } = this.props
    const isFetching = bookStatus === FETCH_STATUS.FETCHING
    return (
      <div>
        {
          isFetching
            ? 'loading'
            : (
              <div>
                {book.title}
                {book.author}
                <ContentRenderer htmlString={_.get(book, 'content[0].htmlString')} />
              </div>
            )
        }
      </div>
    )
  }
}

export default model.connect(Book, (state, props) => {
  return {
    ...state.book,
    book: _.get(state, ['shelf', 'localBooks', props.match.params.id], {
      content: []
    })
  }
})
