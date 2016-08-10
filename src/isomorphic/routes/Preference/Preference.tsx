import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router'
import { sendNotification, userAuth, fetchProfile } from '../../store/actions'
// import Body from '../../../components/Body'
import _ from 'lodash'
import PreferenceList from './PreferenceList'

interface IAllProps {
  session?: any
  fetchProfile?: any
  profile?: any
}

interface IState {
  showFav?: boolean
}

class Preference extends Component<IAllProps, IState> {

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
)(Preference as any)
