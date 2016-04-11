import React, { Component } from 'react'
import { Appbar, Button, Container } from 'muicss/react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { fetchUserAuthInfo, fetchBookInfo } from 'actions'

import Branding from 'components/Branding'


class BookInfo extends Component {
  constructor(props) {
    super(props)
    this.bookId = props.params.id
  }

  componentDidMount() {
    this.props.fetchUserAuthInfo()
    this.props.fetchBookInfo(this.bookId, `books/${this.bookId}`).then(getState => {
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    let bookInfo = this.props.bookInfo?this.props.bookInfo:{}

    return (
      <div className="page-book-info">
        <Branding user={this.props.user} />
        <Container>
          <div className="book-info content-container">
            <h1 className="page-title book-name">{bookInfo.title}</h1>
            <div className="book-author">
              <strong>{bookInfo.author}</strong>
            </div>
            {
              bookInfo.image?(
                <div className="book-cover">
                  <img src={bookInfo.image} />
                </div>
              ):null
            }
            {
              bookInfo.title?(
                <Link to={`/book/${bookInfo.id}`}><Button color="primary">阅读</Button></Link>
              ):null
            }
            {
              bookInfo.author_intro?(
                <div className="book-author-intro">
                  <h2>作者简介</h2>
                  <p>{bookInfo.author_intro}</p>
                </div>
              ):null
            }
            {
              bookInfo.summary?(
                <div className="book-summary">
                  <h2>内容简介</h2>
                  <p>{bookInfo.summary}</p>
                </div>
              ):null
            }
            <p><a target="_blank" href={`http://book.douban.com/subject/${bookInfo.book_id}`}>在豆瓣查看</a></p>
          </div>
        </Container>
      </div>
    )
  }
}

export default connect(
  state =>({
    bookInfo: state.book.meta,
    user: state.user
  }),
  { fetchBookInfo, fetchUserAuthInfo }
)(BookInfo)
