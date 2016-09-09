import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBook } from '../../store/actions'
import Loading from '../../elements/Loading'
import { Button } from '../../elements/_form'
import _ from 'lodash'
import Body from '../../components/Body'
import CSSModules from 'react-css-modules'
const styles = require('./BookDetail.css')

@CSSModules(styles, {
  allowMultiple: true
})
class BookDetail extends Component<any, any> {

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
      <article className="content-container">
        <Body className="book-info" />
        {
          _.isEmpty(bookInfo) && (
            <Loading />
          )
        }
        <header styleName="book-info-header">
          <div className="left-col">
            {
              bookInfo.cover && (
                <div styleName="book-cover">
                  <img styleName="img" src={bookInfo.cover} />
                </div>
              )
            }
          </div>
          <div className="right-col">
            <h1 styleName="book-name">{bookInfo.title}</h1>
            <div styleName="book-author">
              <strong>作者：{bookInfo.authors && bookInfo.authors.map(a => a.name).join(', ')}</strong>
            </div>
            {
              bookInfo.title && (
                <div>
                  <Button to={`/viewer/book/${bookInfo.id}`} color="blue">阅读</Button>
                </div>
              )
            }
            {/*<p><a target="_blank" href={`http://book.douban.com/subject/${bookInfo.book_id}`}>在豆瓣查看</a></p>*/}
          </div>
        </header>
        {
          bookInfo.description && (
            <div>
              <h2 styleName="desc">内容简介</h2>
              <p>{bookInfo.description}</p>
            </div>
          )
        }
      </article>
    )
  }
}

export default connect(
  (state, ownProps: any) => {
    return { bookInfo: state.entities.books[ownProps.params.id] }
  },
  { fetchBook }
)(BookDetail)
