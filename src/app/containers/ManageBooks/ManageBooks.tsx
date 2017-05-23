import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import DocContainer from '../../components/DocContainer'
import InfoTable from '../../components/InfoTable'
import webAPI from '../../webAPI'
import * as selectors from '../../selectors'
import { sendNotification, openConfirmModal, closeConfirmModal, openModal, initializeForm, closeModal } from '../../actions'
import { loadBooks, loadUsers, removeEntity } from '../../actions/api'
import ContentPage from '../../components/ContentPage'
// import helpers from '../../helpers'
import moment from 'moment'
import FileUploader from '../../components/FileUploader'
import { Button } from '../../components/form'
import BookMetaForm from './components/BookMetaForm'

interface Props {
  sendNotification?: typeof sendNotification
  loadBooks?: typeof loadBooks
  bookListNewest?: SelectedPagination
  openConfirmModal: typeof openConfirmModal
  closeConfirmModal: any
  routing: SelectedRouting
  removeEntity: typeof removeEntity
  loadUsers: typeof loadUsers
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
        webAPI.deleteBook(id).then(res => {
          this.props.closeConfirmModal()
          this.props.sendNotification('删除成功！')
          this.props.removeEntity('books', id)
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
            webAPI.editBookMeta(bookMeta.id, _data).then(result => {
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

  loadBooks(props = this.props) {
    this.props.loadBooks(props.routing.query.page || '1')
  }

  // componentWillReceiveProps(nextProps, nextState) {
  //   helpers.onRoutingChange(routing => {
  //     document.body.scrollTop = 0
  //     this.loadBooks(nextProps)
  //   })(nextProps, this.props)
  // }

  componentWillMount() {
    this.loadBooks()
    // this.props.loadUsers()
  }

  render() {
    const { bookListNewest } = this.props
    const entities = _.get(bookListNewest, ['pages', bookListNewest.currentPage], [])
    const rows = entities
      .map((row, index) => {
        return [
          row.id,
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
        <ContentPage
          pagination={{
            name: 'books'
          }}
        >
          <FileUploader
            style={{ marginTop: 20 }}
            url="/api/books"
            accept=".txt,.epub"
            name="book-file"
            onSuccess={result => {
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
            header={['ID', '数名', '创建日期', '作者', '操作']}
          />
        </ContentPage>
      </DocContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    bookListNewest: selectors.pagination.bookList(state),
    routing: selectors.routing(state)
  }
}

export default connect<{}, {}, {}>(
  mapStateToProps,
  { loadBooks, sendNotification, openConfirmModal, closeConfirmModal, removeEntity, loadUsers, openModal, initializeForm, closeModal }
)(ManageBooks)
