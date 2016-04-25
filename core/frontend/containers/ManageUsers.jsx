import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserList } from 'actions'
import { Paper, Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui/lib'

class ManageBooks extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserList()
  }

  render() {
    return (
      <Paper zDepth={1}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Username</TableHeaderColumn>
              <TableHeaderColumn>Date created</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.props.user.userList?this.props.user.userList.map((user, index) => {
              return (
                <TableRow key={index}>
                  <TableRowColumn>{user.id}</TableRowColumn>
                  <TableRowColumn>{user.username}</TableRowColumn>
                  <TableRowColumn>{user.date_created}</TableRowColumn>
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
    user: state.user,
  }),
  { fetchUserList }
)(ManageBooks)
