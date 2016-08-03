import React, { Component } from 'react'
import { connect } from 'react-redux'
import Switcher from '../../elements/Switcher'
import BookListSection from '../../components/BookListSection'
import { fetchBooks, fetchCollections } from '../../store/actions'
import { Tab, Tabs } from '../../elements/Tab'

interface Props {
  fetchBooks: any
  newestBooks: any
}

class Browse extends Component<Props, any> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    return (
      <div className="archive page-content">
        <div className="page-header">
          <Tabs>
            <Tab title="全部">
              <BookListSection bookEntities={this.props.newestBooks} />
            </Tab>
            <Tab title="悬疑">
              coming soon ...
            </Tab>
            <Tab title="古典">
              coming soon ...
            </Tab>
            <Tab title="其它">
              coming soon ...
            </Tab>
          </Tabs>
        </div>
        <div className="page-load-more">加载更多</div>
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
  { fetchBooks, fetchCollections }
)(Browse as any)
