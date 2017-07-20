import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphql, compose, gql } from 'react-apollo'
import { sendNotification } from '../../actions'
import { Tab, Tabs } from '../../components/Tab'
import { Container } from '../../components/layout'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import styles from './Profile.scss'
import Branding from '../Branding/Branding'
import Colophon from '../../components/Colophon/Colophon'
import DocContainer from '../../components/DocContainer'
import defaultAvatar from './default-avatar.png'
import MAIN_VIEWER_INFO from '../../graphql/fragments/MainViewerInfo.gql'
import VIEWER_READING_HISTORY from '../../graphql/fragments/ViewerReadingHistory.gql'
import BookList from '../../components/BookList/BookList'
import Loading from '../../components/Loading/Loading'

type Data = State.Apollo<{
  viewer: {
    email: string
    username: string
    displayName: string
    bio: string
    readingHistory: Schema.Connection<{
      id: string
      bookId: string
      title: string
      description: string
      percentage: number
      authors: any[]
      cover: string
    }>
  }
}>

interface IProps {
  sendNotification?: any
  data: Data
}

class Profile extends Component<IProps, {}> {

  _renderContent() {
    const { data: { viewer: { displayName, bio } } } = this.props
    return (
      <Container>
        <div styleName="profile">
          <div styleName="page-header">
            <div styleName="user-avatar">
              <img src={defaultAvatar} alt="user avatar" />
            </div>
            <span styleName="username">{displayName}</span>
            <span styleName="tagline">{bio}</span>
          </div>
          <Tabs>
            <Tab title="最近阅读">
              <BookList
                bookEntities={this.props.data.viewer.readingHistory.edges.map(edge => {
                  return {
                    ...edge.node,
                    id: edge.node.bookId
                  }
                })}
              />
            </Tab>
            <Tab title="我的收藏">
              该功能仍在开发中，敬请期待！
              </Tab>
          </Tabs>
        </div>
      </Container>
    )
  }

  render() {
    return (
      <DocContainer title="个人资料" bodyClass="page-profile">
        <Branding />
        {
          this.props.data.loading
            ? (
              <Loading showPlaceholder />
            )
            : this._renderContent()
        }
        <Colophon />
      </DocContainer>
    )
  }
}

const withData = graphql(gql`
  query ProfileQuery {
    viewer {
      id
      ...MainViewerInfo
      readingHistory {
        ...ViewerReadingHistory
      }
    }
  }
  ${MAIN_VIEWER_INFO}
  ${VIEWER_READING_HISTORY}
`)

export default compose(
  withData,
  connect(null, { sendNotification }),
  CSSModules(styles)
)(Profile)
