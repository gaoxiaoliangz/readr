import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
const styles = require('./Input.css')

export interface Props {
  className?: string
  placeholder?: string
  onChange?: any
  value?: string
  type?: string
  name?: string
}

@CSSModules(styles, {
  allowMultiple: true
})
class Input extends Component<Props, any> {
  constructor(props) {
    super(props)
  }

  render() {
    let props = Object.assign({}, this.props)
    delete props.className

    return (
      <div styleName="input-wrap" className={this.props.className || ''}>
        <input
          styleName="input"
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
