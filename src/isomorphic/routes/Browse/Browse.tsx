import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Switcher from '../../elements/Switcher'
import BookListSection from '../../components/BookListSection'
import { fetchBooks, fetchCollections } from '../../store/actions'
import Container from '../../elements/_layout/Container'
import _ from 'lodash'

interface IProps {
  fetchBooks: any
  newestBooks: any
  nextPage: number
}

class Browse extends Component<IProps, {}> {

  constructor(props) {
    super(props)
  }

  loadMore(page) {
    this.props.fetchBooks({ flowType: 'newest', page })
  }

  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    const { nextPage } = this.props

    return (
      <Container className="archive">
        <div className="page-header">
          <BookListSection title="所有书籍" bookEntities={this.props.newestBooks} />
          {
            nextPage !== 0 && (
              <div onClick={() => { this.loadMore(nextPage) } } className="page-load-more">加载更多</div>
            )
          }
        </div>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    newestBooks: state.pagination.books.newest
      ? state.pagination.books.newest.ids.map(id => state.entities.books[id])
      : [],
    nextPage: _.get(state.pagination, 'books.newest.nextPage', 0)
  }
}

export default connect(
  mapStateToProps,
  { fetchBooks, fetchCollections }
)(Browse as any)
