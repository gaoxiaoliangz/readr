import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { sendNotification, userAuth, fetchProfile } from '../actions'
import NavTab from '../elements/nav-tab'
import Body from '../side-effects/body'
import Switcher from '../elements/switcher'
import _ from 'lodash'

class Profile extends Component<any, any> {

  // static fetchData({store, params}) {
  //   return store.dispatch(fetch())
  // }

  constructor(props) {
    super(props)
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
      <div className="settings">
        <Body className="page-settings" />
        <div className="page-content">
          <div className="page-header">
            <h1 className="page-title">设置</h1>
            <NavTab tabs={['资料', '个人主页']} current={0}/>
          </div>
          <ul className="options">
            <li className="option">
              <h2>用户名</h2>
              <span className="option-input">http://readrweb.com/@<strong>{user.username}</strong></span>
              <span className="edit">编辑</span>
            </li>
            <li className="option">
              <h2>邮箱</h2>
              <span className="option-input">{user.email}</span>
              <span className="edit">编辑</span>
            </li>
            <li className="option">
              <h2>密码</h2>
              <span className="option-input">******</span>
              <span className="edit">编辑</span>
            </li>
            <li className="option">
              <h2>公开展示我的收藏</h2>
              <span className="option-desc">关闭后其他用户将无法查看您的收藏</span>
              <Switcher on={true} />
            </li>
          </ul>
        </div>
      </div>
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
  { sendNotification, userAuth, fetchProfile } as any
)(Profile)
