import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import isDescendant from '../../utils/dom/isDescendant'
const styles = require('./Dropdown.scss')

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
    this.handleGlobalClick = this.handleGlobalClick.bind(this)
  }

  handleGlobalClick(e) {
    // 检查点击的 dom 是否是 dropdown 的子元素
    // 如果是那么就不做处理，而 toggleDropdown 会响应
    // 解决了页面上同时用两个 dropdown 时，其中一个展开，点击另一个前者不合上的问题
    if (!isDescendant(this.dropdown, e.target)) {
      this.setState({
        showMenu: false
      })
    } else {
      // 如果使用了原生事件，尽量不要混合使用 synthetic 事件，react 的生产版本似乎会出现相关的 bug
      this.setState({
        showMenu: !this.state.showMenu
      })
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.handleGlobalClick)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleGlobalClick)
  }

  render() {
    const { className, style } = this.props

    return (
      <div ref={ref => { this.dropdown = ref } } styleName="dropdown" className={className || ''}>
        <div styleName="dropdown-toggle">
          <span>{this.props.title}</span>
          <span styleName="dropdown-caret"/>
        </div>
        {
          this.state.showMenu && (
            <div styleName={ style === 'dark' ? 'dropdown-menu--dark' : 'dropdown-menu'}>
              <ul>
                {this.props.children}
              </ul>
            </div>
          )
        }
      </div>
    )
  }
}

export default Dropdown
