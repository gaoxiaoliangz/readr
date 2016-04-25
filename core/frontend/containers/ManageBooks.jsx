import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBookList } from 'actions'
import { Paper, Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui/lib'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import { Link } from 'react-router'
import Dialog from 'material-ui/lib/dialog'
import FlatButton from 'material-ui/lib/flat-button'
import RaisedButton from 'material-ui/lib/raised-button'

class ManageBooks extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBookList()
  }

  render() {
    return (
      <Paper zDepth={1}>
        <Link to="/console/addbook">
          <FloatingActionButton style={{position: "fixed", bottom: 30, right: 30}}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Date created</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.props.book.bookList?this.props.book.bookList.map((book, index) => {
              return (
                <TableRow key={index}>
                  <TableRowColumn>{book.id}</TableRowColumn>
                  <TableRowColumn>{book.title}</TableRowColumn>
                  <TableRowColumn>{book.date_created}</TableRowColumn>
                </TableRow>
              )
            }):null}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default connect(
  state => ({
    book: state.book,
  }),
  { fetchBookList }
)(ManageBooks)
