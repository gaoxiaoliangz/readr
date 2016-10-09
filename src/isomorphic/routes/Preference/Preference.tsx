import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification, fetchProfile } from '../../store/actions'
import _ from 'lodash'
import PreferenceList from './PreferenceList'
import DocContainer from '../../containers/DocContainer'

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
      <DocContainer title="设置">
        <div className="container">
          <PreferenceList
            {...this.props.profile}
            />
        </div>
      </DocContainer>
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
