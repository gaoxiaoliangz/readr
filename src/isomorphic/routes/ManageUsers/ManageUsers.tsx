import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../store/actions'
import InfoTable from '../../components/InfoTable'
import * as selectors from '../../store/selectors'
import DocContainer from '../../containers/DocContainer'
import ContentPage from '../../components/ContentPage'
import * as helpers from '../../helpers'

interface Props {
  fetchUsers: (options?: fetchUsers) => void
  users: any[]
  routing: any
}

class ManageUsers extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps, nextState) {
    let {users, routing} = this.props
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    let {users, routing} = this.props

    return (
      <DocContainer title="用户管理">
        <ContentPage
          pagination={{
            name: 'users'
          }}
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
    routing: state.routing.locationBeforeTransitions,
  }
}

export default connect(
  mapStateToProps,
  { fetchUsers }
)(ManageUsers as any)
