import React, { Component, PropTypes } from 'react'

class Input extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    let className = this.props.className?this.props.className:null
    let placeholder = this.props.placeholder
    let value = this.props.value

    return (
      <div className={`input ${className}`}>
        <input {...value?{value: value}:{}} placeholder={placeholder} />
      </div>
    )
  }
}

Input.propTypes = {
  placeholder: React.PropTypes.string.isRequired
}

export default Input
