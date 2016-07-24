import React, { Component } from 'react'

interface IProps {
  title: string
}

interface IState {
}

class Tab extends Component<IProps, IState> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
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
