import React, { Component } from 'react'

interface Props {
  maxWidth?: number | string
  isFluid?: boolean
  className?: string
}

class Container extends Component<Props, void> {

  static defaultProps: Props = {
    maxWidth: '100%',
    isFluid: false
  }

  render() {
    const className = (this.props.isFluid ? 'container-fluid' : 'container') + (this.props.className ? ` ${this.props.className}` : '')

    return (
      <div style={{ maxWidth: this.props.maxWidth, margin: '0 auto' }}>
        <div className={className}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Container
