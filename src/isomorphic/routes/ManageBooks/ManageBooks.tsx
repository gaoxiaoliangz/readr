import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocContainer from '../../containers/DocContainer'
import apis from '../../apis'
import { sendNotification, fetchBooks, openConfirmModal, closeConfirmModal } from '../../store/actions'
import CSSModules from 'react-css-modules'
const styles = require('./ManageBooks.css')

interface Props {
  sendNotification?: any
  fetchBooks?: (data?: fetchBooks) => void
  bookListNewest?: any
  openConfirmModal: (data: openConfirmModal) => void
  closeConfirmModal: any
}

@CSSModules(styles, {
  allowMultiple: true
})
class ManageBooks extends Component<Props, any> {

  static fetchData({store}) {
    return store.dispatch(fetchBooks())
  }

  constructor(props) {
    super(props)
  }

  handleDeleteClick(id, bookName) {
    this.props.openConfirmModal({
      title: '确认删除',
      content: `将删除《${bookName}》`,
      onConfirm: () => {
        apis.deleteBook(id).then(res => {
          this.props.closeConfirmModal()
          this.props.sendNotification('删除成功！')
          this.props.fetchBooks({merge: false})
        })
      }
    })
  }

  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    let bookListNewest = this.props.bookListNewest ? this.props.bookListNewest : null

    return (
      <DocContainer title="管理书籍">
        <table className="info-table">
          <tbody>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Date created</td>
              <td>Actions</td>
            </tr>
            {bookListNewest ? bookListNewest.map((book, index) => {
              return (
                <tr key={index}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.dateCreated}</td>
                  <td>
                    <a
                      onClick={e => {
                        e.preventDefault()
                        this.handleDeleteClick(book.id, book.title)
                        return false
                      } }
                      href="#">Delete</a>
                  </td>
                </tr>
              )
            }) : null}
          </tbody>
        </table>
      </DocContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    bookListNewest: state.pagination.books.newest
      ? state.pagination.books.newest.ids.map(id => state.entities.books[id])
      : [],
  }
}

export default connect(
  mapStateToProps,
  { fetchBooks, sendNotification, openConfirmModal, closeConfirmModal }
)(ManageBooks as any)
