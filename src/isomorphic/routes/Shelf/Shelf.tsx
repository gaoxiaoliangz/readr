import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router'
import { fetchShelf } from '../../store/actions'
import BookListSection from '../../components/BookListSection'
import Container from '../../elements/_layout/Container'
import _ from 'lodash'

interface IProps {
  shelf?: any
  fetchShelf?: any
}

class Shelf extends Component<IProps, {}> {

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
      <Container>
        <BookListSection bookEntities={bookList} title="我的书架" />
      </Container>
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
