import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUsers } from '../../store/actions'
import InfoTable from '../../components/InfoTable'
import * as selectors from '../../store/selectors'
import DocContainer from '../../containers/DocContainer'
import ContentPage from '../../components/ContentPage'
import helpers from '../../helpers'
import moment from 'moment'

interface Props {
  loadUsers: loadUsers
  users: any[]
  routing: any
}

class ManageUsers extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  loadUsers(props = this.props) {
    this.props.loadUsers({
      page: props.routing.query.page || '1'
    })
  }

  componentWillReceiveProps(nextProps, nextState) {
    helpers.onRoutingChange(routing => {
      document.body.scrollTop = 0
      this.loadUsers(nextProps)
    })(nextProps, this.props)
  }

  componentDidMount() {
    this.loadUsers()
  }

  render() {
    let {users} = this.props

    return (
      <DocContainer title="用户管理">
        <ContentPage
          pagination={{
            name: 'users'
          }}
          >
          <InfoTable
            data={users.map(user => (Object.assign({}, user, {
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
    users: selectors.users(state),
    routing: state.routing.locationBeforeTransitions,
  }
}

export default connect(
  mapStateToProps,
  { loadUsers }
)(ManageUsers as any)
