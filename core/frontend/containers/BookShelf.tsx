import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchBooks } from 'actions/index'
import BookListSection from 'components/BookListSection'

class BookShelf extends Component<any, any> {

  static fetchData({store, params}) {
    return store.dispatch(fetchBooks())
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBooks('user')
  }

  render() {
    let bookList = this.props.bookListUser

    return (
      <div>
        <BookListSection bookList={bookList} title="我的书架" />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pagination: { filteredBooks },
    entities: { books }
  } = state

  const genList = (whichPagination) => (
    whichPagination ? whichPagination.ids.map(id => books[id]) : []
  )

  return {
    bookListUser: genList(filteredBooks['user']),
  }
}

export default connect(
  mapStateToProps,
  { fetchBooks } as any
)(BookShelf)
