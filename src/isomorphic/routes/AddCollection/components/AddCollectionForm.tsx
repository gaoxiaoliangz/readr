import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { sendNotification } from '../../../store/actions'
import Input from '../../../elements/_form/Input'
import SelectizeInput from '../../../elements/_form/SelectizeInput'
import {Textarea, Button} from '../../../elements/_form'
import * as selectors from '../../../store/selectors'
import _ from 'lodash'

interface Props {
  initialData?: any
  onSave: (data: any) => void
  onBooksValueChange?: (val: string) => void
}

interface AllProps extends Props {
  routing: any
  sendNotification: any
  handleSubmit: any
  fields: any
  booksSearchAsOptions: any
}

interface State {
}

@reduxForm({
  form: 'addCollection',
  fields: ['name', '_booksValue', '_booksValues', '_booksOptions', 'description'],
})
class AddCollectionForm extends Component<AllProps, State> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const {
      fields: { name, _booksValue, _booksValues, _booksOptions, description },
      handleSubmit,
      onSave,
      onBooksValueChange,
      booksSearchAsOptions
    } = this.props

    return (
      <div>
        <Input placeholder="合集名称" {...name} />
        <SelectizeInput
          placeholder="选择书籍"
          onInputChange={newValue => {
            if (onBooksValueChange) {
              onBooksValueChange(newValue)
            }
            _booksValue.onChange(newValue)
          } }
          value={_booksValue.value}
          onValuesChange={_booksValues.onChange}
          options={booksSearchAsOptions}
          values={_booksValues.value || []}
          />
        <Textarea
          {...description}
          placeholder="描述"
          />
        <Button
          onClick={handleSubmit(data => {
            let postData = _.pick(data, ['name', 'description'])
            postData = Object.assign({}, postData, {
              items: _booksValues.value ? _booksValues.value.map(item => item.value) : []
            })
            onSave(postData)
          }) }
          >添加</Button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const booksQuery = _.get(state.form, 'addCollection._booksValue.value', '')

  return {
    initialValues: ownProps.initialData,
    routing: state.routing.locationBeforeTransitions,
    booksSearchAsOptions: selectors.booksAsOptions('search')(state)
  }
}

export default connect<{}, {}, Props>(
  mapStateToProps,
  { sendNotification }
)(AddCollectionForm)
