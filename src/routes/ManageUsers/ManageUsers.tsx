import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import _ from 'lodash'
import { loadUsers } from '../../actions'
import InfoTable from '../../components/InfoTable'
import * as selectors from '../../selectors'
import DocContainer from '../../components/DocContainer'
import ContentPage from '../../components/ContentPage'
import helpers from '../../helpers'

interface Props {
  loadUsers: typeof loadUsers
  users: SelectedPagination
  routing: any
}

class ManageUsers extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  loadUsers(props = this.props) {
    this.props.loadUsers(props.routing.query.page || '1')
  }

  componentWillReceiveProps(nextProps, nextState) {
    helpers.onRoutingChange(routing => {
      document.body.scrollTop = 0
      this.loadUsers(nextProps)
    })(nextProps, this.props)
  }

  componentWillMount() {
    this.loadUsers()
  }

  render() {
    const { users } = this.props

    return (
      <DocContainer title="用户管理">
        <ContentPage
          pagination={{
            name: 'users'
          }}
        >
          <InfoTable
            data={_.get(users, ['pages', users.currentPage], []).map(user => (Object.assign({}, user, {
              dateCreated: moment(new Date(user.dateCreated).valueOf()).format('YYYY年MM月DD日')
            })))}
          />
        </ContentPage>
      </DocContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: selectors.userList(state),
    routing: state.routing.locationBeforeTransitions,
  }
}

export default connect(
  mapStateToProps,
  { loadUsers }
)(ManageUsers as any)
