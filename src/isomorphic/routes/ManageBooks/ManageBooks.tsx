import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocContainer from '../../containers/DocContainer'
import InfoTable from '../../components/InfoTable'
import api from '../../services/api'
import * as selectors from '../../store/selectors'
import { sendNotification, loadBooks, openConfirmModal, closeConfirmModal, removeEntity } from '../../store/actions'
import ContentPage from '../../components/ContentPage'
import helpers from '../../helpers'
import moment from 'moment'

interface Props {
  sendNotification?: any
  loadBooks?: (data?: loadBooks) => void
  bookListNewest?: any
  openConfirmModal: (data: openConfirmModal) => void
  closeConfirmModal: any
  routing: any
  removeEntity: removeEntity
}

class ManageBooks extends Component<Props, any> {

  static fetchData({store, query}: FetchDataOptions) {
    return store.dispatch(loadBooks({
      page: query.page
    }))
  }

  constructor(props) {
    super(props)
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
          <InfoTable
            data={bookListNewest.map(item => (Object.assign({}, item, {
              authors: item.authors ? item.authors.map(author => author.name).join(', ') : '未知作者',
              dateCreated: moment(new Date(item.dateCreated).valueOf()).format('YYYY年MM月DD日')
            }))) }
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
            }]}
            />
        </ContentPage>
      </DocContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    bookListNewest: selectors.books()(state),
    routing: state.routing.locationBeforeTransitions,
  }
}

export default connect<{}, {}, {}>(
  mapStateToProps,
  { loadBooks, sendNotification, openConfirmModal, closeConfirmModal, removeEntity }
)(ManageBooks)
