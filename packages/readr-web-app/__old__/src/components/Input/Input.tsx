import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import classnames from 'classnames'
import _ from 'lodash'
import styles from './Input.scss'

export interface Props {
  className?: string
  placeholder?: string
  onChange?: any
  value?: string
  type?: string
  name?: string
  error?: any
  touched?: boolean
  onKeyDown?: any
}

export const InputField = ({ input: { value, onChange }, meta: { touched, error }, ...rest }) => {
  return (
    <Input {...rest} touched={touched} error={error} value={value} onChange={onChange} />
  )
}

@CSSModules(styles, {
  allowMultiple: true
})
class Input extends Component<Props, void> {

  input: any

  static Field = InputField

  focus() {
    this.input.focus()
  }

  render() {
    const { error, touched, className, ...rest } = this.props
    const showError = error && touched

    return (
      <div styleName={classnames({ 'input-wrap': !showError, 'input-wrap--error': showError })} className={className || ''}>
        <input
          {...rest}
          ref={ref => this.input = ref}
          styleName="input"
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={e => {
            this.props.onChange(e)
          }}
          type={this.props.type ? this.props.type : 'text'}
          name={this.props.name ? this.props.name : null}
        />
        {
          showError && (
            <div styleName="error-msg">{error}</div>
          )
        }
      </div>
    )
  }
}

export default Input
