import React, { Component, PropTypes } from 'react'
import { Link, match } from 'react-router'
import { connect } from 'react-redux'
import Branding from 'components/Branding'
import Container from 'elements/Container'
import Colophon from 'components/Colophon'
import { userAuth, handleNotification } from 'actions/index'
import Notification from 'components/Notification'
import { bindActionCreators } from 'redux'

const s = require('!style!raw!./App.css')




// function mapStateToProps(state) {
//   return {
//     test: 'hahah',
//     notification: state.components.notification,
//     session: state.session
//   }
// }


// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators(actionCreators, dispatch) };
// }

// @connect(
//   mapStateToProps,
//   { handleNotification, userAuth } as any
// )
class App extends Component<any, any> {

  constructor(props) {
    super(props)
  }


  componentDidMount() {
    this.props.userAuth()
  }

  render() {
    let isAdmin = false
    let username = null

    if(this.props.session.user.role !== 'visitor') {
      isAdmin = this.props.session.user.role === 'admin'
      username = this.props.session.user.username
    }

    return (
      <div>
        <Branding isAdmin={isAdmin} username={username} />
        <Container>
          <Notification notification={this.props.notification} />
          {this.props.children}
        </Container>
        <Colophon />
      </div>
    )
  }
}

// export default App

export default connect(
  state => ({
    notification: state.components.notification,
    session: state.session
  }),
  { handleNotification, userAuth } as any
)(App)
