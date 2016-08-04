import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input, { Props as InputProps } from '../_form/Input/Input'
import { changeValue } from '../../store/actions'
import _ from 'lodash'

interface Props extends InputProps {
  symbol: symbol

  elements?: any
  changeValue?: any
}

class RInput extends Component<Props, any> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Input
        name={this.props.name}
        value={_.get(this.props.elements[this.props.symbol], 'value', '')}
        placeholder={this.props.placeholder}
        onChange={e => {
          const newValue = e.target.value
          this.props.changeValue(this.props.symbol, newValue)
          if (this.props.onChange) {
            this.props.onChange(newValue)
          }
        }}
      />
    )
  }
}

export default connect<{}, {}, Props>(
  state => ({
    elements: state.elements
  }),
  { changeValue }
)(RInput)
