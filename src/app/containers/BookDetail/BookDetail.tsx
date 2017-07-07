import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from '../../components/form'
import _ from 'lodash'
import DocContainer from '../../components/DocContainer'
import CSSModules from 'react-css-modules'
import styles from './BookDetail.scss'
import { gql, graphql, compose } from 'react-apollo'
import Branding from '../Branding/Branding'
import Colophon from '../../components/Colophon/Colophon'
import Container from '../../components/Container/Container'
import { Tab, Tabs } from '../../components/Tab'
import BOOK_RECURSIVE_TOC from '../../graphql/fragments/BookRecursiveToc.gql'
import BOOK_INFO from '../../graphql/fragments/BookInfo.gql'
import BookToc from '../../components/BookToc'
import helpers from '../../helpers'
import withIndicator from '../../helpers/withIndicator'

type Data = State.Apollo<{
  book: Schema.Book
}>

interface Props {
  data: Data
}

class BookDetail extends Component<Props, {}> {

  bookId: string

  constructor(props) {
    super(props)
    this.bookId = props.params.id
  }

  render() {
    const bookInfo = this.props.data.book

    return (
      <DocContainer bodyClass="page-book-info" title={bookInfo.title}>
        <Branding />
        <Container>
          <article styleName="book-info-container">
            <div styleName="book-detail">
              <header styleName="header">
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
                      <Button styleName="btn-read" to={helpers.getReaderURI(bookInfo.id)} color="green">阅读</Button>
                    </div>
                  </div>
                </div>
              </header>
              <div styleName="content">
                <Tabs>
                  <Tab title="内容简介">
                    <p>{bookInfo.description}</p>
                  </Tab>
                  <Tab title="目录">
                    <BookToc
                      toc={bookInfo.toc}
                      linkTpl={(sectionId, hash) => {
                        if (hash) {
                          return helpers.getReaderURI(`${bookInfo.id}#${sectionId},${hash}`)
                        }
                        return helpers.getReaderURI(`${bookInfo.id}#${sectionId}`)
                      }}
                    />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </article>
        </Container>
        <Colophon />
      </DocContainer>
    )
  }
}

const withData = graphql(gql`
  query queryBooks($id: ID!) {
    book(id: $id) {
      ...BookInfo
      toc {
        ...BookRecursiveToc
      }
    }
  }
  ${BOOK_INFO}
  ${BOOK_RECURSIVE_TOC}
`, {
    options: (props) => {
      return {
        variables: {
          id: props.params.id
        }
      }
    }
  })

const mapStateToProps = (state, ownProps) => ({})

export default compose(
  withData,
  withIndicator(),
  connect(
    mapStateToProps
  ),
  CSSModules(styles)
)(BookDetail)
