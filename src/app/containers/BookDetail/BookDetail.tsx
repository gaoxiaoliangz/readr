import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from '../../components/Loading'
import { Button } from '../../components/form'
import _ from 'lodash'
import DocContainer from '../../components/DocContainer'
import CSSModules from 'react-css-modules'
import styles from './BookDetail.scss'
import { gql, graphql } from 'react-apollo'

type Data = State.Apollo<{
  book: {
    id: string
    title: string
    authors: {
      name: string
    }[]
    description: string
    cover: string
  }
}>

interface Props {
  data: Data
}

@CSSModules(styles)
class BookDetail extends Component<Props, {}> {

  bookId: string

  constructor(props) {
    super(props)
    this.bookId = props.params.id
  }

  render() {
    const isFetching = this.props.data.loading
    const bookInfo = this.props.data.book || {} as any

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
                            <Button styleName="btn-read" to={`/viewer/v2/book/${bookInfo.id}`} color="blue">阅读</Button>
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

const BookDetailWithData = graphql(gql`
  query queryBooks($id: ID!) {
    book(id: $id) {
      id
      title
      cover
      description
      authors {
        name
      }
    }
  }
`, {
  options: (props) => {
    return {
      variables: {
        id: props.params.id
      }
    }
  }
})(BookDetail)

const mapStateToProps = (state, ownProps) => ({})

export default connect<{}, {}, Props>(
  mapStateToProps
)(BookDetailWithData)
