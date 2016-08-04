import React, { Component } from 'react'
import { Props as InputProps } from '../Input/Input'
import CSSModules from 'react-css-modules'
const styles = require('./Textarea.css')

export interface Props extends InputProps {
}

@CSSModules(styles, {
  allowMultiple: true
})
class Textarea extends Component<Props, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div styleName="textarea-wrap" className={this.props.className || ''}>
        <textarea
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={e => {
            this.props.onChange(e)
          }}
          styleName="textarea"
          type={this.props.type ? this.props.type : 'text'}
          name={this.props.name ? this.props.name : null}
        />
      </div>
    )
  }
}

export default Textarea
