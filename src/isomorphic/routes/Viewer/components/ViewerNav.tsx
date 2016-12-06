import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CSSModules from 'react-css-modules'
import * as actions from '../../../store/actions'
import * as selectors from '../../../store/selectors'
import preventScroll from '../../../utils/browser/preventScroll'
const styles = require('./ViewerNav.scss')

interface Props {}

interface AllProps extends Props {
  nav?: TBookNav[]
}

const mapStateToProps = (state, ownProps) => {
  const { bookId } = selectors.viewer.config(state)
  const nav = selectors.viewer.navData(bookId)(state)

  return { nav }
}

@connect<AllProps>(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)
@CSSModules(styles)
class ViewerNav extends Component<AllProps, void> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // TODO: js hook 常量
    preventScroll.init('.js-nav-scroll')
  }

  componentWillUnmount() {
    preventScroll.destroy('.js-nav-scroll')
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

export default ViewerNav
