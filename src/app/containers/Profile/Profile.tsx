import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { sendNotification } from '../../actions'
import { Button } from '../../components/form'
import { Tab, Tabs } from '../../components/Tab'
import { Container } from '../../components/layout'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import styles from './Profile.scss'
import Branding from '../Branding/Branding'
import Colophon from '../../components/Colophon/Colophon'
import DocContainer from '../../components/DocContainer'
import defaultAvatar from './default-avatar.png'
import VIEWER_QUERY from '../../graphql/ViewerQuery.gql'
import DataRenderer from '../../components/DataRenderer/DataRenderer'
import withIndicator from '../../helpers/withIndicator'

type Data = State.Apollo<{
  viewer: {
    email: string
    username: string
    displayName: string
  }
}>

interface IProps {
  sendNotification?: any
  data: Data
}

@CSSModules(styles)
class Profile extends Component<IProps, {}> {

  constructor(props) {
    super(props)
    // this.renderContent = this.renderContent.bind(this)
  }

  render() {
    const { data: { viewer: { displayName } } } = this.props

    return (
      <DocContainer title="个人资料">
        <Branding />
        <Container>
          <div styleName="profile">
            <div styleName="page-header">
              <div styleName="user-avatar">
                <img src={defaultAvatar} alt="user avatar" />
              </div>
              <span styleName="username">{displayName}</span>
              <span styleName="tagline">暂无签名</span>
              <Button onClick={() => { this.props.sendNotification('该功能尚不可用', 'warning') }} styleName="edit">编辑</Button>
            </div>
            <Tabs>
              <Tab title="最近阅读">
                暂无数据
              </Tab>
              <Tab title="我的收藏">
                该功能仍在开发中，敬请期待！
              </Tab>
            </Tabs>
          </div>
        </Container>
        <Colophon />
      </DocContainer>
    )
  }

  // render() {
  //   return (
  //     <DataRenderer data={this.props.data} render={this.renderContent} />
  //   )
  // }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const withData = graphql(VIEWER_QUERY)

export default withData(withIndicator()(connect(
  mapStateToProps,
  { sendNotification }
)(Profile as any)) as any)
