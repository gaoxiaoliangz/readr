import React, { Component } from 'react'
import Switcher from '../../../elements/Switcher'
import CSSModules from 'react-css-modules'
const styles = require('./PreferenceList.scss')

interface IProps {
  username: string
  email: string
  encriptedPassword: string
  showFav: boolean
}

interface IState {
}

@CSSModules(styles, {
  allowMultiple: true
})
class PreferenceList extends Component<IProps, IState> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const { username, email, encriptedPassword, showFav } = this.props

    return (
      <div styleName="settings">
        <div className="page-content">
          <div className="page-header">
            <h1 style={{marginBottom: 0}} className="page-title">设置</h1>
            <span>功能开发中，暂为只读</span>
          </div>
          <ul styleName="options">
            <li styleName="option">
              <h2>用户名</h2>
              <span styleName="option-input">readrweb.com/@<strong>{username}</strong></span>
              <span styleName="edit">编辑</span>
            </li>
            <li styleName="option">
              <h2>邮箱</h2>
              <span styleName="option-input">{email}</span>
              <span styleName="edit">编辑</span>
            </li>
            <li styleName="option">
              <h2>密码</h2>
              <span styleName="option-input">******</span>
              <span styleName="edit">编辑</span>
            </li>
            <li styleName="option">
              <h2>公开展示我的收藏</h2>
              <span styleName="option-desc">关闭后其他用户将无法查看您的收藏</span>
              <Switcher
                styleName="switcher"
                value={showFav}
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

export default PreferenceList
