import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CSSModules from 'react-css-modules'
import * as actions from '../../../actions'
import * as selectors from '../../../selectors'
import preventScroll from '../../../utils/browser/preventScroll'
import * as viewerUtils from '../Viewer.utils'
import $ from 'jquery'
import styles from './ViewerNav.scss'

const JS_NAV_HOOK = 'a.js-book-nav'

interface Props {}

interface AllProps {
  nav?: TBookNav[]
  actions?: typeof actions
  computedPages?: TBookPage[]
  viewerPercentage?: number
}

const mapStateToProps = (state, ownProps) => {
  const { bookId } = selectors.viewer.config(state)
  const nav = selectors.viewer.navData(bookId)(state)
  const { percentage: viewerPercentage } = selectors.viewer.progress(bookId)(state)
  const computedPages = selectors.viewer.computed(bookId)(state)

  return { nav, viewerPercentage, computedPages }
}

@CSSModules(styles)
class ViewerNav extends Component<AllProps, void> {

  $body: any

  constructor(props) {
    super(props)
    this.handleNavLinkClick = this.handleNavLinkClick.bind(this)
  }

  handleNavLinkClick(e) {
    e.preventDefault()
    const { computedPages, viewerPercentage /* 也许会用到 */ } = this.props
    const href = $(e.target).attr('href')

    try {
      const pageNo = viewerUtils.resolveBookLocation(href, computedPages)
      const percentage = (pageNo - 1) / computedPages.length

      this.props.actions.viewerJumpTo(percentage)
    } catch (error) {
      this.props.actions.sendNotification(error.message, 'error')
    }
  }

  componentDidMount() {
    this.$body = $('body')
    // TODO: js hook 常量
    preventScroll.init('.js-nav-scroll')
    this.$body.on('click', JS_NAV_HOOK, this.handleNavLinkClick)
  }

  componentWillUnmount() {
    preventScroll.destroy('.js-nav-scroll')
    this.$body.off('click', JS_NAV_HOOK, this.handleNavLinkClick)
  }

  renderLink(ref, hash, label) {
    if (hash) {
      return <a className="js-book-nav" href={`#${ref}$${hash}`}>{label}</a>
    }
    return <a className="js-book-nav" href={`#${ref}`}>{label}</a>
  }

  renderNav(navList: TBookNav[]) {
    return (
      <ul>
        {
          navList.map((item, index) => {
            if (item.children) {
              return (
                <li key={index}>
                  {this.renderLink(item.ref, item.hash, item.label)}
                  {this.renderNav(item.children)}
                </li>
              )
            }

            return (
              <li key={index}>
                {this.renderLink(item.ref, item.hash, item.label)}
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    const { nav } = this.props

    return (
      <div className="js-nav-scroll" styleName="viewer-nav">
        {this.renderNav(nav)}
      </div>
    )
  }
}

export default connect<AllProps, {}, {}>(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)(ViewerNav)
