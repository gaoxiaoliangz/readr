import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { graphql, compose } from 'react-apollo'
import PreferenceList from './PreferenceList'
import DocContainer from '../../components/DocContainer'
import * as selectors from '../../selectors'
import Branding from '../Branding/Branding'
import Colophon from '../../components/Colophon/Colophon'
import { Container } from '../../components/layout'
import PROFILE_QUERY from '../../graphql/Profile.gql'
import UPDATE_PROFILE from '../../graphql/mutations/UpdateProfile.gql'
import CHANGE_PASSWORD from '../../graphql/mutations/ChangePassword.gql'
import Loading from '../../components/Loading/Loading'
import { openModal, closeModal, sendNotification } from '../../actions'
import ChangePWForm from './ChangePWForm'

type Data = State.Apollo<{
  viewer: {
    email: string
    username: string
    displayName: string
    bio: string
  }
}>

interface IAllProps {
  data: Data
  profile?: any
  updateProfile: any
  changePassword: any
  openModal: typeof openModal
  closeModal: typeof closeModal
  sendNotification: typeof sendNotification
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
    this.props.updateProfile({
      variables: data,

      // todo: http://dev.apollodata.com/react/cache-updates.html#automatic-updates
      refetchQueries: [{
        query: PROFILE_QUERY
      }]
    }).catch((err) => {
      this.props.sendNotification(err.message, 'error')
    })
  }

  render() {
    if (this.props.data.loading) {
      return <Loading useNProgress />
    }

    const { username, displayName, email, bio } = this.props.data.viewer

    return (
      <DocContainer title="设置" bodyClass="page-preference">
        <Branding />
        <Container>
          <PreferenceList
            displayName={displayName}
            username={username}
            email={email}
            bio={bio}
            showFav
            onSave={this._handleSave}
            onRequestChangePW={() => {
              this.props.openModal({
                title: '修改密码',
                content: (
                  <ChangePWForm
                    onSave={(data) => {
                      this.props.changePassword({
                        variables: data
                      })
                        .then(() => {
                          this.props.sendNotification('密码修改成功')
                          this.props.closeModal()
                        })
                        .catch((err) => {
                          this.props.sendNotification(err.message, 'error')
                        })
                    }}
                  />
                )
              })
            }}
          />
        </Container>
        <Colophon />
      </DocContainer>
    )
  }
}

const withData = graphql(PROFILE_QUERY)
const withMutation = graphql(UPDATE_PROFILE, {
  name: 'updateProfile'
})
const withMutation2 = graphql(CHANGE_PASSWORD, {
  name: 'changePassword'
})

export default compose(
  withMutation2,
  withMutation,
  withData,
  connect(
    state => {
      return {
        profile: selectors.profile(state)
      }
    },
    { openModal, closeModal, sendNotification }
  )
)(Preference as any)
