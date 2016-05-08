import React, { Component, PropTypes } from 'react'
import Icon from 'elements/Icon'

class SelectizeInput extends Component{
  constructor(props) {
    super(props)
    this.state = {
      showOptions: false,
      focus: false,
      value: ''
    }
  }

  addValue(value) {
    let values = [...this.props.values, value]

    this.setState({
      showOptions: false,
      value: ''
    }, () => {
      this.props.onValuesChange(values)
    })
    this.getFocus()
  }

  removeValue(targetIndex) {
    this.props.onValuesChange(this.props.values.filter((value, index) => (targetIndex !== index?true:false)))
    this.setState({
      showOptions: false,
      value: ''
    })
    this.getFocus()
  }

  handleKeyPress(e) {
    if(e.keyCode === 8 && !this.state.value) {
      this.removeValue(this.props.values.length -1)
    }
    if(e.keyCode === 13 && this.state.showOptions) {
      this.addValue(this.props.options[0])
    }
  }

  getFocus() {
    this.refs.input.focus()
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.value !== '') {
      this.setState({
        showOptions: true
      })
    }
  }

  render(){
    let value = this.state.value
    let values = this.props.values
    let options = this.props.options?this.props.options:[]
    let onChange = this.props.onChange?this.props.onChange:null
    let initialInputWidth = this.props.initialInputWidth?this.props.initialInputWidth:'100%'
    let inputWidth = values.length > 0?(value.length === 0?16:value.length * 16):initialInputWidth
    let placeholder = values.length > 0?'':this.props.placeholder
    let className = 'selectize-input' + (this.props.className?` ${this.props.className}`:'') + (this.state.focus === true?' focus':'') + (values.length === 0?' empty':'')

    return (
      <div onClick={this.getFocus.bind(this)} className={className}>
        {
          values.map((value, index) => {
            return (
              <span key={index} className="tag">
                {value}
                <Icon
                  size={"small"}
                  name="close-light"
                  onClick={this.removeValue.bind(this, index)}
                />
              </span>
            )
          })
        }
        <input
          style={{width: inputWidth}}
          ref="input"
          value={value}
          placeholder={placeholder}
          onKeyDown={this.handleKeyPress.bind(this)}
          onBlur={() => {
            this.setState({ focus: false })
          }}
          onFocus={() => {
            this.setState({ focus: true })
          }}
          onChange={event => {
            this.setState({
              value: event.target.value
            })
            onChange(event)
          }}
        />
        {
          this.state.showOptions?(
            <ul className="query-results">
              {
                options.map((option, index) => (
                  <li onClick={this.addValue.bind(this, option)} key={index}>{option}</li>)
                )
              }
            </ul>
          ):null
        }
      </div>
    )
  }
}

SelectizeInput.propTypes = {
  values: React.PropTypes.array.isRequired,
  onValuesChange: React.PropTypes.func.isRequired
}

export default SelectizeInput
