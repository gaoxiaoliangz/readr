import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Switcher from '../../elements/Switcher'
import BookListSection from '../../components/BookListSection'
import { fetchBooks, fetchCollections } from '../../store/actions'
import { Tab, Tabs } from '../../elements/Tab'
import _ from 'lodash'
import parseQueryString from '../../utils/parseQueryString'

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
      <div className="archive page-content">
        <div className="page-header">
          <Tabs>
            <Tab title="全部">
              <BookListSection bookEntities={this.props.newestBooks} />
              {
                nextPage !== 0 && (
                  <div onClick={() => { this.loadMore(nextPage) } } className="page-load-more">加载更多</div>
                )
              }
            </Tab>
            <Tab title="其它分类">
              空
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const nextPageUrl = _.get(state.pagination, 'books.newest.nextPageUrl', '') || ''
  const nextPage = _.get(parseQueryString(nextPageUrl.split('?')[1] || ''), 'page', 0)

  return {
    newestBooks: state.pagination.books.newest
      ? state.pagination.books.newest.ids.map(id => state.entities.books[id])
      : [],
    nextPage
  }
}

export default connect(
  mapStateToProps,
  { fetchBooks, fetchCollections }
)(Browse as any)
