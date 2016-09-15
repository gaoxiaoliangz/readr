import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserList } from '../../store/actions'

class ManageUsers extends Component<any, any> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserList()
  }

  render() {
    let userListAll = this.props.userListAll ? this.props.userListAll : []

    return (
      <div>
        <table className="info-table">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date created</th>
              <th>Actions</th>
            </tr>
            {userListAll.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.dateCreated}</td>
                  <td><a href="#">Delete</a></td>
                </tr>
              )
            }) }
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
  const userListAll = userListPagination ? userListPagination.ids.map(id => users[id]) : []

  return {
    userListAll
  }
}

export default connect(
  mapStateToProps,
  { fetchUserList } as any
)(ManageUsers)
