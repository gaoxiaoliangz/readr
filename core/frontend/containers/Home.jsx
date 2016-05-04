import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchUserAuthInfo, fetchBookList } from 'actions'
import BookListSection from 'components/BookListSection'
import Loading from 'components/Loading'
import CandyBox from 'components/CandyBox'

class Home extends Component {

  static fetchData({store}) {
    return store.dispatch(fetchBookList('newest'))
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBookList('newest')
    this.props.fetchBookList('user')
  }

  render() {
    let bookList = this.props.bookListNewest
    let hotList = bookList.map((book, index) => {
      return {
        name: book.title,
        link: `/book/${book.id}`
      }
    })
    let userList = this.props.bookListUser.map((book, index) => {
      return {
        name: book.title,
        link: `/book/${book.id}`
      }
    })

    return (
      <div>
        <div className="row">
          <div className="col-md-8">
            <BookListSection bookList={bookList} title="新书速递" moreLink="/"/>
            <BookListSection bookList={bookList} title="近期热门" />
            <BookListSection bookList={bookList} title="推荐书单" />
          </div>
          <div className="col-md-4">
            <CandyBox title="近期热门" list={hotList} />
            <CandyBox title="最近阅读" list={userList} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pagination: { bookList },
    entities: { books }
  } = state

  const genList = (whichPagination) => (
    whichPagination?whichPagination.ids.map(id => books[id]):[]
  )

  return {
    bookListUser: genList(bookList['user']),
    bookListNewest: genList(bookList['newest'])
  }
}

export default connect(
  mapStateToProps,
  { fetchBookList }
)(Home)
