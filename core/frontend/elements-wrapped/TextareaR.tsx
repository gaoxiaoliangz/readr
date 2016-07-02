import React, { Component } from 'react'
import { connect } from 'react-redux'
import Textarea, { Props as TextareaProps } from 'elements/Textarea'
import { changeValue } from 'actions/index'
import getElement_R from 'utils/getElement_R'

interface Props extends TextareaProps {
  symbol?: symbol

  elements?: any
  changeValue?: any
}

class TextareaR extends Component<Props, any> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Textarea
        value={getElement_R(this.props.elements, this.props.symbol).value}
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
)(TextareaR)
