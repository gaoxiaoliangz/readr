import React from 'react'
import Branding from '../components/Branding/Branding'

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email,
    profile_picture: imageUrl
  })
}

export default class BrandingContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      signedIn: false,
    }
    this.currentUID = null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
  }

  onAuthStateChanged = user => {
    // We ignore token refresh events.
    if (user && this.currentUID === user.uid) {
      return
    }

    if (user) {
      this.currentUID = user.uid
      this.setState({
        username: user.displayName,
        signedIn: true
      })
      writeUserData(user.uid, user.displayName, user.email, user.photoURL)
      // startDatabaseQueries()
    } else {
      // Set currentUID to null.
      this.currentUID = null
      this.setState({
        username: null,
        signedIn: false
      })
    }
  }

  handleSignOutClick = () => {
    firebase.auth().signOut()
  }

  handleSignInClick = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    return false
  }

  render() {
    const { innerProps } = this.props
    const { signedIn, username } = this.state
    return (
      <Branding
        onSignInClick={this.handleSignInClick}
        onSignOutClick={this.handleSignOutClick}
        signedIn={signedIn}
        username={username}
        {...innerProps}
      />
    )
  }
}
