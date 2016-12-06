import React, { Component } from 'react'

interface Props {
  forward: () => void
  backward: () => void
}

export default class NavArrow extends Component<Props, void> {

  constructor(props) {
    super(props)
  }

  handleForwardClick() {
    this.props.forward()
  }

  handleBackwardClick() {
    this.props.backward()
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div onClick={this.handleBackwardClick.bind(this)}>-</div>
        <div onClick={this.handleForwardClick.bind(this)}>+</div>
      </div>
    )
  }
}
