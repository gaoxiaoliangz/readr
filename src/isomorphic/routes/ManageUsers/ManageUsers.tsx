import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../store/actions'
import InfoTable from '../../components/InfoTable'
import * as selectors from '../../store/selectors'
import DocContainer from '../../containers/DocContainer'
import ContentPage from '../../components/ContentPage'

interface Props {
  fetchUsers: (options?: fetchUsers) => void
  users: any[]
  userPaginationLinks: any
}

class ManageUsers extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    let {users, userPaginationLinks} = this.props

    return (
      <DocContainer title="用户管理">
        <ContentPage
          pagination={userPaginationLinks}
          >
          <InfoTable
            data={users}
            />
        </ContentPage>
      </DocContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: selectors.usersSelector(state),
    userPaginationLinks: selectors.paginationLinkSelector('users')(state)
  }
}

export default connect(
  mapStateToProps,
  { fetchUsers }
)(ManageUsers as any)
