import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { sendNotification, userAuth, fetchProfile } from '../actions'
import Body from '../side-effects/body'
import _ from 'lodash'
import PreferenceList from '../components/preference-list'

interface IAllProps {
  session?: any
  fetchProfile?: any
  profile?: any
}

interface IState {
  showFav?: boolean
}

class UserPreference extends Component<IAllProps, IState> {

  // static fetchData({store, params}) {
  //   return store.dispatch(fetch())
  // }

  constructor(props) {
    super(props)
    this.state = {
      showFav: true
    }
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    // user session fetched
    if (nextProps.session.isFetching === false && this.props.session.isFetching) {
      const userId = nextProps.session.user.id
      this.props.fetchProfile(userId)
    }
  }

  render() {
    let user = this.props.profile

    return (
      <PreferenceList
        {...this.props.profile}
      />
    )
  }
}

export default connect(
  state => {
    const userId = state.session.user.role !== 'visitor' ? state.session.user.id : ''
    const profile = userId && !_.isEmpty(state.entities.profiles) ? state.entities.profiles[userId] : {}

    return {
      notification: state.notification,
      session: state.session,
      profile
    }
  },
  { sendNotification, userAuth, fetchProfile }
)(UserPreference as any)
