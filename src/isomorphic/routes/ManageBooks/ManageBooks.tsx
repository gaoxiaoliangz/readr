import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocContainer from '../../containers/DocContainer'
import InfoTable from '../../components/InfoTable'
import apis from '../../apis'
import * as selectors from '../../store/selectors'
import { sendNotification, fetchBooks, openConfirmModal, closeConfirmModal } from '../../store/actions'
import CSSModules from 'react-css-modules'
import Icon from '../../elements/Icon'
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

  deleteBook(id, bookName) {
    this.props.openConfirmModal({
      title: '确认删除',
      content: `将删除《${bookName}》`,
      onConfirm: () => {
        apis.deleteBook(id).then(res => {
          this.props.closeConfirmModal()
          this.props.sendNotification('删除成功！')
          this.props.fetchBooks({ merge: false })
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
        <InfoTable
          data={bookListNewest.map(item => (Object.assign({}, item, {
            authors: item.authors.map(author => author.name).join(', ')
          })))}
          header={[
            {
              key: 'id',
              name: 'ID'
            }, {
              key: 'title',
              name: 'Title'
            }, {
              key: 'dateCreated',
              name: 'Date created'
            }, {
              key: 'authors',
              name: 'Author(s)'
            }
          ]}
          actions={[{
            name: 'Delete',
            fn: row => {
              this.deleteBook(row.id, row.title)
            }
          }]}
          operationLabel="Actions"
          />
      </DocContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    bookListNewest: selectors.booksSelector(state),
  }
}

export default connect(
  mapStateToProps,
  { fetchBooks, sendNotification, openConfirmModal, closeConfirmModal }
)(ManageBooks as any)
