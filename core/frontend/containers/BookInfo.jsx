import React, { Component } from 'react'
import { Appbar, Button, Container } from 'muicss/react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchUserAuthInfo, fetchBookInfo } from 'actions'
import Loading from 'components/Loading'
import Branding from 'components/Branding'
import Colophon from 'components/Colophon'
import _ from 'lodash'

class BookInfo extends Component {

  static fetchData({store, params}) {
    return store.dispatch(fetchBookInfo(params.id))
  }

  constructor(props) {
    super(props)
    this.bookId = props.params.id
  }

  componentDidMount() {
    this.props.fetchUserAuthInfo()
    this.props.fetchBookInfo(this.bookId)
  }

  render() {
    let bookInfo = this.props.bookInfo?this.props.bookInfo:{}

    return (
      <article className="book-info content-container">
        {
          _.isEmpty(bookInfo)?(
            <Loading />
          ):null
        }
        <header className="book-info-header">
          <div className="left-col">
            {
              bookInfo.image?(
                <div className="book-cover">
                  <img src={bookInfo.image} />
                </div>
              ):null
            }
          </div>
          <div className="right-col">
            <h1 className="book-name">{bookInfo.title}</h1>
            <div className="book-author">
              <strong>作者：{bookInfo.author}</strong>
            </div>
            {
              bookInfo.title?(
                <Link to={`/viewer/book/${bookInfo.id}`}><Button color="primary">阅读</Button></Link>
              ):null
            }
            <p><a target="_blank" href={`http://book.douban.com/subject/${bookInfo.book_id}`}>在豆瓣查看</a></p>
          </div>
        </header>
        {
          bookInfo.author_intro?(
            <div>
              <h2>作者简介</h2>
              <p>{bookInfo.author_intro}</p>
            </div>
          ):null
        }
        {
          bookInfo.summary?(
            <div>
              <h2>内容简介</h2>
              <p>{bookInfo.summary}</p>
            </div>
          ):null
        }
      </article>
    )
  }
}

export default connect(
  (state, ownProps) =>({
    bookInfo: state.entities.books[ownProps.params.id],
    user: state.user
  }),
  { fetchBookInfo, fetchUserAuthInfo }
)(BookInfo)
