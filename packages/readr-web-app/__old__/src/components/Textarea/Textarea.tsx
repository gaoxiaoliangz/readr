import React, { Component } from 'react'
import { Props as InputProps } from '../Input/Input'
import CSSModules from 'react-css-modules'
const styles = require('./Textarea.scss')

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
          name={this.props.name ? this.props.name : null}
        />
      </div>
    )
  }
}

export const renderTextarea = ({ input: { value, onChange }, meta, ...rest }) => {
  return (
    <Textarea {...rest} value={value} onChange={onChange} />
  )
}

export default Textarea
