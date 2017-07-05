import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Dropdown.scss'
import Backdrop from '../Backdrop'
import Icon from '../Icon/Icon'

interface IProps {
  title: string | JSX.Element
  className?: string
  styleName?: string
  style?: 'blue' | 'dark'
}

interface IState {
  showMenu?: boolean
}

@CSSModules(styles, {
  allowMultiple: true
})
class Dropdown extends Component<IProps, IState> {

  dropdown: any

  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
    this.handleToggleClick = this.handleToggleClick.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  handleToggleClick() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  handleMenuClick() {
    this.setState({
      showMenu: false
    })
  }

  render() {
    const { className, style } = this.props
    const showMenu = this.state.showMenu

    return (
      <div ref={ref => { this.dropdown = ref }} styleName="dropdown" className={className || ''}>
        <div onClick={this.handleToggleClick} styleName="dropdown-toggle">
          <span>{this.props.title}</span>
          {/*<span styleName="dropdown-caret" />*/}
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
              styleName={style === 'dark' ? 'dropdown-menu--dark' : 'dropdown-menu'}
              onClick={this.handleMenuClick}
            >
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
