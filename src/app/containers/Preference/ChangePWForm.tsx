import React, { Component } from 'react'
import { connect } from 'react-redux'
import form from '@gxl/redux-form'
import _ from 'lodash'
import { sendNotification, closeModal } from '../../actions'
import { Input } from '../../components/form'
import ModalFooter from '../../components/Modal/ModalFooter'
import validation from '../../utils/validation'

interface OwnProps {
  onSave: (data: any) => void
}

interface StateProps {
  fields?: any
  handleSubmit?: any
}

interface DispatchProps {
  sendNotification?: typeof sendNotification
  closeModal?: typeof closeModal
}

@form({
  form: 'changePw',
  fields: ['old', 'newPw', 'newPwAgain'],
  validate: (values) => {
    const errors = validation(values)
    if (!_.isEmpty(errors)) {
      return errors
    }
    if (values.newPw !== values.newPwAgain) {
      return {
        newPwAgain: '两次输入密码不一致！'
      }
    }
    if (values.newPw === values.old) {
      return {
        newPw: '新密码不能和旧密码一样！'
      }
    }
    return {}
  }
})
class ChangePWForm extends Component<OwnProps & StateProps & DispatchProps, {}> {

  constructor(props) {
    super(props)
  }

  render() {
    const {
      fields: { old, newPw, newPwAgain },
      handleSubmit, closeModal, onSave
    } = this.props

    return (
      <div>
        <Input type="password" placeholder="原密码" {...old} />
        <Input type="password" placeholder="新密码" {...newPw} />
        <Input type="password" placeholder="重复新密码" {...newPwAgain} />
        <ModalFooter
          onConfirm={handleSubmit(data => {
            onSave({
              oldPassword: old.value,
              newPassword: newPw.value
            })
          })}
          onCancel={closeModal}
          />
      </div>
    )
  }
}

export default connect<StateProps, DispatchProps, OwnProps> (
  state => state,
  { sendNotification, closeModal }
)(ChangePWForm)
