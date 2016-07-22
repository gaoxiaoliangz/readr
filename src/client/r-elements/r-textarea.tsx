import React, { Component } from 'react'
import { connect } from 'react-redux'
import Textarea, { Props as TextareaProps } from '../elements/form/textarea'
import { changeValue } from '../actions'

interface Props extends TextareaProps {
  symbol?: symbol

  elements?: any
  changeValue?: any
}

class RTextarea extends Component<Props, any> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Textarea
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
)(RTextarea)
