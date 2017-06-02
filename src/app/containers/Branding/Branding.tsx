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
import Button from '../../components/Button/Button'
import Icon from '../../components/Icon/Icon'
import cx from 'classnames'
import helpers from '../../helpers'
import { graphql, compose, gql } from 'react-apollo'
import withIndicator from '../../helpers/withIndicator'
import VIEWER_READING_HISTORY from '../../graphql/fragments/ViewerReadingHistory.gql'

type Data = State.Apollo<{
  viewer: {
    readingHistory: Schema.Connection<{
      id: string
      bookId: string
      title: string
      description: string
      percentage: number
      authors: any[]
      cover: string
    }>
  }
}>

interface OwnProps {
  className?: string
  bgColor?: string
  style?: React.CSSProperties
}

interface OtherProps {
  data: Data
  logout: typeof logout
  config: Viewer.Config
  session: State.Session
  username: string
  displayName: string
  isAdmin?: boolean
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
    routing: selectors.routing(state),
    displayName: session.displayName
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

  // componentWillReceiveProps(nextProps) {
  //   const userLoggedIn = this.props.session.role === 'visitor'
  //     && nextProps.session.role !== 'visitor'

  //   if (userLoggedIn) {
  //     this.props.loadShelf()
  //   }
  // }

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
    const { username, bgColor, style, displayName } = this.props
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
                <li styleName={cx({ 'nav-item': true, 'active': path === '/browse' })}>
                  <Link className="light-link" styleName="nav-link" to="/browse"><Icon size={20} name="view" /> 浏览</Link>
                </li>
                <li styleName={cx({ 'nav-item': true, 'active': path === '/search' })}>
                  <Link className="light-link" styleName="nav-link" to="/search"><Icon size={18} name="search" /> 搜索</Link>
                </li>
                {
                  isLoggedIn && (
                    <li styleName={cx({ 'nav-item': true, 'active': path === '/user/shelf' })}>
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
                      this.props.data.viewer.readingHistory.edges.length !== 0 && (
                        <Dropdown className="dropdown-recent-reading" styleName="dropdown-recent-reading" title="最近阅读">
                          {
                            this.props.data.viewer.readingHistory.edges.slice(0, 5).map((edge, index) => {
                              return (
                                <DropdownItem key={index}>
                                  <Link to={helpers.getReaderUri(edge.node.bookId)}>{edge.node.title}</Link>
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
                        <div style={{ display: 'inline-block' }}>{displayName || username}{isAdmin && <span className="badge">管理员</span>}</div>
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


const withData = graphql(gql`
  query ProfileQuery {
    viewer {
      readingHistory {
        ...ViewerReadingHistory
      }
    }
  }
  ${VIEWER_READING_HISTORY}
`)

export default compose<{}, {}, {}, {}, React.ComponentClass<OwnProps>>(
  withData,
  withIndicator(),
  connect(
    mapStateToProps,
    { logout }
  ),
  CSSModules(styles)
)(Branding)
