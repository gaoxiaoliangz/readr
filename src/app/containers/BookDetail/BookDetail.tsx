import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadBookInfo } from '../../actions/api'
import Loading from '../../components/Loading'
import { Button } from '../../components/form'
import _ from 'lodash'
import DocContainer from '../../components/DocContainer'
import CSSModules from 'react-css-modules'
import * as selectors from '../../selectors'
import styles from './BookDetail.scss'
import schemas from '../../schemas'

interface Props {
  loadBookInfo: typeof loadBookInfo
  bookInfo: SelectedEntity
}

@CSSModules(styles)
class BookDetail extends Component<Props, {}> {

  bookId: string

  constructor(props) {
    super(props)
    this.bookId = props.params.id
  }

  componentWillMount() {
    this.props.loadBookInfo(this.bookId)
  }

  render() {
    const { bookInfo } = this.props
    const isFetching = bookInfo.fetchStatus === 'loading'

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
    bookInfo: selectors.entity(schemas.BOOK, id)(state)
  }
}

export default connect<{}, {}, Props>(
  mapStateToProps,
  { loadBookInfo }
)(BookDetail)
