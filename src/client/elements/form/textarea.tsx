import React, { Component } from 'react'
import { Props as InputProps } from './input'

export interface Props extends InputProps {
}

class Textarea extends Component<Props, any> {
  constructor(props) {
    super(props)
  }

  render() {
    let className = this.props.className ? `textarea-wrap ${this.props.className}` : 'textarea-wrap'
    let props = Object.assign({}, this.props)
    delete props.className

    return (
      <div className={className}>
        <textarea
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

export default Textarea
