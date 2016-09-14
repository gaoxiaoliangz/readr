import React, { Component } from 'react'
import classNames from 'classnames'
import CSSModules from 'react-css-modules'
const styles = require('./_tab.scss')

interface IProps {
  onTabSwitch?: (activeTabIndex: number) => void
  defaultActive?: number
  style?: any
}

interface IState {
  active: number
}

@CSSModules(styles, {
  allowMultiple: true
})
class Tabs extends Component<IProps, IState> {

  constructor(props) {
    super(props)
    this.state = {
      active: this.props.defaultActive
    }
    this.handleTabClick = this.handleTabClick.bind(this)
  }

  handleTabClick(index) {
    this.setState({
      active: index
    })
    if (this.props.onTabSwitch) {
      this.props.onTabSwitch(index)
    }
  }

  componentDidMount() {
  }

  render() {
    const { style } = this.props

    return (
      <div className="tabs" {...style ? {style} : null}>
        <div styleName="tabs-header">
          <ul>
            {(this.props.children as any).map((child, index) => {
              return (
                <li styleName={classNames({'active': index === this.state.active})} key={index} onClick={this.handleTabClick.bind(this, index) }>
                  {child.props.title}
                </li>
              )
            }) }
          </ul>
        </div>
        {
          (this.props.children as any)
            .filter((child, index) => {
              return index === this.state.active
            })
            .map(child => {
              return child.props.children
            })[0]
        }
      </div>
    )
  }
}

(Tabs as any).defaultProps = {
  defaultActive: 0
}

export default Tabs
