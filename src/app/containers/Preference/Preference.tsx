import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { graphql } from 'react-apollo'
import PreferenceList from './PreferenceList'
import DocContainer from '../../components/DocContainer'
import * as selectors from '../../selectors'
import Branding from '../Branding/Branding'
import Colophon from '../../components/Colophon/Colophon'
import { Container } from '../../components/layout'
import VIEWER_QUERY from '../../graphql/ViewerQuery.gql'
import Loading from '../../components/Loading/Loading'
import UPDATE_PROFILE from '../../graphql/mutations/UpdateProfile.gql'

type Data = State.Apollo<{
  viewer: {
    email: string
    username: string
    displayName: string
  }
}>

interface IAllProps {
  data: Data
  profile?: any
  mutate: any
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
    this._handleSave = this._handleSave.bind(this)
  }

  _handleSave(data) {
    this.props.mutate({
      variables: data,

      // todo: http://dev.apollodata.com/react/cache-updates.html#automatic-updates
      refetchQueries: [{
        query: VIEWER_QUERY
      }]
    })
  }

  render() {
    if (this.props.data.loading) {
      return <Loading useNProgress />
    }

    const { username, displayName, email } = this.props.data.viewer

    return (
      <DocContainer title="设置">
        <Branding />
        <Container>
          <PreferenceList
            username={username}
            email={email}
            showFav
            onSave={this._handleSave}
          />
        </Container>
        <Colophon />
      </DocContainer>
    )
  }
}

const withData = graphql(VIEWER_QUERY)
const withMutation = graphql(UPDATE_PROFILE)

export default withMutation(withData(connect(
  state => {
    return {
      profile: selectors.profile(state)
    }
  },
)(Preference as any)))
