import React, { Component } from 'react'
import { connect } from 'react-redux'
import form from 'better-redux-form'
import { sendNotification, closeModal } from '../../../store/actions'
import { Input, Textarea } from '../../../elements/form'
import ModalFooter from '../../../elements/Modal/ModalFooter'

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
  form: 'bookMeta',
  fields: ['title', 'authors', 'description', 'cover']
})
class BookMetaForm extends Component<OwnProps & StateProps & DispatchProps, {}> {

  constructor(props) {
    super(props)
  }

  render() {
    const {
      fields: { title, authors, description, cover },
      handleSubmit, closeModal, onSave
    } = this.props

    return (
      <div>
        <Input placeholder="书名" {...title} />
        <Input placeholder="作者" {...authors} />
        <Textarea placeholder="描述" {...description} />
        <Input placeholder="封面" {...cover} />
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

export default connect<StateProps, DispatchProps, OwnProps> (
  state => state,
  { sendNotification, closeModal }
)(BookMetaForm)
