import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserList } from 'actions'

class ManageUsers extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserList()
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
            {this.props.user.userList?this.props.user.userList.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.date_created}</td>
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
    user: state.user,
  }),
  { fetchUserList }
)(ManageUsers)
