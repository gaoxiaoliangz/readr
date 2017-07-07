import React, { Component } from 'react'
import classNames from 'classnames'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import styles from './Tab.scss'
import Tab from './Tab'

interface IProps {
  onTabSwitch?: (activeTabIndex: number | string) => void
  defaultActive?: number
  style?: any
  controlled?: boolean
  active?: number | string
}

interface IState {
  active: number
}

@CSSModules(styles, {
  allowMultiple: true
})
class Tabs extends Component<IProps, IState> {

  static Tab = Tab
  static defaultProps = {
    defaultActive: 0
  }

  constructor(props) {
    super(props)
    this.state = {
      active: this.props.defaultActive
    }
  }

  handleTabClick = (index) => {
    if (!this.props.controlled) {
      this.setState({
        active: index
      })
    }
    if (this.props.onTabSwitch) {
      this.props.onTabSwitch(index)
    }
  }

  render() {
    const { style, controlled } = this.props
    const active = controlled ? (this.props.active || 0) : this.state.active

    if (this.props.controlled && _.isUndefined(this.props.active)) {
      console.error('When in controlled mode, you must specify active prop!')
    }

    return (
      <div className="tabs" {...style ? { style } : null}>
        <div styleName="tabs-header">
          <ul>
            {(this.props.children as any).map((child, index) => {
              const tabKey = child.props.tabKey || index
              return (
                <li
                  styleName={classNames({
                    'active': tabKey === active
                  })}
                  key={index}
                  onClick={this.handleTabClick.bind(this, tabKey)}
                >
                  {child.props.title}
                </li>
              )
            })}
          </ul>
        </div>
        {
          (this.props.children as any)
            .filter((child, index) => {
              return (child.props.tabKey || index) === active
            })
            .map(child => {
              return child.props.children
            })[0]
        }
      </div>
    )
  }
}

export default Tabs
