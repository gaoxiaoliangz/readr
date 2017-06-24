import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { sendNotification } from '../../../actions'
import { Input, Button } from '../../../components/form'

interface OwnProps {
  initialValues?: any
  onSave: (data: any) => void
}

interface StateProps {
  routing: any
  sendNotification: any
  handleSubmit: any
  fields: any
}

interface State {
}

const required = value => (value ? undefined : '必填')
const maxLength = max => value =>
  value && value.length > max ? `不能超过 ${max} 个字符` : undefined
const minLength = min => value =>
  value && value.length < min ? `不能少于 ${min} 个字符` : undefined

const renderInput = ({ input: { value, onChange }, meta: { touched, error }, ...rest }) => {
  return (
    <Input
      {...rest}
      touched={touched}
      error={error}
      value={value}
      onChange={onChange}
    />
  )
}

class SigninForm extends Component<StateProps & OwnProps, State> {

  constructor(props) {
    super(props)
    this._submit = this._submit.bind(this)
    this._handleKeyDown = this._handleKeyDown.bind(this)
  }

  _submit() {
    const {
      handleSubmit,
      onSave
    } = this.props

    handleSubmit(onSave)()
  }

  _handleKeyDown(e) {
    if (e.key === 'Enter') {
      this._submit()
    }
  }

  render() {
    const {
      handleSubmit
    } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Field
          placeholder="用户名/邮箱"
          name="login"
          component={renderInput}
          type="text"
          validate={[required, maxLength(20), minLength(5)]}
          onKeydown={this._handleKeyDown}
        />
        <Field
          placeholder="密码"
          name="password"
          type="password"
          component={renderInput}
          validate={[required, maxLength(30), minLength(6)]}
          onKeydown={this._handleKeyDown}
        />
        <Button
          color="blue"
          type="submit"
          onClick={this._submit}>登录</Button>
      </form>
    )
  }
}

export default compose(
  reduxForm({
    form: 'signin'
  }),
  connect(
    (state, ownProps: OwnProps) => {
      return {
        initialValues: ownProps.initialValues,
        routing: state.routing.locationBeforeTransitions
      }
    },
    { sendNotification }
  ),
)(SigninForm as any) as React.ComponentClass<OwnProps>
