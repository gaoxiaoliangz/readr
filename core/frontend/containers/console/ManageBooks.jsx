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
            {this.props.book.bookList?this.props.book.bookList.map((book, index) => {
              return (
                <tr key={index}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.date_created}</td>
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

export default connect(
  state => ({
    book: state.book,
  }),
  { fetchBookList }
)(ManageBooks)
