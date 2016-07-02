import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from 'actions/index'
import { Link } from 'react-router'
import Body from 'side-effects/Body'
import apis from 'utils/apis'

class ManageBooks extends Component<any, any> {

  static fetchData({store}) {
    return store.dispatch(fetchBooks('newest'))
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBooks('newest')
  }

  render() {
    let bookListNewest = this.props.bookListNewest?this.props.bookListNewest:null

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
            {bookListNewest?bookListNewest.map((book, index) => {
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
                          this.props.fetchBooks('newest')
                        })
                        return false
                      }}
                      href="#">Delete</a>
                  </td>
                </tr>
              )
            }):null}
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
    whichPagination?whichPagination.ids.map(id => books[id]):[]
  )

  return {
    bookListNewest: genList(filteredBooks['newest'])
  }
}

export default connect(
  mapStateToProps,
  { fetchBooks } as any
)(ManageBooks)
