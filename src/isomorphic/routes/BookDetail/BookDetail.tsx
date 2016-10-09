import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadBook } from '../../store/actions'
import Loading from '../../elements/Loading'
import { Button } from '../../elements/_form'
import _ from 'lodash'
import DocContainer from '../../containers/DocContainer'
import CSSModules from 'react-css-modules'
import * as selectors from '../../store/selectors'
const styles = require('./BookDetail.scss')

interface Props {
  loadBook: loadBook
  bookInfo: any
}

@CSSModules(styles, {
  allowMultiple: true
})
class BookDetail extends Component<Props, {}> {

  bookId: string

  // static fetchData({store, params}) {
  //   return store.dispatch(loadBook(params.id))
  // }

  constructor(props) {
    super(props)
    this.bookId = props.params.id
  }

  componentDidMount() {
    this.props.loadBook(this.bookId)
  }

  render() {
    const { bookInfo } = this.props
    const isFetching = _.isEmpty(bookInfo)

    return (
      <DocContainer bodyClass="book-info" title={bookInfo.title}>
        <div className="container">
          <article styleName="book-info-container">
            <div styleName="book-detail">
              <header styleName="header">
                {
                  isFetching
                    ? <Loading />
                    : (
                      <div>
                        <div styleName="left-col">
                          {
                            bookInfo.cover && (
                              <div styleName="book-cover">
                                <img styleName="img" src={bookInfo.cover} />
                              </div>
                            )
                          }
                        </div>
                        <div styleName="right-col">
                          <h1 styleName="book-name">{bookInfo.title || '无标题'}</h1>
                          <div styleName="book-author">
                            <strong>作者：{bookInfo.authors && bookInfo.authors.map(a => a.name).join(', ') || '未知'}</strong>
                          </div>
                          <div>
                            <Button styleName="btn-read" to={`/viewer/book/${bookInfo.id}`} color="blue">阅读</Button>
                          </div>
                        </div>
                      </div>
                    )
                }
              </header>
              {
                bookInfo.description && (
                  <div styleName="content">
                    <h2 styleName="desc">内容简介</h2>
                    <p>{bookInfo.description}</p>
                  </div>
                )
              }
            </div>
          </article>
        </div>
      </DocContainer>
    )
  }
}

const mapStateToProps = (state, ownProps: any) => {
  const id = ownProps.params.id

  return {
    bookInfo: selectors.common.entity('books', id)(state)
  }
}

export default connect<{}, {}, Props>(
  mapStateToProps,
  { loadBook }
)(BookDetail)
