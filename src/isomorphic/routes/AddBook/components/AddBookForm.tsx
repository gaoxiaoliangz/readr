import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { sendNotification, openModal } from '../../../store/actions'
import * as selectors from '../../../store/selectors'
import Input from '../../../elements/_form/Input'
import Textarea from '../../../elements/_form/Textarea'
import { Button, SelectizeInput} from '../../../elements/_form'
import AddAuthorForm from './AddAuthorForm'
import _ from 'lodash'

interface Props {
  initialData?: any
  onTitleInputChange?: (newVal: string) => void
  onAuthorInputChange?: (newVal: string) => void
}

interface AllProps extends Props {
  routing: any
  sendNotification: any
  handleSubmit: any
  fields: any
  doubanBooksAsOptions: any[]
  openModal: (data: openModal) => void
}

interface State {
}

@reduxForm({
  form: 'addBook',
  fields: ['_titleValue', '_titleValues', '_authorValue', '_authorValues', 'cover', 'description'],
})
class AddBookForm extends Component<AllProps, State> {

  constructor(props) {
    super(props)
    this.handleTitleOptionClick = this.handleTitleOptionClick.bind(this)
    this.handleAuthorOptionClick = this.handleAuthorOptionClick.bind(this)
  }

  handleTitleOptionClick(option) {
    const {
      fields: { _titleValue, _titleValues, _authorValue, cover, description },
    } = this.props

    cover.onChange(option.additional.cover)
    _authorValue.onChange(option.additional.author)
    description.onChange(option.additional.description)
  }

  handleAuthorOptionClick(option) {
    console.log('author');

  }

  componentDidMount() {
  }

  render() {
    const {
      fields: { _titleValue, _titleValues, _authorValue, _authorValues, cover, description },
      handleSubmit,
      onTitleInputChange,
      onAuthorInputChange,
      doubanBooksAsOptions
    } = this.props

    return (
      <div>
        <SelectizeInput
          placeholder="Book title"
          onInputChange={newValue => {
            onTitleInputChange(newValue)
            _titleValue.onChange(newValue)
          } }
          value={_titleValue.value}
          onValuesChange={newValues => {
            _titleValues.onChange(newValues)
          } }
          options={doubanBooksAsOptions}
          values={_titleValues.value || []}
          onOptionClick={this.handleTitleOptionClick}
          />
        <SelectizeInput
          placeholder="Author"
          onInputChange={newValue => {
            onAuthorInputChange(newValue)
            _authorValue.onChange(newValue)
          } }
          value={_authorValue.value}
          onValuesChange={newValues => {
            _authorValues.onChange(newValues)
          } }
          options={[]}
          values={_authorValues.value || []}
          onOptionClick={this.handleAuthorOptionClick}
          onAddNewValue={value => {
            // this.props.changeValue(syls.inputAuthorName, value)
            // // todo
            // this.props.changeValue(syls.inputAuthorSlug, value)
            // this.props.changeValue(syls.textareaAuthorDesc, '')
            // this.setState({
            //   isAddAuthorModalVisible: true,
            // })
            this.props.openModal({
              title: 'Add Author',
              content: <AddAuthorForm/>
            })
          } }
          />
        <Input placeholder="Cover" {...cover} />
        <Textarea placeholder="Description" {...description} />
        <Button onClick={handleSubmit(data => {
          console.log(data);

        }) }>Add</Button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const doubanBookQuery = _.get(state.form, 'addBook._titleValue.value', '')

  return {
    initialValues: ownProps.initialData,
    routing: state.routing.locationBeforeTransitions,
    doubanBooksAsOptions: selectors.doubanBooksAsOptions(doubanBookQuery)(state)
  }
}

export default connect<{}, {}, Props>(
  mapStateToProps,
  { sendNotification, openModal }
)(AddBookForm)
