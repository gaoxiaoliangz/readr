import React, { Component, createElement } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as actions from '../store/actions'
import * as selectors from '../store/selectors'

const formActions = actions.form

interface FormConfig {
  form: string
  fields: string[]
  validate?: (values: any) => any
  destroyOnUnmount?: boolean
}

interface FormProps {
  change: typeof actions.change
  touch: typeof actions.touch
  defineField: typeof actions.defineField
  destroy: typeof actions.destroy
  form: any
  formValues: any
  formMeta: any
  formDefinition: any
}

class ElementClass extends Component<any, any> {
}

interface CreateFormClassDecorator {
  // TODO: why so?
  // <T extends (typeof ElementClass)>(config: FormConfig): T
  <T extends Function>(config: FormConfig): T
}

const validateForm = (fields, formValues, validateFn) => {
  if (validateFn) {
    const errors = validateFn(formValues)

    if (!_.isEmpty(errors)) {
      const fieldsWithErrors = _.mapValues(errors, val => {
        return {
          error: val
        }
      })

      return {
        fields: _.merge({}, fields, fieldsWithErrors),
        hasError: true
      }
    }
  }

  return { fields, hasError: false }
}

const createForm: CreateFormClassDecorator = (config: FormConfig) => {
  const { fields: fieldsArr, form: formName, validate, destroyOnUnmount } = config

  return WrappedComponent => {
    class Form extends Component<FormProps, {}> {

      createField(value, key) {
        const { change } = this.props

        const setFieldValue = val => {
          let newVal = val
          if (typeof val === 'object' && val.target) {
            newVal = val.target.value || ''
          }
          change(formName, key, newVal, false, false)
        }

        const events = {
          onChange: val => setFieldValue(val)
        }

        return {
          [key]: {
            get: (defaultVal?) => value || defaultVal || '',
            set: events.onChange,
            value,
            onChange: events.onChange,
            events
          }
        }
      }

      componentDidMount() {
        const { defineField } = this.props
        fieldsArr.forEach(field => {
          defineField(formName, field)
        })
      }

      componentWillUnmount() {
        // TODO
        // 生成版本的 React 会在初始化时执行一次 unmount 尚未查明原因
        if (destroyOnUnmount) {
          this.props.destroy(formName)
        }
      }

      render() {
        let decoratedFields
        const { touch, formValues, formDefinition, formMeta } = this.props

        const fieldsObjArr = _.map(fieldsArr, key => {
          const fieldValue = formValues[key] || ''
          return this.createField(fieldValue, key)
        })

        fieldsObjArr.forEach(field => {
          decoratedFields = _.assign({}, decoratedFields, field)
        })

        let collectedValues = {}
        formDefinition.forEach(def => {
          const key = def.name
          collectedValues[key] = formValues[key]
        })

        const { fields: fieldsWithError, hasError } = validateForm(decoratedFields, collectedValues, validate)
        decoratedFields = fieldsWithError
        decoratedFields = _.merge({}, decoratedFields, formMeta)

        const handleSubmit = fn => {
          return e => {
            touch(formName, formDefinition.map(def => def.name))
            if (!hasError) {
              fn(collectedValues)
            }
          }
        }

        return createElement(WrappedComponent, _.assign({}, this.props, {
          fields: decoratedFields,
          handleSubmit
        }))
      }
    }

    return connect(
      state => {
        return {
          form: selectors.form.fullForm(formName)(state),
          formValues: selectors.form.formValues(formName)(state),
          formDefinition: selectors.form.formDefinition(formName)(state),
          formMeta: selectors.form.formMeta(formName)(state)
        }
      },
      formActions
    )(Form as any)
  }
}

export default createForm
