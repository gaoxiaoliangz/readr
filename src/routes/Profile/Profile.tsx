import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCollections, sendNotification, fetchProfile } from '../../actions'
import { Button } from '../../components/form'
import { Tab, Tabs } from '../../components/Tab'
import { Container } from '../../components/layout'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import * as selectors from '../../selectors'
const styles = require('./Profile.scss')

interface IProps {
  fetchBooks?: any
  newestBooks?: any
  fetchProfile?: any
  sendNotification?: any
  profile?: any
}

@CSSModules(styles)
class Profile extends Component<IProps, {}> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchProfile()
  }

  render() {
    const { profile: { username } } = this.props

    return (
      <Container>
        <div styleName="profile">
          <div styleName="page-header">
            <div styleName="user-avatar">
              <img src="https://img3.doubanio.com/icon/ul43646706-43.jpg" alt="user_avatar"/>
            </div>
            <span styleName="username">{username}</span>
            <span styleName="tagline">暂无签名</span>
            <Button onClick={() => { this.props.sendNotification('该功能尚不可用', 'warning') }} styleName="edit">编辑</Button>
          </div>
          <Tabs>
            <Tab title="收藏">
              暂无数据
            </Tab>
            <Tab title="读过">
              暂无数据
            </Tab>
          </Tabs>
        </div>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const userId = selectors.sessionUserId(state)

  return {
    newestBooks: state.pagination.books.newest
      ? state.pagination.books.newest.ids.map(id => state.entities.books[id])
      : [],
    profile: selectors.entity('profiles', userId)(state)
  }
}

export default connect(
  mapStateToProps,
  { sendNotification, fetchCollections, fetchProfile }
)(Profile as any)
