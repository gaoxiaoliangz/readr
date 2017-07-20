import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import BookList from '../../components/BookList'
import Container from '../../components/Container'
import { Tab, Tabs } from '../../components/Tab'
import Branding from '../Branding/Branding'
import Colophon from '../../components/Colophon/Colophon'
import DocContainer from '../../components/DocContainer'
import VIEWER_READING_HISTORY from '../../graphql/fragments/ViewerReadingHistory.gql'
import { graphql, compose, gql } from 'react-apollo'
import withIndicator from '../../helpers/withIndicator'
import CSSModules from 'react-css-modules'
import styles from './Shelf.scss'
import FileUploader from '../../components/FileUploader'
import UserUploadedBooks from '../UserUploadedBooks/UserUploadedBooks'
import { sendNotification } from '../../actions'
import Loading from '../../components/Loading/Loading'
import helpers from '../../helpers'

type Data = State.Apollo<{
  viewer: {
    readingHistory: Schema.Connection<{
      id: string
      bookId: string
      title: string
      description: string
      percentage: number
      authors: any[]
      cover: string
    }>
  }
}>

interface IProps {
  data: Data
  sendNotification: typeof sendNotification
}

interface State {
  isUploading?: boolean
  showUploads?: boolean
}

class Shelf extends Component<IProps, State> {

  uploadComp: any

  constructor(props) {
    super(props)
    this.state = {
      isUploading: false,
      showUploads: true
    }
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
          this.setState({
            isUploading: false,
            showUploads: false
          }, () => {
            // very hacky, not recommended!
            this.setState({
              showUploads: true
            })
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

  render() {
    return (
      <DocContainer title="我的书架" bodyClass="page-shelf">
        <Branding />
        {
          this.state.isUploading && (
            <Loading useNProgress />
          )
        }
        <Container
          style={{
            minHeight: 400
          }}
        >
          <Tabs style={{ marginTop: 20 }}>
            <Tab title="最近阅读">
              <BookList
                bookEntities={this.props.data.viewer.readingHistory.edges.map(edge => {
                  return {
                    ...edge.node,
                    id: edge.node.bookId,
                    to: helpers.getReaderURI(edge.node.bookId)
                  }
                })}
              />
            </Tab>
            <Tab title="我的上传">
              {
                this.state.showUploads && (
                  <UserUploadedBooks
                    ref={ref => this.uploadComp = ref}
                    prependList={[this._renderUploader()]}
                  />
                )
              }
            </Tab>
          </Tabs>
        </Container>
        <Colophon />
      </DocContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}

const withData = graphql(gql`
  query Shelf {
    viewer {
      id
      readingHistory {
        ...ViewerReadingHistory
      }
    }
  }
  ${VIEWER_READING_HISTORY}
`)

export default compose(
  withData,
  withIndicator(),
  connect(
    mapStateToProps,
    { sendNotification }
  ),
  CSSModules(styles)
)(Shelf)
