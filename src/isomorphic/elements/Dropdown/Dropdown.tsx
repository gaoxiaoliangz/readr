import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
const styles = require('./_dropdown.scss')

interface IProps {
  title: string | JSX.Element
  className?: string
  styleName?: string
}

interface IState {
  showMenu?: boolean
}

@CSSModules(styles, {
  allowMultiple: true
})
class Dropdown extends Component<IProps, IState> {

  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.hideExpended = this.hideExpended.bind(this)
  }

  toggleDropdown(e) {
    e.stopPropagation()
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  hideExpended() {
    this.setState({
      showMenu: false
    })
  }

  componentDidMount() {
    window.addEventListener('click', this.hideExpended)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.hideExpended)
  }

  render() {
    const { className } = this.props

    return (
      <div onClick={this.toggleDropdown} styleName="dropdown" className={className || ''}>
        <span styleName="dropdown-toggle">
          {this.props.title} <span styleName="dropdown-caret" />
        </span>
        <div styleName="dropdown-menu">
          <ul>
          {
            this.state.showMenu ? this.props.children : null
          }
          </ul>
        </div>
      </div>
    )
  }
}

export default Dropdown
