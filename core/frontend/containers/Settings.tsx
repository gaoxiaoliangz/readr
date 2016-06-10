import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { handleNotification, userAuth } from 'actions/index'
import NavTab from '../components/NavTab'
import Body from '../side-effects/Body'

class Profile extends Component<any, any> {

  // static fetchData({store, params}) {
  //   return store.dispatch(fetch())
  // }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.userAuth()
  }

  render(){
    let user = this.props.session.user

    return (
      <Body className="page-settings" />
      <div className="settings">
        <div className="page-content">
          <div className="page-header">
            <h1 className="page-title">设置</h1>
            <NavTab tabs={['资料', '个人主页']} current={0}/>
          </div>
          <ul className="options">
            <li className="option">
              <div className="user-avatar">
                <img src="https://img3.doubanio.com/icon/ul43646706-43.jpg" />
              </div>
              <span className="edit">编辑</span>
            </li> 
            <li className="option"> 
              <h2>用户名</h2>
              <span className="option-input">{user.username}</span>
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
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    notification: state.notification,
    session: state.session
  }),
  { handleNotification, userAuth } as any
)(Profile)
