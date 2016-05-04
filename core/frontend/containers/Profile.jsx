import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { handleNotification, userAuth } from 'actions'

class Profile extends Component{

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
      <div className="profile">
        <div className="row">
          <div className="col-md-8">
            <h1 className="page-title">个人资料</h1>
            <ul>
              <li>
                <label>用户名</label>
                <span>{user.username}</span>
              </li>
              <li>
                <label>邮箱</label>
                <span>{user.email}</span>
              </li>
              <li>
                <label>密码</label>
                <span>******</span>
              </li>
            </ul>
          </div>
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
  { handleNotification, userAuth }
)(Profile)
