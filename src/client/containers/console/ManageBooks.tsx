import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from 'actions/index'
import Body from 'side-effects/Body'
import apis from 'utils/apis'
import { sendNotification } from 'actions/index'


interface Props {
  sendNotification?: any
  fetchBooks?: any
  bookListNewest?: any
}

class ManageBooks extends Component<Props, any> {

  static fetchData({store}) {
    return store.dispatch(fetchBooks())
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    let bookListNewest = this.props.bookListNewest ? this.props.bookListNewest : null

    return (
      <div>
        <Body className="manage-books" />
        <table>
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
                        apis.deleteBook(book.id).then(res => {
                          this.props.sendNotification('删除成功！')
                          this.props.fetchBooks()
                        })
                        return false
                      } }
                      href="#">Delete</a>
                  </td>
                </tr>
              )
            }) : null}
          </tbody>
        </table>
      </div>
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
  { fetchBooks, sendNotification }
)(ManageBooks as any)
