import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import BookList from '../../components/BookList'
import Container from '../../components/Container'
import { Tab, Tabs } from '../../components/Tab'
import Branding from '../Branding/Branding'
import Colophon from '../../components/Colophon/Colophon'
import DocContainer from '../../components/DocContainer'
import { graphql, compose } from 'react-apollo'
import CSSModules from 'react-css-modules'
import styles from './Shelf.scss'
import FileUploader from '../../components/FileUploader'
import Button from '../../components/Button'
import { sendNotification, openConfirmModal } from '../../actions'
import Loading from '../../components/Loading/Loading'
import helpers from '../../helpers'
import REMOVE_READING_PROGRESS_MUTATION from '../../graphql/mutations/RemoveReadingProgress.gql'
import DEL_BOOK_MUTATION from '../../graphql/mutations/DelBook.gql'
import SHELF_QUERY from './Shelf.gql'

type Data = State.Apollo<{
  viewer: {
    readingHistory: Schema.Connection<Schema.Book & {
      percentage: number
      bookId: string
    }>
    books: Schema.Connection<Schema.Book>
  }
}>

interface IProps {
  data: Data
  sendNotification: typeof sendNotification
  openConfirmModal: typeof openConfirmModal
  removeReadingProgress: typeof ApolloMutation
  delBook: typeof ApolloMutation
}

interface State {
  isUploading?: boolean
}

class Shelf extends Component<IProps, State> {

  uploadComp: any

  constructor(props) {
    super(props)
    this.state = {
      isUploading: false
    }
  }

  _handleDelProgress = (book) => {
    this.props.openConfirmModal({
      title: '确定删除',
      content: `确定从最近阅读中删除《${book.title}》吗？`,
      onConfirm: (close) => {
        this.props.removeReadingProgress({
          variables: {
            bookId: book.id
          }
        })
          .then(() => {
            this.props.data.refetch()
            this.props.sendNotification('删除成功！')
            close()
          })
          .catch(err => {
            close()
            this.props.sendNotification(err.message, 'error')
          })
      }
    })
  }

  _handleDelUploadedBook = (book) => {
    this.props.openConfirmModal({
      title: '确定删除',
      content: `确定从我的上传中删除《${book.title}》吗？（该操作不可撤销）`,
      onConfirm: (close) => {
        this.props.delBook({
          variables: {
            id: book.id
          }
        })
          .then(() => {
            this.props.data.refetch()
            this.props.sendNotification('删除成功！')
            close()
          })
          .catch(err => {
            close()
            this.props.sendNotification(err.message, 'error')
          })
      }
    })
  }

  _handleUploadedLoadMore = () => {
    const lastCursor = _.last(this.props.data.viewer.books.edges).cursor
    this.props.data.fetchMore({
      variables: {
        booksAfter: lastCursor
      },
      updateQuery: (previousResult: Data, { fetchMoreResult }: { fetchMoreResult: Data }) => {
        const edges = [...previousResult.viewer.books.edges, ...fetchMoreResult.viewer.books.edges]
        const cloned = _.cloneDeep(previousResult)
        cloned.viewer.books = fetchMoreResult.viewer.books
        cloned.viewer.books.edges = edges
        return cloned
      }
    })
  }

  _renderUploader() {
    return (
      <FileUploader
        style={{
          display: 'block'
        }}
        url="/api/books"
        accept=".txt,.epub"
        name="book-file"
        onStart={() => {
          this.setState({
            isUploading: true
          })
        }}
        onSuccess={result => {
          this.props.sendNotification(`${result.title} 添加成功`)
          this.props.data.refetch()
          this.setState({
            isUploading: false
          })
        }}
        onError={error => {
          this.props.sendNotification(error.message, 'error')
          this.setState({
            isUploading: false
          })
        }}
        fileFieldName="bookfile"
      >
        <div className={styles.uploader}>
          <h2>选择书籍（.epub 文件）</h2>
          <p>你上传的书籍仅对你自己可见</p>
        </div>
      </FileUploader>
    )
  }

  _renderContent() {
    const { data: { viewer: { books } } } = this.props
    return (
      <Container
        style={{
          minHeight: 400
        }}
      >
        <Tabs style={{ marginTop: 20 }}>
          <Tab title="最近阅读">
            <BookList
              onDelBook={this._handleDelProgress}
              bookEntities={this.props.data.viewer.readingHistory.edges.map(edge => {
                return {
                  ...edge.node,
                  id: edge.node.bookId,
                  to: helpers.getReaderURI(edge.node.bookId),
                  progressId: edge.node.id
                }
              })}
            />
          </Tab>
          <Tab title="我的上传">
            <div>
              <BookList
                bookEntities={books.edges.map(edge => {
                  return edge.node
                })}
                prependList={[this._renderUploader()]}
                onDelBook={this._handleDelUploadedBook}
              />
              {
                this.props.data.viewer.books.pageInfo.hasNextPage && (
                  <Button
                    onClick={this._handleUploadedLoadMore}
                    width={200}
                    color="green"
                    size="large"
                  >{this.props.data.loading ? '加载中 ...' : '更多'}</Button>
                )
              }
            </div>
          </Tab>
        </Tabs>
      </Container>
    )
  }

  render() {
    return (
      <DocContainer title="我的书架" bodyClass="page-shelf">
        <Branding />
        {
          this.state.isUploading && (
            <Loading useNProgress />
          )
        }
        {
          this.props.data.loading
            ? (
              <Loading showPlaceholder />
            )
            : this._renderContent()
        }
        <Colophon />
      </DocContainer>
    )
  }
}

export default compose(
  graphql(SHELF_QUERY, {
    options: () => {
      return {
        variables: {
          booksFirst: 6
        }
      }
    }
  }),
  graphql(REMOVE_READING_PROGRESS_MUTATION, {
    name: 'removeReadingProgress'
  }),
  graphql(DEL_BOOK_MUTATION, {
    name: 'delBook'
  }),
  connect(
    null,
    { sendNotification, openConfirmModal }
  ),
  CSSModules(styles)
)(Shelf)
