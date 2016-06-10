import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Switcher from '../components/Switcher'
import BookListSection from 'components/BookListSection'
import { fetchBooks, fetchCollections } from 'actions/index'

interface Props {
  name: string;
  fetchBooks: (string) => void;
  newestBooks: Array<any>;
}

class Archive extends Component<Props, any> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBooks('newest')
  }

  render() {
    let newestBooks = this.props.newestBooks

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
        <BookListSection bookList={newestBooks} />
        <div className="page-load-more">加载更多</div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pagination: { filteredBooks },
    entities: { books, collections }
  } = state

  const genList = (whichPagination) => (
    whichPagination?whichPagination.ids.map(id => books[id]):[]
  )

  return {
    userBooks: genList(filteredBooks['user']),
    newestBooks: genList(filteredBooks['newest']),
    session: state.session,
    collection: (() => {
      for(let prop in collections) {
        return collections[prop]
      }
    })()
  }
}

export default connect(
  mapStateToProps,
  { fetchBooks, fetchCollections } as any
)(Archive as any)