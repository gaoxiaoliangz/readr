import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchUserAuthInfo, fetchBookList } from 'actions'
import BookListSection from 'components/BookListSection'
import Loading from 'components/Loading'
import CandyBox from 'components/CandyBox'

class Home extends Component {

  static fetchData({store}) {
    return store.dispatch(fetchBookList())
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBookList()
  }

  render() {
    let bookList = this.props.book.bookList
    let list = [
      {
        name: "测试1",
        link: "/"
      },
      {
        name: "测试1",
        link: "/"
      },
      {
        name: "测试1",
        link: "/"
      },
      {
        name: "测试1",
        link: "/"
      },
      {
        name: "测试1",
        link: "/"
      },
      {
        name: "测试1",
        link: "/"
      }
    ]

    return (
      <div>
        <div className="row">
          <div className="col-md-8">
            <BookListSection bookList={bookList} title="新书速递" moreLink="/"/>
            <BookListSection bookList={bookList} title="近期热门" />
            <BookListSection bookList={bookList} title="推荐书单" />
          </div>
          <div className="col-md-4">
            <CandyBox title="近期热门" list={list} />
            <CandyBox title="最近阅读" list={list} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    book: state.book
  }),
  { fetchBookList }
)(Home)
