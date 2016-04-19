import React, { Component } from 'react'
import { Appbar, Button, Container } from 'muicss/react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { fetchUserAuthInfo, fetchBookInfo } from 'actions'

import Branding from 'components/Branding'
import Colophon from 'components/Colophon'

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
          <article className="book-info content-container">
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
                    <Link to={`/book/${bookInfo.id}`}><Button color="primary">阅读</Button></Link>
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
        </Container>
        <Colophon />
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
