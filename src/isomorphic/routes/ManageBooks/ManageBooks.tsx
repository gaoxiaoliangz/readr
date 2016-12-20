import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocContainer from '../../containers/DocContainer'
import InfoTable from '../../components/InfoTable'
import api from '../../services/api'
import * as selectors from '../../store/selectors'
import { sendNotification, loadBooks, openConfirmModal, closeConfirmModal, removeEntity, loadUsers, openModal, initializeForm, closeModal } from '../../store/actions'
import ContentPage from '../../components/ContentPage'
import helpers from '../../helpers'
import moment from 'moment'
import FileUploader from '../../elements/FileUploader'
import { Button } from '../../elements/form'
import BookMetaForm from './components/BookMetaForm'

interface Props {
  sendNotification?: typeof sendNotification
  loadBooks?: typeof loadBooks
  bookListNewest?: any
  openConfirmModal: typeof openConfirmModal
  closeConfirmModal: any
  routing: any
  removeEntity: typeof removeEntity
  loadUsers: typeof loadUsers
  openModal: typeof openModal
  closeModal: typeof closeModal
  initializeForm: typeof initializeForm
  bookEntities: any
}

class ManageBooks extends Component<Props, {
  showModal: boolean
}> {

  static fetchData({store, query}: FetchDataOptions) {
    return store.dispatch(loadBooks({
      page: query.page
    }))
  }

  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  deleteBook(id, bookName) {
    this.props.openConfirmModal({
      title: '确认删除',
      content: `将删除《${bookName}》`,
      onConfirm: () => {
        api.deleteBook(id).then(res => {
          this.props.closeConfirmModal()
          this.props.sendNotification('删除成功！')
          this.props.removeEntity('books', id)
        })
      }
    })
  }

  editBookMeta(bookId) {
    this.setState({
      showModal: true
    })
    const { bookEntities } = this.props

    this.props.openModal({
      title: '编辑书籍信息',
      content: (
        <BookMetaForm
          onSave={data => {
            api.editBookMeta(bookId, data).then(result => {
              this.loadBooks()
              this.props.closeModal()
              this.props.sendNotification('修改成功！', 'success')
            })
          } }
          />
      )
    })
    const bookMeta = bookEntities[bookId]
    this.props.initializeForm('bookMeta', {
      title: bookMeta.title,
      authors: bookMeta.authors.map(item => item.name).join(', '),
      description: bookMeta.description,
      cover: bookMeta.cover
    })
  }

  loadBooks(props = this.props) {
    this.props.loadBooks({
      page: props.routing.query.page || '1',
    })
  }

  componentWillReceiveProps(nextProps, nextState) {
    helpers.onRoutingChange(routing => {
      document.body.scrollTop = 0
      this.loadBooks(nextProps)
    })(nextProps, this.props)
  }

  componentDidMount() {
    this.loadBooks()
    this.props.loadUsers()
  }

  render() {
    let bookListNewest = this.props.bookListNewest ? this.props.bookListNewest : null

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
            } }
            onError={error => {
              this.props.sendNotification(error.message, 'error')
            } }
            >
            <Button color="blue">添加书籍</Button>
          </FileUploader>
          <InfoTable
            data={bookListNewest.map(item => (Object.assign({}, item, {
              authors: item.authors ? item.authors.map(author => author.name).join(', ') : '未知作者',
              dateCreated: moment(new Date(item.dateCreated).valueOf()).format('YYYY年MM月DD日')
            })))}
            header={[
              {
                key: 'id',
                name: 'ID'
              }, {
                key: 'title',
                name: '书名'
              }, {
                key: 'dateCreated',
                name: '创建日期'
              }, {
                key: 'authors',
                name: '作者'
              }
            ]}
            actions={[{
              name: '删除',
              fn: row => {
                this.deleteBook(row.id, row.title)
              }
            }, {
              name: '编辑',
              fn: row => {
                this.editBookMeta(row.id)
              }
            }]}
            />
        </ContentPage>
      </DocContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const currentPage = selectors.common.currentPage('books')(state)
  const bookEntities = selectors.common.entities('books')(state)

  return {
    // 如果第一个参数传 null 会覆盖默认参数
    bookListNewest: selectors.books(undefined, currentPage)(state),
    routing: state.routing.locationBeforeTransitions,
    bookEntities
  }
}

export default connect<{}, {}, {}>(
  mapStateToProps,
  { loadBooks, sendNotification, openConfirmModal, closeConfirmModal, removeEntity, loadUsers, openModal, initializeForm, closeModal }
)(ManageBooks)
