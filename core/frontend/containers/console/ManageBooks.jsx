import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBookList } from 'actions'
import { Link } from 'react-router'

class ManageBooks extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBookList()
  }

  render() {
    let bookListAll = this.props.bookListAll?this.props.bookListAll:null

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Date created</td>
              <td>Actions</td>
            </tr>
            {bookListAll?bookListAll.map((book, index) => {
              return (
                <tr key={index}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.dateCreated}</td>
                  <td><a href="#">Delete</a></td>
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
  const type = 'all'

  const {
    pagination: { bookList },
    entities: { books }
  } = state

  const bookListPagination = bookList[type]
  const bookListAll = bookListPagination.ids.map(id => books[id])

  return {
    bookListAll
  }
}

export default connect(
  mapStateToProps,
  { fetchBookList }
)(ManageBooks)
