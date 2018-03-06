import React, { Component } from 'react'
import _ from 'lodash'
import PT from 'prop-types'
import model from './bookModel'
import { FETCH_STATUS } from '../../constants'
import LayoutEstimator from './LayoutEstimator'

class Book extends Component {
  static propTypes = {
    book: PT.object.isRequired,
    bookNodes: PT.array.isRequired,
    bookStatus: PT.string.isRequired,
    isEstimatingLayout: PT.bool.isRequired,
    match: PT.shape({
      params: PT.shape({
        id: PT.string
      })
    })
  }

  componentDidMount() {
    const { id } = this.props.match.params
    model.initBook(id)
    // model.$watch({
    //   path: 'isEstimatingLayout',
    //   handler: ({ value }) => {
    //     if (value) {
    //       this.calcBook()
    //     }
    //   }
    // })
  }

  handleCalcDone = result => {
    model.putLayoutInfo(result)
  }

  render() {
    const { book, bookStatus, bookNodes, isEstimatingLayout } = this.props
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
                {
                  isEstimatingLayout && (
                    <LayoutEstimator
                      onCalcDone={this.handleCalcDone}
                      sections={bookNodes}
                    />
                  )
                }
                {/* {
                  bookNodes.map(section => {
                    return <ContentRenderer key={section.sectionId} nodes={section.nodes} />
                  })
                } */}
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
    bookNodes: _.get(state, ['book', 'bookNodes', props.match.params.id], []),
    book: _.get(state, ['shelf', 'localBooks', props.match.params.id], {
      content: []
    })
  }
})
