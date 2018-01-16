import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input, Button } from '../../../components/form'
import { required, maxLength, minLength, isValidEmail } from '../../../utils/validators'

interface OwnProps {
  initialValues?: any
  onSave: (data: any) => void
}

interface OtherProps {
  handleSubmit: any
}

class SignupForm extends Component<OwnProps & OtherProps, void> {
  _submit = () => {
    const {
      handleSubmit,
      onSave
    } = this.props

    handleSubmit(onSave)()
  }

  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this._submit()
    }
  }

  render() {
    return (
      <form>
        <Field
          placeholder="邮箱"
          name="email"
          component={Input.Field}
          type="text"
          validate={[required, maxLength(50), minLength(5), isValidEmail]}
          onKeyDown={this._handleKeyDown}
        />
        <Field
          placeholder="密码"
          name="password"
          type="password"
          component={Input.Field}
          validate={[required, maxLength(30), minLength(6)]}
          onKeyDown={this._handleKeyDown}
        />
        <Button
          color="blue"
          onClick={this._submit}>注册</Button>
      </form>
    )
  }
}

const withForm = reduxForm({
  form: 'signup'
})

export default withForm(SignupForm as any) as React.ComponentClass<OwnProps>
