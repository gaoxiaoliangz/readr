import React, { Component, PropTypes } from 'react'

class Input extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    let className = this.props.className?this.props.className:null
    let placeholder = this.props.placeholder
    let value = this.props.value
    let onChange = this.props.onChange

    return (
      <div className={`input ${className}`}>
        <input onChange={onChange} value={value} placeholder={placeholder} />
      </div>
    )
  }
}

Input.propTypes = {
  placeholder: React.PropTypes.string.isRequired
}

export default Input
