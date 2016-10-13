import React, { Component, createElement } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as actions from '../store/actions'
import * as selectors from '../store/selectors'

const formActions = actions.form
const VALUE = 'value'

interface FormConfig {
  form: string
  fields: string[]
}

interface FormProps {
  change: actions.change
  form: any
  formValues: any
}

class ElementClass extends Component<any, any> {
}

interface ClassDecorator {
  <T extends (typeof ElementClass)>(config: FormConfig): T
}

const createForm: ClassDecorator = (config: FormConfig) => {
  const { fields: fieldsArr, form: formName } = config

  return WrappedComponent => {
    class Form extends Component<FormProps, {}> {
      render() {
        const { change, form, formValues } = this.props

        const handleSubmit = fn => {
          return e => {
            fn(formValues)
          }
        }

        const fieldsObjArr = _.map(fieldsArr, key => {
          const fieldValue = _.get(form, [key, VALUE], '')
          const setFieldValue = val => {
            let newVal = val
            if (typeof val === 'object' && val.target && val.target.value) {
              newVal = val.target.value
            }
            change(formName, key, newVal, false, false)
          }

          const events = {
            onChange: val => setFieldValue(val)
          }

          return {
            [key]: {
              get: () => fieldValue,
              set: events.onChange,
              value: fieldValue,
              onChange: events.onChange,
              events
            }
          }
        })

        let fields

        fieldsObjArr.forEach(field => {
          fields = _.assign({}, fields, field)
        })

        return createElement(WrappedComponent, _.assign({}, this.props, {
          fields,
          handleSubmit
        }))
      }
    }

    return connect(
      state => {
        return {
          form: selectors.form.fullForm(formName)(state),
          formValues: selectors.form.formValues(formName)(state)
        }
      },
      formActions
    )(Form as any)
  }
}

export default createForm
