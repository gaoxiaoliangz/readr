import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Switcher from '../components/Switcher'
import BookListSection from 'components/BookListSection'
import { fetchBooks, fetchCollections } from 'actions/index'

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
          <ul className="categories">
            <li className="current">全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
          </ul>
          <ul className="left dropdown-menu">
            <li>时间</li>
            <li>热度</li>
            <li>名称</li>
          </ul>
          <div className="right">
            <div className="label">不显示我读过的</div>
            <Switcher on={false} />
          </div>
        </div>
        <BookListSection bookEntities={this.props.newestBooks} />
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