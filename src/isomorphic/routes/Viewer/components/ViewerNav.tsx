import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
const styles = require('./ViewerNav.scss')

interface Nav {
  index: number
  label: string
  ref: string
  children?: Nav[]
}

interface Props {
  nav: Nav[]
}

interface State {
}

@CSSModules(styles)
class ViewerNav extends Component<Props, State> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  renderNav(navList: Nav[]) {
    return (
      <ul>
        {
          navList.map((item, index) => {
            if (item.children) {
              return (
                <li key={index}>
                  <a className="js-book-nav" href={item.ref}>{item.label}</a>
                  {this.renderNav(item.children)}
                </li>
              )
            }

            return (
              <li key={index}>
                <a className="js-book-nav" href={item.ref}>{item.label}</a>
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
