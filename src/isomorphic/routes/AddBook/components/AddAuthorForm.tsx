import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { sendNotification, closeModal } from '../../../store/actions'
import Input from '../../../elements/_form/Input'
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

interface State {
}

@reduxForm({
  form: 'addAuthor',
  fields: ['name', 'slug', 'description'],
})
class AddAuthorForm extends Component<AllProps, State> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const {
      fields: { name, slug, description },
      handleSubmit,
      closeModal,
      onSave
    } = this.props

    return (
      <div>
        <Input placeholder="名字" {...name} />
        <Input placeholder="唯一标识" {...slug} />
        <Input placeholder="描述" {...description} />
        <ModalFooter
          onConfirm={handleSubmit(data => {
            console.log(data)
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
