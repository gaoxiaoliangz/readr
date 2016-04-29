import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { handleNotification } from 'actions'

class Profile extends Component{

  // static fetchData({store, params}) {
  //   return store.dispatch(fetch())
  // }

  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render(){
    return (
      <div className="profile">
        {/*<div style={{position: "relative", zIndex: 2}}>*/}
        <h1 className="title">个人资料</h1>
        <ul>
          <li>
            <label>头像</label>
            <span className="avatar">pic</span>
          </li>
          <li>
            <label>用户名</label>
            <span>liang</span>
          </li>
          <li>
            <label>邮箱</label>
            <span>liang@gmail.com</span>
          </li>
          <li>
            <label>密码</label>
            <span>******</span>
          </li>
        </ul>
        {/*</div>*/}
        {/*<div style={{position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "#1b1b1b", zIndex: 1}} />*/}
      </div>
    )
  }
}

export default Profile
// export default connect(
//   state => ({
//     notification: state.notification,
//   }),
//   { handleNotification }
// )(Profile)
