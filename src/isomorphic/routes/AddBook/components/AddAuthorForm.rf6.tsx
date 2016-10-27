import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Fields } from 'redux-form'
import { sendNotification, closeModal } from '../../../store/actions'
import Input from '../../../elements/Input'
import ModalFooter from '../../../elements/Modal/ModalFooter'

interface Props {
  initialData?: any
  onSave: (data: any) => void
}

interface AllProps extends Props {
  routing: any
  sendNotification: any
  handleSubmit: any
  fields: any
  closeModal: () => void
}

const renderFields = fields2 => {
  const { name, slug, description } = fields2

  return (
    <div>
      <Input placeholder="名字" {...name.input} />
      <Input placeholder="唯一标识" {...slug.input} />
      <Input placeholder="描述" {...description.input} />
    </div>
  )
}

const fields = ['name', 'slug', 'description']

@reduxForm({
  form: 'addAuthor',
  fields
})
class AddAuthorForm extends Component<AllProps, {}> {

  constructor(props) {
    super(props)
  }

  render() {
    const { handleSubmit, closeModal, onSave } = this.props

    return (
      <div>
        <Fields
          names={fields}
          component={renderFields}
        />
        <ModalFooter
          onConfirm={handleSubmit(data => {
            onSave(data)
          })}
          onCancel={closeModal}
          />
      </div>
    )
  }
}

export default connect<{}, {}, Props>(
  (state, ownProps) => ({
    initialValues: ownProps.initialData,
    routing: state.routing.locationBeforeTransitions
  }),
  { sendNotification, closeModal }
)(AddAuthorForm)
