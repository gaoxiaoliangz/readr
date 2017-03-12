import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Button'
import BookListSection from '../../components/BookListSection'
import { loadBooks, fetchCollections } from '../../actions'
import Container from '../../components/Container'
import _ from 'lodash'
import * as selectors from '../../selectors'
import CSSModules from 'react-css-modules'
const styles = require('./Browse.scss')

interface Props {
  loadBooks: typeof loadBooks
  newestBooks: any
  nextPage: number
  isBooksFetching: boolean
}

@CSSModules(styles)
class Browse extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  loadMore(page = 1) {
    this.props.loadBooks({ page }, 'browse')
  }

  componentWillMount() {
    this.loadMore()
  }

  render() {
    const { nextPage, isBooksFetching } = this.props

    return (
      <Container className="archive">
        <BookListSection
          title="所有书籍"
          bookEntities={this.props.newestBooks}
          isFetching={isBooksFetching}
          />
        {
          nextPage !== 0 && (
            <Button
              onClick={() => { this.loadMore(nextPage) } }
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
    newestBooks: selectors.books('browse')(state),
    isBooksFetching: selectors.common.isPaginationFetching('books', 'browse')(state),
    nextPage: selectors.common.nextPage('books', 'browse')(state)
  }
}

export default connect(
  mapStateToProps,
  { loadBooks, fetchCollections }
)(Browse as any)
