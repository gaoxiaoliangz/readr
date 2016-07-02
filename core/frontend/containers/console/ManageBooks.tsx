import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from 'actions/index'
import Body from 'side-effects/Body'
import apis from 'utils/apis'
import { handleNotification } from 'actions/index'


interface Props {
  handleNotification?: any
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
                          this.props.handleNotification('删除成功！')
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
  const {
    pagination: { filteredBooks },
    entities: { books }
  } = state

  const genList = (whichPagination) => (
    whichPagination ? whichPagination.ids.map(id => books[id]) : []
  )

  return {
    bookListNewest: genList(filteredBooks['newest'])
  }
}

export default connect(
  mapStateToProps,
  { fetchBooks, handleNotification }
)(ManageBooks as any)
