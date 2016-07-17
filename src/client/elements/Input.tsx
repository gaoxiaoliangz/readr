import React, { Component } from 'react'

export interface Props {
  className?: string
  placeholder?: string
  onChange?: any
  value?: string
  type?: string
  name?: string
}

class Input extends Component<Props, any> {
  constructor(props) {
    super(props)
  }

  render() {
    let className = this.props.className ? `input-wrap ${this.props.className}` : 'input-wrap'
    let props = Object.assign({}, this.props)
    delete props.className

    return (
      <div className={className}>
        <input
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={e => {
            this.props.onChange(e)
          }}
          type={this.props.type ? this.props.type : 'text'}
          name={this.props.name ? this.props.name : null}
        />
      </div>
    )
  }
}

export default Input
