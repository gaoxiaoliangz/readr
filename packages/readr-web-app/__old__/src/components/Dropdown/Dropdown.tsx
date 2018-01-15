import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Dropdown.scss'
import Backdrop from '../Backdrop'
import Icon from '../Icon/Icon'
import DropdownItem from './DropdownItem'
import DropdownItemSep from './DropdownItemSep'

interface IProps {
  title: string | JSX.Element
  className?: string
  styleName?: string
  color?: 'dark' | 'light'
}

interface IState {
  showMenu?: boolean
}

@CSSModules(styles, {
  allowMultiple: true
})
class Dropdown extends Component<IProps, IState> {

  dropdown: any

  static Item = DropdownItem
  static Sep = DropdownItemSep
  static defaultProps = {
    color: 'light'
  }

  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
  }

  handleToggleClick = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  handleMenuClick = () => {
    this.setState({
      showMenu: false
    })
  }

  render() {
    const { className, color } = this.props
    const showMenu = this.state.showMenu

    return (
      <div ref={ref => { this.dropdown = ref }} styleName="dropdown" className={className || ''}>
        <div onClick={this.handleToggleClick} styleName="dropdown-toggle">
          <span>{this.props.title}</span>
          <Icon
            style={{
              marginLeft: 3
            }}
            name="arrowDown"
            size={10}
          />
        </div>
        {
          showMenu && (
            <div
              style={{
                zIndex: 1200
              }}
              styleName={`dropdown-menu--${color} dropdown-menu`}
              onClick={this.handleMenuClick}
            >
              <div styleName="popover-arrow"></div>
              <ul>
                {this.props.children}
              </ul>
            </div>
          )
        }
        <Backdrop
          show={showMenu}
          zIndex={1100}
          onClick={() => {
            this.setState({
              showMenu: false
            })
          }}
        />
      </div>
    )
  }
}

export default Dropdown
