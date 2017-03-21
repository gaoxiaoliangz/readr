import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Button'
import BookListSection from '../../components/BookListSection'
import { loadBooks } from '../../actions/api'
import Container from '../../components/Container'
import _ from 'lodash'
import * as selectors from '../../selectors'
import CSSModules from 'react-css-modules'
import styles from './Browse.scss'

interface Props {
  bookList: SelectedPagination
  loadBooks: typeof loadBooks
}

@CSSModules(styles)
class Browse extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  loadMore(page = 1) {
    this.props.loadBooks(page)
  }

  componentWillMount() {
    this.loadMore()
  }

  render() {
    const { bookList } = this.props
    const nextPage = _.get(bookList, 'next.page', 0)
    const isBooksFetching = bookList.fetchStatus === 'loading'

    const flattenPages = (pages) => {
      return _.reduce(pages, (a: any[], b) => {
        return a.concat(b)
      }, [])
    }

    const pages = flattenPages(bookList.pages)

    return (
      <Container className="archive">
        <BookListSection
          title="所有书籍"
          bookEntities={pages}
          isFetching={isBooksFetching}
        />
        {
          nextPage !== 0 && (
            <Button
              onClick={() => { this.loadMore(nextPage) }}
              styleName="btn-load-more"
              width={200}
              color="white"
            >{isBooksFetching ? '加载中 ...' : '加载更多'}</Button>
          )
        }
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    bookList: selectors.pagination.bookList(state)
  }
}

export default connect(
  mapStateToProps,
  { loadBooks }
)(Browse)
