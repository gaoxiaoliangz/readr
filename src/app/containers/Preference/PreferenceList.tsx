import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import Switcher from '../../components/Switcher'
import EditableField from '../../components/EditableField/EditableField'
import styles from './PreferenceList.scss'

interface IProps {
  username: string
  email: string
  showFav: boolean
  onSave: (data: any) => void
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

  _handleSave(data) {
    this.props.onSave({
      ..._.pick(this.props, ['username', 'email']),
      ...data
    })
  }

  render() {
    const { username, email, showFav } = this.props

    return (
      <div styleName="settings">
        <div className="page-content">
          <div className="page-header">
            <h1 style={{ marginBottom: 0 }} className="page-title">设置</h1>
          </div>
          <ul styleName="options">
            <li styleName="option">
              <EditableField
                label="用户名"
                display={<span styleName="option-input">readrweb.com/@<strong>{username}</strong></span>}
                initialValue={username}
                onSave={(val) => {
                  this._handleSave({
                    username: val
                  })
                }}
              />
            </li>
            <li styleName="option">
              <EditableField
                label="邮箱"
                initialValue={email}
                onSave={(val) => {
                  this._handleSave({
                    email: val
                  })
                }}
              />
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
