import React, { Component } from 'react'
import { Link } from 'react-router'
import Container from '../../components/Container'
import Dropdown from '../../components/Dropdown'
import CSSModules from 'react-css-modules'
import Logo from '../Logo'
import styles from './ConsoleBranding.scss'

interface Props {
  username: string
  isAdmin?: boolean
  onLogout: () => void
}

interface State {
  isDropdownMenuVisible: boolean
}

@CSSModules(styles, {
  allowMultiple: true
})
class ConsoleBranding extends Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      isDropdownMenuVisible: false
    }
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleLogoutClick(e) {
    this.props.onLogout()
    e.preventDefault()
  }

  toggleDropdownMenu() {
    this.setState({
      isDropdownMenuVisible: !this.state.isDropdownMenuVisible
    })
  }

  render() {
    let username = this.props.username
    let isAdmin = this.props.isAdmin ? this.props.isAdmin : 'false'

    return (
      <div styleName="branding">
        <Container isFluid={true} className="clearfix">
          <div>
            <div className="left">
              <Logo to="/console" />
            </div>
            <div styleName="sub-name">
              <span styleName="sub">控制台</span>
            </div>
            <div styleName="nav right">
              {
                username && (
                  <Dropdown
                    title={(
                      <span>{username || '无名'}{ isAdmin && <span className="badge">S</span> }</span>
                    ) }
                    >
                    <Dropdown.Item><Link to="/">回到 Readr</Link></Dropdown.Item>
                    <Dropdown.Item><Link to={`/user/profile`}>个人主页</Link></Dropdown.Item>
                    <Dropdown.Item><Link to={`/user/preference`}>设置</Link></Dropdown.Item>
                    <Dropdown.Sep />
                    <Dropdown.Item><a onClick={this.handleLogoutClick} href="#">退出</a></Dropdown.Item>
                  </Dropdown>
                )
              }
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default ConsoleBranding
