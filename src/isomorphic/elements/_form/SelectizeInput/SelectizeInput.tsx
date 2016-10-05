import React, { Component } from 'react'
import Icon from '../../Icon'
import classnames from 'classnames'
import CSSModules from 'react-css-modules'
import isDescendant from '../../../utils/dom/isDescendant'
import _ from 'lodash'
const styles = require('./SelectizeInput.scss')

type TypeOption = {
  value: string
  name: string
  disabled?: boolean
  additional?: any
}

type TypeValue = {
  value: string
  name: string
}

interface IProps {
  className?: string
  placeholder?: string
  label?: string
  stayFocused?: boolean // default true
  omitSelectedValuesFromOptions?: boolean

  value: string
  onInputChange: (newValue: string) => void

  options: Array<TypeOption>
  onOptionsChange?: (newValues: Array<TypeOption>) => void

  values: Array<TypeValue>
  onValuesChange: (newValues: Array<TypeValue>) => void

  // 额外功能
  onAddNewValue?: (newValue: string) => void
  onOptionClick?: (selectedValue: TypeOption) => void
}

interface IState {
  focus?: boolean
  showOptions?: boolean
  value?: string
  expendedOptionIndex?: number
}

@CSSModules(styles, {
  allowMultiple: true
})
class SelectizeInput extends Component<IProps, IState> {

  input: HTMLInputElement
  inputWrap: HTMLDivElement

  constructor(props) {
    super(props)
    this.state = {
      showOptions: false,
      focus: false,
      value: '',
      expendedOptionIndex: 0
    }
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
    this.focusInput = this.focusInput.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  addValue(newValue) {
    this.props.onValuesChange(this.props.values.concat(newValue))
    if (this.props.onOptionsChange) {
      this.props.onOptionsChange(this.props.options.map(option => (option.value === newValue.value
        ? Object.assign({}, option, { disabled: true })
        : option)))
    }
    this.clearInputValue()
    if (typeof this.props.stayFocused === 'undefined' || this.props.stayFocused !== false) {
      this.focusInput()
    }
    this.hideOptions()
  }

  showOptions() {
    this.setState({
      showOptions: true
    })
  }

  hideOptions() {
    this.setState({
      showOptions: false
    })
  }

  removeValue(index) {
    let newValues = []
    let removedValue

    if (index === -1) {
      newValues = this.props.values.slice(0, this.props.values.length - 1)
      removedValue = this.props.values[this.props.values.length - 1].value
    } else {
      newValues = this.props.values
        .filter((v, i) => {
          removedValue = v.value
          return i !== index
        })
    }

    if (this.props.onOptionsChange) {
      this.props.onOptionsChange(this.props.options.map(option => (option.value === removedValue
        ? Object.assign({}, option, { disabled: false })
        : option)))
    }

    this.props.onValuesChange(newValues)
  }

  clearInputValue() {
    this.props.onInputChange('')
  }

  handleKeyPress(e) {
    if (e.keyCode === 8 && !this.props.value && this.props.values.length !== 0) {
      this.removeValue(-1)
    }
  }

  handleInputChange(e) {
    this.props.onInputChange(e.target.value)
    if ((this.props.options || []).length !== 0) {
      this.showOptions()
    }
  }

  focusInput() {
    this.input.focus()
  }

  handleOutsideClick(e) {
    if (isDescendant(this.inputWrap, e.target) || this.inputWrap === e.target) {
      this.focusInput()
      this.showOptions()
    } else {
      this.hideOptions()
    }
  }

  componentWillReceiveProps(nextProps) {
    const optionsLoaded = (nextProps.options || []).length !== 0 && (this.props.options || []).length === 0
    if (optionsLoaded && this.state.focus) {
      this.showOptions()
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.handleOutsideClick)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleOutsideClick)
  }

  render() {
    const { label, values, onAddNewValue, omitSelectedValuesFromOptions } = this.props

    let value = this.props.value || ''
    let options = this.props.options || []

    let inputWidth = values.length > 0 ? (value.length === 0 ? 16 : value.length * 16) : '100%'
    let placeholder = values.length > 0 ? '' : this.props.placeholder

    let filteredOptions = options
      .filter(option => {
        if (omitSelectedValuesFromOptions) {
          const valueOfValues = _.map(values, 'value')
          return valueOfValues.indexOf(option.value) === -1
        }

        return true
      })

    const selectizeInputStyleName = classnames({
      'selectize-input': true,
      'selectize-input--focus': this.state.focus,
      'selectize-input--empty': values.length === 0
    })

    return (
      <div styleName="selectize-wrap" className={this.props.className || ''}>
        {
          label ? (
            <label className="form-label">{label}</label>
          ) : null
        }
        <div
          styleName={selectizeInputStyleName}
          ref={ref => { this.inputWrap = ref } }
          >
          {
            values.map((v, index) => {
              return (
                <span key={index} styleName="selectize-tag">
                  {v.name}
                  <Icon
                    styleName="icon-remove"
                    size={20}
                    name="close"
                    onClick={e => {
                      this.removeValue(index)
                    } }
                    />
                </span>
              )
            })
          }
          <input
            style={{ width: inputWidth }}
            ref={ref => { this.input = ref } }
            value={value}
            placeholder={placeholder}
            onBlur={e => {
              this.setState({ focus: false })
            } }
            onFocus={e => {
              this.setState({ focus: true })
            } }
            onChange={this.handleInputChange}
            onKeyDown={e => {
              this.handleKeyPress(e)
            } }
            />
        </div>
        {
          this.state.showOptions && (filteredOptions.length !== 0 || onAddNewValue) ? (
            <ul styleName="query-results">
              {
                filteredOptions
                  .map((option, index) => {
                    if (option.disabled) {
                      return <li key={index} className="disabled">{option.name}</li>
                    }
                    return (
                      <li
                        key={index}
                        onClick={e => {
                          this.addValue(option)
                          if (this.props.onOptionClick) {
                            this.props.onOptionClick(option)
                          }
                        } }
                        >
                        <span>{option.name}</span>
                      </li>
                    )
                  })
              }
              {
                onAddNewValue ? (
                  <li
                    onClick={e => {
                      onAddNewValue(this.props.value)
                    } }
                    className="add">添加 <strong>{this.props.value}</strong></li>
                ) : null
              }
            </ul>
          ) : null
        }
      </div>
    )
  }
}

SelectizeInput['defaultProps'] = {
  omitSelectedValuesFromOptions: true
}

export default SelectizeInput
