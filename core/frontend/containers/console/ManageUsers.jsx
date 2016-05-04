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
    let userListAll = this.props.userListAll?this.props.userListAll:[]

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
            {userListAll.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.date_created}</td>
                  <td><a href="#">Delete</a></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const type = 'all'

  const {
    pagination: { userList },
    entities: { users }
  } = state

  const userListPagination = userList[type]
  const userListAll = userListPagination?userListPagination.ids.map(id => users[id]):[]

  return {
    userListAll
  }
}

export default connect(
  mapStateToProps,
  { fetchUserList }
)(ManageUsers)
