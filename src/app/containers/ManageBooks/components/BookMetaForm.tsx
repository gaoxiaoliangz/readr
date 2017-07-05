import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { sendNotification, closeModal } from '../../../actions'
import { renderInput } from '../../../components/Input/Input'
import { renderTextarea } from '../../../components/Textarea/Textarea'
import ModalFooter from '../../../components/Modal/ModalFooter'

interface OwnProps {
  onSubmit: any
  initialValues?: any
}

interface StateProps {
  fields?: any
  handleSubmit?: any
}

interface DispatchProps {
  sendNotification?: typeof sendNotification
  closeModal?: typeof closeModal
}

class BookMetaForm extends Component<OwnProps & StateProps & DispatchProps, {}> {
  render() {
    const {
      handleSubmit, closeModal
    } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Field placeholder="书名" name="title" component={renderInput} />
        <Field placeholder="作者" name="authors" component={renderInput} />
        <Field placeholder="封面" name="cover" component={renderInput} />
        <Field placeholder="描述" name="description" component={renderTextarea} />
        <ModalFooter
          onCancel={closeModal}
        />
      </form>
    )
  }
}

export default compose(
  connect(
    null,
    { sendNotification, closeModal }
  ),
  reduxForm({
    form: 'bookMeta'
  })
)(BookMetaForm) as React.ComponentClass<OwnProps>
