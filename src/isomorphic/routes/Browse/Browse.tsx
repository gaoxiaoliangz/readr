import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../elements/_form/Button'
import BookListSection from '../../components/BookListSection'
import { loadBooks, fetchCollections } from '../../store/actions'
import Container from '../../elements/_layout/Container'
import _ from 'lodash'
import * as selectors from '../../store/selectors'
import CSSModules from 'react-css-modules'
const styles: any = require('./Browse.scss')

interface IProps {
  loadBooks: loadBooks
  newestBooks: any
  nextPage: number
}

@CSSModules(styles)
class Browse extends Component<IProps, {}> {

  static fetchData({store}) {
    return store.dispatch(loadBooks())
  }

  constructor(props) {
    super(props)
  }

  loadMore(page) {
    this.props.loadBooks({ page })
  }

  componentDidMount() {
    this.props.loadBooks()
  }

  render() {
    const { nextPage } = this.props

    return (
      <Container className="archive">
        <div className="page-header">
          <BookListSection title="所有书籍" bookEntities={this.props.newestBooks} />
          {
            nextPage !== 0 && (
              <Button
                onClick={() => { this.loadMore(nextPage) } }
                styleName="btn-load-more"
                width={200}
                color="white"
              >加载更多</Button>
            )
          }
        </div>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const page = selectors.common.currentPage('books')(state)

  return {
    newestBooks: selectors.books(undefined, page)(state),
    nextPage: selectors.common.nextPage('books')(state)
  }
}

export default connect(
  mapStateToProps,
  { loadBooks, fetchCollections }
)(Browse as any)
