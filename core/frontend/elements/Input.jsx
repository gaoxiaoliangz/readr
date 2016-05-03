import React, { Component, PropTypes } from 'react'

class Input extends Component{
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

Input.propTypes = {
  placeholder: React.PropTypes.string.isRequired
}

export default Input
