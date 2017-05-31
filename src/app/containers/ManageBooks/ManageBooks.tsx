import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import DocContainer from '../../components/DocContainer'
import InfoTable from '../../components/InfoTable'
import * as restAPI from '../../restAPI'
import * as selectors from '../../selectors'
import { sendNotification, openConfirmModal, closeConfirmModal, openModal, initializeForm, closeModal } from '../../actions'
import { gql, graphql } from 'react-apollo'
import moment from 'moment'
import FileUploader from '../../components/FileUploader'
import { Button } from '../../components/form'
import BookMetaForm from './components/BookMetaForm'
import Loading from '../../components/Loading'
import Paginator from '../../components/Paginator'
import BOOKS_QUERY from '../../graphql/BooksQuery.gql'

const PAGE_LIMIT = 10

type Data = State.Apollo<{
  books: Schema.Connection<{
    id: string
    objectId: string
    title: string
    authors: {
      name: string
    }[]
    description: string
    cover: string
    createdAt: string
  }>
}>

interface Props {
  data: Data
  sendNotification?: typeof sendNotification
  openConfirmModal: typeof openConfirmModal
  closeConfirmModal: any
  routing: State.Routing
  openModal: typeof openModal
  closeModal: typeof closeModal
  initializeForm: typeof initializeForm
}

class ManageBooks extends Component<Props, { showModal: boolean }> {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  deleteBook(id, bookName, cb) {
    this.props.openConfirmModal({
      title: '确认删除',
      content: `将删除《${bookName}》`,
      onConfirm: () => {
        restAPI.deleteBook(id).then(res => {
          this.props.closeConfirmModal()
          this.props.sendNotification('删除成功！')
          cb()
        })
      }
    })
  }

  editBookMeta(bookMeta, cb) {
    this.setState({
      showModal: true
    })

    this.props.openModal({
      title: '编辑书籍信息',
      content: (
        <BookMetaForm
          onSave={data => {
            const _data = _.omit(data, 'authors')
            restAPI.editBookMeta(bookMeta.id, _data).then(result => {
              this.loadBooks()
              this.props.closeModal()
              this.props.sendNotification('修改成功！', 'success')
              cb()
            })
          }}
        />
      )
    })
    this.props.initializeForm('bookMeta', {
      title: bookMeta.title,
      authors: bookMeta.authors.map(item => item.name).join(', '),
      description: bookMeta.description,
      cover: bookMeta.cover
    })
  }

  loadBooks(page = 1) {
    this.props.data.fetchMore({
      variables: {
        offset: (page - 1) * PAGE_LIMIT
      },
      updateQuery: (previousResult: Data, { fetchMoreResult }: { fetchMoreResult: Data }) => {
        return fetchMoreResult
      }
    })
  }

  componentWillReceiveProps(nextProps, nextState) {
    const pageChanged = this.props.routing.query.page !== nextProps.routing.query.page
    if (pageChanged) {
      document.body.scrollTop = 0
      this.loadBooks(Number(nextProps.routing.query.page))
    }
  }

  render() {
    if (this.props.data.loading) {
      return <Loading center useNProgress />
    }

    const entities = this.props.data.books.edges.map(edge => edge.node)
    const rows = entities
      .map((row, index) => {
        return [
          row.objectId,
          row.title,
          moment(new Date(row.createdAt).valueOf()).format('YYYY年MM月DD日'),
          row.authors ? row.authors.map(author => author.name).join(', ') : '未知作者',
          (
            <div>
              <span className="dark-link" onClick={() => {
                this.editBookMeta(entities[index], this.loadBooks.bind(this))
              }}>编辑</span>
              <span className="dark-link" onClick={() => {
                this.deleteBook(row.id, row.title, this.loadBooks.bind(this))
              }}>删除</span>
            </div>
          )
        ]
      })

    return (
      <DocContainer title="书籍管理" bodyClass="manage-books">
        <FileUploader
          style={{ marginTop: 20 }}
          url="/api/books"
          accept=".txt,.epub"
          name="book-file"
          onSuccess={result => {
            this.props.sendNotification(`${result.title} 添加成功`)
            this.loadBooks()
          }}
          onError={error => {
            this.props.sendNotification(error.message, 'error')
          }}
          fileFieldName="bookfile"
        >
          <Button color="blue">添加书籍</Button>
        </FileUploader>
        <InfoTable
          rows={rows}
          header={['ID', '书名', '创建日期', '作者', '操作']}
        />
        <Paginator
          all={Math.ceil(this.props.data.books.totalCount / PAGE_LIMIT)}
          current={Number(this.props.routing.query.page) || 1}
          url={{
            pathname: this.props.routing.pathname,
            query: this.props.routing.query || {}
          }}
        />
      </DocContainer>
    )
  }
}

const ManageBooksWithData = graphql(BOOKS_QUERY, {
  options: (props) => {
    return {
      variables: {
        offset: ((Number(props.routing.query.page) || 1) - 1) * PAGE_LIMIT,
        first: PAGE_LIMIT
      },

      // if not specified as 'network-only' fetch status will always be loading, when
      // refetching somthing with previously used query, seems to be a bug
      // using this option when render on the server, requests will not be made
      fetchPolicy: 'network-only'
    }
  }
})(ManageBooks)

function mapStateToProps(state, ownProps) {
  return {
    routing: selectors.routing(state)
  }
}

export default connect(
  mapStateToProps,
  { sendNotification, openConfirmModal, closeConfirmModal, openModal, initializeForm, closeModal }
)(ManageBooksWithData)
