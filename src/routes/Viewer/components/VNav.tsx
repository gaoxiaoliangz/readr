import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as actions from '../../../actions'
import * as selectors from '../../../selectors'
import preventScroll from '../../../utils/browser/preventScroll'
import { resolveBookLocation } from '../utils'
import $ from 'jquery'
import styles from './VNav.scss'
import schemas from '../../../schemas'
import Backdrop from '../../../components/Backdrop'
import { Fade, Slide } from '../../../components/animations'

interface Props { }

interface AllProps {
  nav: TBookNav[]
  viewerGoTo: typeof actions.viewer.viewerGoTo
  sendNotification: typeof actions.sendNotification
  toggleViewerNavigation: typeof actions.viewer.toggleViewerNavigation
  computedPages: TBookPage[]
  config: Viewer.Config
  bookInfo: SelectedEntity
  components: Viewer.Components
}

const mapStateToProps = (state, ownProps) => {
  const bookId = selectors.viewer.id(state)
  const bookInfo = selectors.entity(schemas.BOOK, bookId)(state)
  const nav = selectors.viewer.navData(bookId)(state)
  const computedPages = selectors.viewer.computed(bookId)(state)
  const config = selectors.viewer.config(state)
  const components = selectors.viewer.components(state)

  return { nav, computedPages, config, bookInfo, components }
}

@CSSModules(styles)
class VNav extends Component<AllProps, void> {

  $body: any

  constructor(props) {
    super(props)
    this.handleNavLinkClick = this.handleNavLinkClick.bind(this)
    this.handleDropbackClick = this.handleDropbackClick.bind(this)
  }

  componentDidMount() {
    this.$body = $('body')
    preventScroll.init('.js-nav-scroll')
    this.$body.on('click', '.js-book-nav', this.handleNavLinkClick)
  }

  componentWillUnmount() {
    preventScroll.destroy('.js-nav-scroll')
    this.$body.off('click', '.js-book-nav', this.handleNavLinkClick)
  }

  handleNavLinkClick(e) {
    e.preventDefault()
    const { computedPages } = this.props
    const href = $(e.target).attr('href')

    try {
      const pageNo = resolveBookLocation(href, computedPages)
      const percentage = (pageNo - 1) / computedPages.length

      this.props.viewerGoTo(percentage)
    } catch (error) {
      this.props.sendNotification(error.message, 'error')
    }
  }

  handleDropbackClick() {
    this.props.toggleViewerNavigation(false)
  }

  renderLink(ref, hash, label) {
    if (hash) {
      return <a className="js-book-nav text-link" href={`#${ref}$${hash}`}>{label}</a>
    }
    return <a className="js-book-nav text-link" href={`#${ref}`}>{label}</a>
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
    const { nav, config: { fluid, width }, components: { showNavigation } } = this.props
    // const _width = fluid ? (width - 50) : 300
    const navStyle = {
      zIndex: 1200
    }

    return (
      <Slide direction="right">
        {
          showNavigation && (
            <div className="js-nav-scroll" styleName="viewer-nav" style={navStyle}>
              <div styleName="wrap">
                <div styleName="title">目录</div>
                {this.renderNav(nav)}
              </div>
            </div>
          )
        }
        <Fade>
          {
            showNavigation && (
              <Backdrop
                style={{
                  background: 'rgba(0,0,0,0.4)'
                }}
                show={true}
                zIndex={1100}
                onClick={this.handleDropbackClick}
              />
            )
          }
        </Fade>
      </Slide>
    )
  }
}

export default connect<{}, {}, {}>(
  mapStateToProps,
  {
    viewerGoTo: actions.viewer.viewerGoTo,
    sendNotification: actions.sendNotification,
    toggleViewerNavigation: actions.viewer.toggleViewerNavigation
  }
)(VNav)
