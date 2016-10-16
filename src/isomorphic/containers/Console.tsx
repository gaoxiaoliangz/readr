import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from '../elements/_layout/Container'
import ConsoleBranding from '../components/ConsoleBranding'
import { userAuth, sendNotification, userLogout } from '../store/actions'
import ConsoleSidebar from '../components/ConsoleSidebar'
import menus from '../content/menus'
import DocContainer from '../containers/DocContainer'

interface Props {
  notifications?: any
  userAuth?: any
  session?: any
  routing?: any
  userLogout: userLogout
}

class Console extends Component<Props, {}> {

  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    this.props.userLogout()
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
      isAdmin && (
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
    )
  }
}

export default connect(
  state => ({
    notifications: state.components.notifications,
    session: state.session,
    routing: state.routing
  }),
  { sendNotification, userAuth, userLogout }
)(Console as any)
