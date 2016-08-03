import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router'
import { fetchShelf } from '../../store/actions'
import BookListSection from '../../components/BookListSection'
import _ from 'lodash'

interface Props {
  shelf?: any
  fetchShelf?: any
}

class Shelf extends Component<Props, {}> {

  static fetchData({store, params}) {
    return store.dispatch(fetchShelf())
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchShelf()
  }

  render() {
    let bookList = this.props.shelf

    return (
      <div>
        <BookListSection bookEntities={bookList} title="我的书架" />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    shelf: _.get(state.payloads.bookShelf, 'data', [])
  }
}

export default connect(
  mapStateToProps,
  { fetchShelf }
)(Shelf as any)
