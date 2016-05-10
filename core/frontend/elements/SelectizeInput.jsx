import React, { Component, PropTypes } from 'react'
import Icon from 'elements/Icon'

class SelectizeInput extends Component{
  constructor(props) {
    super(props)
    this.state = {
      showOptions: false,
      focus: false,
      value: '',
      expendedOptionIndex: 0
    }
  }

  clearState(callback) {
    this.setState({
      showOptions: false,
      value: '',
      expendedOptionIndex: 0
    }, () => {
      if(callback) {
        callback()
      }
    })
  }

  addValue(index) {
    this.clearState(() => {
      this.props.onValuesChange(index, 'ADD')
    })
  }

  removeValue(index) {
    this.clearState(() => {
      this.props.onValuesChange(index, 'REMOVE')
    })
  }

  handleKeyPress(e) {
    if(e.keyCode === 8 && !this.state.value) {
      this.removeValue(this.props.values.length -1)
    }
    if(e.keyCode === 13 && this.state.showOptions) {
      this.addValue(0)
    }
  }

  getFocus() {
    this.refs.input.focus()
  }

  expendOption(index) {
    this.setState({
      expendedOptionIndex: index
    })
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
    let addNewValue = this.props.addNewValue?this.props.addNewValue:undefined

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
          this.state.showOptions && this.state.value !== '' ?(
            <ul className="query-results">
              {
                options.map((option, index) => {
                  if(typeof option === 'string') {
                    return <li onClick={this.addValue.bind(this, index)} key={index}>{option}</li>
                  } else if (typeof option === 'object') {
                    let showMoreInfo = true
                    return (
                    <li
                      onMouseOver={() => {
                        this.expendOption(index)
                      }}
                      onClick={this.addValue.bind(this, index)}
                      key={index}
                    >
                      {option.thumb && this.state.expendedOptionIndex === index ?(
                        <div className="thumb"><img src={option.thumb} /></div>
                      ):null}
                      <h3>{option.value}</h3>
                      {option.subInfo && this.state.expendedOptionIndex === index ?(
                        <p>{option.subInfo}</p>
                      ):null}
                    </li>
                    )
                  }
                })
              }
              {
                options.length === 0 && addNewValue ? (
                  <li onClick={addNewValue} className="add">Add {this.state.value}</li>
                ):null
              }
            </ul>
          ):null
        }
      </div>
    )
  }
}

SelectizeInput.propTypes = {
  // an array that contains strings
  values: React.PropTypes.array.isRequired,
  // takes two parameters: targetIndex, type: Add, REMOVE
  onValuesChange: React.PropTypes.func,
  // options can be an plain array or an array of object {value, subInfo, thumb} providing more info
  options: React.PropTypes.array,
  // add new value when search doesn't match anything
  addNewValue: React.PropTypes.func,
}

export default SelectizeInput
