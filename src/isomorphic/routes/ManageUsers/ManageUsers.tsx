import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../store/actions'
import InfoTable from '../../components/InfoTable'
import * as selectors from '../../store/selectors'
import DocContainer from '../../containers/DocContainer'

interface Props {
  fetchUsers: (options?: fetchUsers) => void
  users: any[]
}

class ManageUsers extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    let {users} = this.props

    return (
      <DocContainer title="用户管理">
        <InfoTable
          data={users}
        />
      </DocContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: selectors.usersSelector(state)
  }
}

export default connect(
  mapStateToProps,
  { fetchUsers }
)(ManageUsers as any)
