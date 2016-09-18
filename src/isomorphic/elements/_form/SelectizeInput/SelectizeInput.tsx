import React, { Component } from 'react'
import Icon from '../../Icon'
import classnames from 'classnames'
import CSSModules from 'react-css-modules'
import isDescendant from '../../../utils/dom/isDescendant'
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
    this.handleInputWrapClick = this.handleInputWrapClick.bind(this)
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
    if (e.keyCode === 8 && !this.props.value) {
      this.removeValue(- 1)
    }
    // todo
    // if (e.keyCode === 13 && this.state.showOptions) {
    //   this.addValue()
    // }
  }

  focusInput() {
    this.input.focus()
  }

  handleOutsideClick(e) {
    if (!isDescendant(this.inputWrap, e.target)) {
      this.setState({
        showOptions: false
      })
    }
  }

  handleInputWrapClick() {
    this.focusInput()

    this.setState({
      showOptions: true
    })
  }

  componentDidMount() {
    window.addEventListener('click', this.handleOutsideClick)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleOutsideClick)
  }

  render() {
    const { label, values, onAddNewValue } = this.props

    let value = this.props.value || ''
    let options = this.props.options || []

    let inputWidth = values.length > 0 ? (value.length === 0 ? 16 : value.length * 16) : '100%'
    let placeholder = values.length > 0 ? '' : this.props.placeholder

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
          onClick={this.handleInputWrapClick}
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
            onChange={e => {
              this.props.onInputChange((e.target as any).value)
            } }
            onKeyDown={e => {
              this.handleKeyPress(e)
            } }
            />
        </div>
        {
          this.state.showOptions && (options.length !== 0 || onAddNewValue) ? (
            <ul styleName="query-results">
              {
                options.map((option, index) => {
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

export default SelectizeInput
