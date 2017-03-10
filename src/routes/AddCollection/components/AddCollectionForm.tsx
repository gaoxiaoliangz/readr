import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification } from '../../../actions'
import { Textarea, Button, SelectizeInput, Input } from '../../../components/form'
import * as selectors from '../../../selectors'
import _ from 'lodash'
import form from 'better-redux-form'

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

@form({
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
            _booksValue.set(newValue)
          } }
          value={_booksValue.get()}
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
          })}
          >添加</Button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    routing: state.routing.locationBeforeTransitions,
    booksSearchAsOptions: selectors.booksAsOptions('search')(state)
  }
}

export default connect<{}, {}, Props>(
  mapStateToProps,
  { sendNotification }
)(AddCollectionForm)
