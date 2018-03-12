import React from 'react'
import PT from 'prop-types'
import _ from 'lodash'
import Branding from '../components/Branding/Branding'
import { subscriptions, signIn, signOut } from '../service'
import appModel from './appModel'

class BrandingContainer extends React.Component {
  static propTypes = {
    user: PT.object.isRequired,
    dark: PT.bool,
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
    const { user: { displayName }, ...rest } = this.props
    const signedIn = !_.isEmpty(this.props.user)
    return (
      <Branding
        onSignInClick={this.handleSignInClick}
        onSignOutClick={this.handleSignOutClick}
        signedIn={signedIn}
        username={displayName}
        {...rest}
      />
    )
  }
}

export default appModel.connect(BrandingContainer)
