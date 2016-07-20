import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchBooks, fetchShelf } from 'actions/index'
import BookListSection from 'components/BookListSection'


interface Props {
  fetchBooks?: any
  newestBooks?: any
  fetchShelf?: any
}

class BookShelf extends Component<Props, {}> {

  static fetchData({store, params}) {
    return store.dispatch(fetchBooks())
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchShelf()
  }

  render() {
    let bookList = this.props.newestBooks

    return (
      <div>
        <BookListSection bookEntities={bookList} title="我的书架" />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    newestBooks: state.pagination.books.newest
      ? state.pagination.books.newest.ids.map(id => state.entities.books[id])
      : []
  }
}

export default connect(
  mapStateToProps,
  { fetchBooks, fetchShelf }
)(BookShelf as any)
