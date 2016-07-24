import React, { Component } from 'react'
import { connect } from 'react-redux'
import Switcher from '../elements/switcher'
import BookListSection from '../components/book-list-section'
import { fetchBooks, fetchCollections } from '../actions'
import { Tab, Tabs } from '../elements/tab'

interface Props {
  fetchBooks: any
  newestBooks: any
}

class Archive extends Component<Props, any> {

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
          <ul className="left dropdown-menu">
            <li>时间</li>
            <li>热度</li>
            <li>名称</li>
          </ul>
          <div className="right">
            <Switcher title="不显示我读过的" value={false} />
          </div>
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
)(Archive as any)