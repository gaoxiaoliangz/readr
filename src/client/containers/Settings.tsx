import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { sendNotification, userAuth, fetchProfile } from '../actions'
import Body from '../side-effects/body'
import Switcher from '../elements/switcher'
import _ from 'lodash'

interface IAllProps {
  session?: any
  fetchProfile?: any
  profile?: any
}

interface IState {
  showFav?: boolean
}

class Settings extends Component<IAllProps, IState> {

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
      <div className="settings">
        <Body className="page-settings" />
        <div className="page-content">
          <div className="page-header">
            <h1 className="page-title">设置</h1>
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
              <Switcher
                value={this.state.showFav}
                onChange={newValue => {
                  this.setState({
                    showFav: newValue as boolean
                  })
                }}
              />
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
  { sendNotification, userAuth, fetchProfile }
)(Settings as any)
