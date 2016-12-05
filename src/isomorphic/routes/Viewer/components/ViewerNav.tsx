import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CSSModules from 'react-css-modules'
import * as actions from '../../../store/actions'
import * as selectors from '../../../store/selectors'
const styles = require('./ViewerNav.scss')

interface Props {
}

interface AllProps {
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
      <div styleName="viewer-nav">
        {this.renderNav(nav)}
      </div>
    )
  }
}

export default ViewerNav
