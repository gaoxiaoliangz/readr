import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification, fetchProfile } from '../../store/actions'
// import Body from '../../../components/Body'
// import { Link } from 'react-router'
import _ from 'lodash'
import PreferenceList from './PreferenceList'

interface IAllProps {
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
    this.props.fetchProfile()
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <PreferenceList
        {...this.props.profile}
      />
    )
  }
}

export default connect(
  state => {
    return {
      profile: _.get(state.payloads, 'profile', {})
    }
  },
  { sendNotification, fetchProfile }
)(Preference as any)
