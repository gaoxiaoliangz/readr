import React, { Component } from 'react'
import { Container } from '../../components/layout'
import { Dropdown, DropdownItem, DropdownItemSep } from '../../components/Dropdown'
import Logo from '../Logo'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
import styles from './Branding.scss'
import { connect } from 'react-redux'
import { logout } from '../../actions/api'
import * as selectors from '../../selectors'

interface OwnProps {
  username: string
  isAdmin?: boolean
  className?: string
  recentReading?: {
    title: string
    id: string
  }[]
}

interface OtherProps {
  logout: typeof logout
  config: Viewer.Config
}

interface IState {
  isDropdownMenuVisible: boolean
}

const mapStateToProps = (state, ownProps) => {
  return {
    config: selectors.viewer.config(state)
  }
}

@CSSModules(styles)
class Branding extends Component<OwnProps & OtherProps, IState> {

  constructor(props) {
    super(props)
    this.state = {
      isDropdownMenuVisible: false
    }
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  toggleDropdownMenu() {
    this.setState({
      isDropdownMenuVisible: !this.state.isDropdownMenuVisible
    })
  }

  handleLogoutClick(e) {
    this.props.logout()
    e.preventDefault()
  }

  render() {
    let isAdmin = this.props.isAdmin ? this.props.isAdmin : false

    const { username, recentReading, config: { fluid } } = this.props

    return (
      <div styleName={`branding ${this.props.className ? this.props.className : ''}`}>
        <Container className="clearfix">
          <div>
            <div className="left">
              <Logo />
            </div>
            <div className="left" styleName="nav">
              <ul styleName="nav-links">
                <li styleName="nav-item">
                  <Link className="light-link" styleName="nav-link" to="/browse">浏览</Link>
                </li>
              </ul>
            </div>
            {
              username
                ? (
                  <div styleName="nav--user">
                    {
                      recentReading.length !== 0 && (
                        <Dropdown className="dropdown-recent-reading" styleName="dropdown-recent-reading" title="最近阅读">
                          {
                            recentReading.slice(0, 5).map((book, index) => {
                              return (
                                <DropdownItem key={index}>
                                  <Link to={`/viewer/book/${book.id}`}>{book.title}</Link>
                                </DropdownItem>
                              )
                            })
                          }
                          <DropdownItemSep />
                          <DropdownItem><Link to={`/user/shelf`}>查看全部</Link></DropdownItem>
                        </Dropdown>
                      )
                    }
                    <Dropdown
                      title={(
                        <div style={{ display: 'inline-block' }}>{username}{isAdmin && <span className="badge">管理员</span>}</div>
                      )}
                    >
                      {
                        isAdmin === true && (
                          <DropdownItem><Link to="/console">控制台</Link></DropdownItem>
                        )
                      }
                      <DropdownItem><Link to={`/user/shelf`}>书架</Link></DropdownItem>
                      <DropdownItem><Link to={`/user/profile`}>个人主页</Link></DropdownItem>
                      <DropdownItem><Link to={`/user/preference`}>设置</Link></DropdownItem>
                      <DropdownItemSep />
                      <DropdownItem><a onClick={this.handleLogoutClick} href="#">退出</a></DropdownItem>
                    </Dropdown>
                  </div>
                )
                : (
                  <div styleName="nav--user">
                    <ul styleName="nav-links">
                      <li styleName="nav-item">
                        <Link className="light-link" styleName="nav-link" to="/signin">登录</Link>
                      </li>
                      <li styleName="nav-item">
                        <Link className="light-link" styleName="nav-link" to="/signup">注册</Link>
                      </li>
                    </ul>
                  </div>
                )
            }
          </div>
        </Container>
      </div>
    )
  }
}

export default connect<{}, {}, OwnProps>(
  mapStateToProps,
  { logout }
)(Branding)
