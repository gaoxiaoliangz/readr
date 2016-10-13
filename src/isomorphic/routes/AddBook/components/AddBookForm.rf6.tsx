import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Fields, initialize } from 'redux-form'
import { sendNotification, openModal } from '../../../store/actions'
import * as selectors from '../../../store/selectors'
import Input from '../../../elements/_form/Input'
import Textarea from '../../../elements/_form/Textarea'
import { Button, SelectizeInput } from '../../../elements/_form'
import AddAuthorForm from './AddAuthorForm'
import _ from 'lodash'

export interface SlData {
  author?: {
    value?: string
    values?: {
      name: string
      value: string
    }[]
  }
}

interface Props {
  onTitleInputChange?: (newVal: string) => void
  onAuthorInputChange?: (newVal: string) => void
  onSaveAuthor: (data: any) => void
  onSaveBook: (data: any) => void
  slData?: SlData
  initialize?: any
}

interface AllProps extends Props {
  routing: any
  sendNotification: any
  handleSubmit: any
  fields: any
  doubanBooksAsOptions: any[]
  authorsAsOptions: any[]
  openModal: (data: openModal) => void
}

interface SelectizeData {
  value?: string
  values?: {
    name: string
    value: string
  }[]
}

interface State {
  slTitle?: SelectizeData
  slAuthor?: SelectizeData
}

const fields = ['cover', 'description', 'content']

const RenderedFields = fields2 => {
  const {cover, description, content } = fields2
  return (
    <div>
      <Input placeholder="封面图片地址" {...cover.input} />
      <Textarea placeholder="描述" {...description.input} />
      <Textarea placeholder="在此粘贴书籍内容 (markdown 格式)" {...content.input} />
    </div>
  )
}

@reduxForm(
  {
    form: 'addBook',
    fields,
    enableReinitialize: true,
  }
)
class AddBookForm extends Component<AllProps, State> {

  constructor(props) {
    super(props)
    this.state = {
      slTitle: {
        value: '',
        values: []
      },
      slAuthor: {
        value: '',
        values: []
      },
    }
    this.handleTitleOptionClick = this.handleTitleOptionClick.bind(this)
    this.handleAuthorValuesChange = this.handleAuthorValuesChange.bind(this)
  }

  handleTitleOptionClick(option) {
    const data = {
      cover: option.additional.cover,
      description: option.additional.description
    }
    this.props.initialize(data)
    this.setState({
      slAuthor: {
        value: option.additional.author,
        values: []
      }
    })
  }

  handleAuthorValuesChange(newValues) {
    this.setState({
      slAuthor: _.assign({}, this.state.slAuthor, {
        values: newValues
      })
    })
  }

  componentWillReceiveProps(nextProps, nextState) {
    const authorSlDataChanged = !_.isEmpty(nextProps.slData.author) && !_.isEqual(nextProps.slData, this.props.slData)

    if (authorSlDataChanged) {
      this.setState({
        slAuthor: nextProps.slData.author
      })
    }
  }

  render() {
    const {
      handleSubmit,
      onTitleInputChange,
      onAuthorInputChange,
      doubanBooksAsOptions,
      authorsAsOptions,
      onSaveAuthor,
      onSaveBook,
    } = this.props

    const { slTitle, slAuthor } = this.state

    const selectedAuthorIds = slAuthor.values.map(author => author.value)
    const filteredAuthorOptions = authorsAsOptions.filter(author => {
      return selectedAuthorIds.indexOf(author.value) === -1
    })

    return (
      <div>
        <SelectizeInput
          placeholder="书名"
          value={slTitle.value}
          values={slTitle.values}
          options={doubanBooksAsOptions}
          onInputChange={newValue => {
            onTitleInputChange(newValue)
            this.setState({
              slTitle: _.assign({}, slTitle, {
                value: newValue
              })
            })
          } }
          onValuesChange={newValues => {
            this.setState({
              slTitle: _.assign({}, slTitle, {
                values: newValues
              })
            })
          } }
          onOptionClick={this.handleTitleOptionClick}
          />
        <SelectizeInput
          placeholder="作者"
          value={slAuthor.value}
          values={slAuthor.values}
          options={filteredAuthorOptions}
          onInputChange={newValue => {
            onAuthorInputChange(newValue)
            this.setState({
              slAuthor: _.assign({}, slAuthor, {
                value: newValue
              })
            })
          } }
          onValuesChange={this.handleAuthorValuesChange}
          onAddNewValue={value => {
            this.props.openModal({
              title: '添加作者',
              content: <AddAuthorForm
                initialData={{ name: value }}
                onSave={onSaveAuthor}
                />
            })
          } }
          />

        <Fields
          names={fields}
          component={RenderedFields}
          />

        <Button onClick={handleSubmit(data => {
          const postData = _.assign({}, data, {
            title: _.get(this.state.slTitle, 'values[0].name', '') || this.state.slTitle.value,
            authors: Array.isArray(this.state.slAuthor.values) ? this.state.slAuthor.values.map(v => v.value) : []
          })
          onSaveBook(postData)
        })}>添加</Button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    routing: state.routing.locationBeforeTransitions,
    doubanBooksAsOptions: selectors.doubanBooksAsOptions('search')(state),
    authorsAsOptions: selectors.authorsAsOptions('search')(state),
  }
}

export default connect<{}, {}, Props>(
  mapStateToProps,
  { sendNotification, openModal, initialize }
)(AddBookForm)
