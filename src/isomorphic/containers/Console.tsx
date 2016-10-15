import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from '../elements/_layout/Container'
import ConsoleBranding from '../components/ConsoleBranding'
import { userAuth, sendNotification } from '../store/actions'
import ConsoleSidebar from '../components/ConsoleSidebar'
import menus from '../content/menus'
import DocContainer from '../containers/DocContainer'
import api from '../services/api'
import helpers from '../helpers'

interface Props {
  notifications?: any
  userAuth?: any
  session?: any
  routing?: any
}

class Console extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  handleLogout() {
    api.logout().then(() => {
      // location.href = '/'
      helpers.redirect('/')
    })
  }

  componentDidMount() {
    this.props.userAuth()
  }

  render() {
    let isAdmin = this.props.session.user.role === 'admin' ? true : false
    let username = this.props.session.user.username ? this.props.session.user.username : null
    let pathname = this.props.routing.locationBeforeTransitions ? this.props.routing.locationBeforeTransitions.pathname : 'console'

    const contentStyle = {
      marginLeft: 320,
      paddingTop: 60
    }

    return (
      <DocContainer bodyClass="console">
        <ConsoleBranding isAdmin={isAdmin} username={username} onLogout={this.handleLogout} />
        <Container isFluid={true}>
          <ConsoleSidebar
            menuMapping={menus}
            currentPath={pathname}
            />
          <div style={contentStyle}>
            {this.props.children}
          </div>
        </Container>
      </DocContainer>
    )
  }
}

export default connect(
  state => ({
    notifications: state.components.notifications,
    session: state.session,
    routing: state.routing
  }),
  { sendNotification, userAuth }
)(Console as any)
