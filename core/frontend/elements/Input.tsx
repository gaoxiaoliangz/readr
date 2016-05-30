import React, { Component, PropTypes } from 'react'

interface Props {
  className?: string
  placeholder?: string
  onChange?: any
  value?: string
  name?: string
  type?: string
}

class Input extends Component<Props, any> {
  constructor(props) {
    super(props)
  }

  render(){
    let className = this.props.className?`input-wrap ${this.props.className}`:'input-wrap'
    let props = Object.assign({}, this.props)
    delete props.className

    return (
      <div className={className}>
        { React.createElement('input', props) }
      </div>
    )
  }
}

export default Input
