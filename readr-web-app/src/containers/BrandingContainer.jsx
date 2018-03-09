import React from 'react'
import PT from 'prop-types'
import _ from 'lodash'
import Branding from '../components/Branding/Branding'
import { subscriptions, signIn, signOut } from '../service'
import appModel from './appModel'

class BrandingContainer extends React.Component {
  static propTypes = {
    innerProps: PT.object,
    user: PT.object.isRequired
  }

  componentDidMount() {
    subscriptions.onAuthStateChanged(appModel.handleUserStateChange)
  }

  handleSignOutClick = () => {
    signOut()
  }

  handleSignInClick = () => {
    signIn()
    return false
  }

  render() {
    const { innerProps } = this.props
    const { displayName } = this.props.user
    const signedIn = !_.isEmpty(this.props.user)
    return (
      <Branding
        onSignInClick={this.handleSignInClick}
        onSignOutClick={this.handleSignOutClick}
        signedIn={signedIn}
        username={displayName}
        {...innerProps}
      />
    )
  }
}

export default appModel.connect(BrandingContainer)
