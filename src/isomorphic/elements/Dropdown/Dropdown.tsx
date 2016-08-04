import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
const styles: any = require('./_dropdown.scss')

interface IProps {
  title: string | JSX.Element
  className?: string
  styleName?: string
}

interface IState {
  showMenu?: boolean
}

// todo: 放到 utils/dom 里面
function isDescendant(parent, child) {
  let node = child.parentNode
  while (node != null) {
    if (node === parent) {
      return true
    }
    node = node.parentNode
  }
  return false
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
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.hideExpended = this.hideExpended.bind(this)
  }

  toggleDropdown(e) {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  hideExpended(e) {
    // 检查点击的 dom 是否是 dropdown 的子元素
    // 如果是那么就不做处理，而 toggleDropdown 会响应
    // 解决了页面上同时用两个 dropdown 时，其中一个展开，点击另一个前者不合上的问题
    if (!isDescendant(this.dropdown, e.target)) {
      this.setState({
        showMenu: false
      })
    }
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
      <div ref={ref => { this.dropdown = ref }} onClick={this.toggleDropdown} styleName="dropdown" className={className || ''}>
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
