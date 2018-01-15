import React, { Component } from 'react'

interface IProps {
  title: string
  tabKey?: string
  hide?: boolean
}

interface IState {
}

class Tab extends Component<IProps, IState> {

  static defaultProps = {
    hide: false
  }

  render() {
    return (
      <div className="tab">
        {this.props.children}
      </div>
    )
  }
}

export default Tab
