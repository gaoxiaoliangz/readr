import React, { Component } from 'react'
import _ from 'lodash'
import { Container } from '../../components/layout'
import { Dropdown, DropdownItem, DropdownItemSep } from '../../components/Dropdown'
import Logo from '../../components/Logo'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
import styles from './Branding.scss'
import { connect } from 'react-redux'
import { logout } from '../../actions/api'
import * as selectors from '../../selectors'
import { loadShelf } from '../../actions/api'
import Button from '../../components/Button/Button'
import Icon from '../../components/Icon/Icon'
import cx from 'classnames'
import helpers from '../../helpers'

interface OwnProps {
  className?: string
  bgColor?: string
  style?: React.CSSProperties
}

interface OtherProps {
  logout: typeof logout
  loadShelf: typeof loadShelf
  config: Viewer.Config
  session: State.Session
  username: string
  isAdmin?: boolean
  recentReading?: {
    title: string
    id: string
  }[]
  routing: State.Routing
}

interface IState {
  isDropdownMenuVisible: boolean
}

const mapStateToProps = (state, ownProps) => {
  const session = selectors.session(state)
  const bookShelf = selectors.pagination.shelf(state)
  const recentReading = _.get(bookShelf, ['pages', '1'], [])
    .map(book => ({
      title: book.title,
      id: book.id
    }))

  return {
    config: selectors.viewer.config(state),
    isAdmin: session.role === 'admin',
    username: session.username,
    recentReading,
    session,
    routing: selectors.routing(state)
  }
}

@CSSModules(styles, {
  allowMultiple: true
})
class Branding extends Component<OwnProps & OtherProps, IState> {

  constructor(props) {
    super(props)
    this.state = {
      isDropdownMenuVisible: false
    }
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const userLoggedIn = this.props.session.role === 'visitor'
      && nextProps.session.role !== 'visitor'

    if (userLoggedIn) {
      this.props.loadShelf()
    }
  }

  componentWillMount() {
    if (this.props.session.role !== 'visitor') {
      this.props.loadShelf()
    }
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
    const isAdmin = this.props.isAdmin
    const isLoggedIn = this.props.session.role !== 'visitor'
    const { username, recentReading, config: { fluid }, bgColor, style } = this.props
    const brandingStyle = {
      ...style,
      background: bgColor
    }
    const path = this.props.routing.pathname

    return (
      <div style={brandingStyle} styleName={`branding ${this.props.className ? this.props.className : ''}`}>
        <Container className="clearfix">
          <div>
            <div className="left">
              <Logo />
            </div>
            <div className="left" styleName="nav">
              <ul styleName="nav-links">
                <li styleName={cx({'nav-item': true, 'active': path === '/browse'})}>
                  <Link className="light-link" styleName="nav-link" to="/browse"><Icon size={20} name="view" /> 浏览</Link>
                </li>
                <li styleName={cx({'nav-item': true, 'active': path === '/search'})}>
                  <Link className="light-link" styleName="nav-link" to="/search"><Icon size={18} name="search" /> 搜索</Link>
                </li>
                {
                  isLoggedIn && (
                    <li styleName={cx({'nav-item': true, 'active': path === '/user/shelf'})}>
                      <Link className="light-link" styleName="nav-link" to="/user/shelf"><Icon size={18} name="menu" /> 我的书架</Link>
                    </li>
                  )
                }
              </ul>
            </div>
            {
              isLoggedIn
                ? (
                  <div styleName="nav--user">
                    {
                      recentReading.length !== 0 && (
                        <Dropdown className="dropdown-recent-reading" styleName="dropdown-recent-reading" title="最近阅读">
                          {
                            recentReading.slice(0, 5).map((book, index) => {
                              // todo: use graphql
                              return (
                                <DropdownItem key={index}>
                                  <Link to={helpers.getReaderUri(book.id)}>{book.title}</Link>
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
                        <Button bordered color="white" to="/signup">注册</Button>
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
  { logout, loadShelf }
)(Branding as any)
