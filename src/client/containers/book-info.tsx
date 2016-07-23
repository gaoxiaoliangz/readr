import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBook } from '../actions'
import Loading from '../elements/loading'
import { Button } from '../elements/form'
import _ from 'lodash'
import Body from '../side-effects/body'

class BookInfo extends Component<any, any> {

  bookId: string

  static fetchData({store, params}) {
    return store.dispatch(fetchBook(params.id))
  }

  constructor(props) {
    super(props)
    this.bookId = props.params.id
  }

  componentDidMount() {
    this.props.fetchBook(this.bookId)
  }

  render() {
    let bookInfo = this.props.bookInfo ? this.props.bookInfo : {}

    return (
      <article className="book-info content-container">
        <Body className="book-info" />
        {
          _.isEmpty(bookInfo) ? (
            <Loading />
          ) : null
        }
        <header className="book-info-header">
          <div className="left-col">
            {
              bookInfo.cover ? (
                <div className="book-cover">
                  <img src={bookInfo.cover} />
                </div>
              ) : null
            }
          </div>
          <div className="right-col">
            <h1 className="book-name">{bookInfo.title}</h1>
            <div className="book-author">
              <strong>作者：{bookInfo.author ? bookInfo.author.map(a => a.refData ? a.refData.name : '').join(', ') : ''}</strong>
            </div>
            {
              bookInfo.title ? (
                <div>
                  <Button to={`/viewer/book/${bookInfo.id}`} color="blue">阅读</Button>
                  <Button>添加到书架</Button>
                  <Button>标记为已读</Button>
                  <Button>收藏</Button>
                </div>
              ) : null
            }
            {/*<p><a target="_blank" href={`http://book.douban.com/subject/${bookInfo.book_id}`}>在豆瓣查看</a></p>*/}
          </div>
        </header>
        {
          bookInfo.description ? (
            <div>
              <h2>内容简介</h2>
              <p>{bookInfo.description}</p>
            </div>
          ) : null
        }
      </article>
    )
  }
}


export default connect(
  (state, ownProps: any) => {
    return { bookInfo: state.entities.books[ownProps.params.id] }
  },
  { fetchBook } as any
)(BookInfo)
