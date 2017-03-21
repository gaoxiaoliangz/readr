import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadProfile } from '../../actions/api'
import _ from 'lodash'
import PreferenceList from './components/PreferenceList'
import DocContainer from '../../components/DocContainer'
import * as selectors from '../../selectors'

interface IAllProps {
  loadProfile?: typeof loadProfile
  profile?: any
}

interface IState {
  showFav?: boolean
}

class Preference extends Component<IAllProps, IState> {

  constructor(props) {
    super(props)
    this.state = {
      showFav: true
    }
  }

  componentWillMount() {
    this.props.loadProfile()
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
      profile: selectors.profile(state)
    }
  },
  { loadProfile }
)(Preference as any)
