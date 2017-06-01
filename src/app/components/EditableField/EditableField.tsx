import React, { Component } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

interface Props {
  label?: string
  initialValue?: string
  display?: any
  onSave?: (val: string) => void
}

interface State {
  isEdit: boolean
  inputVal: string
}

class EditableField extends Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      inputVal: ''
    }
    this._handleEditClick = this._handleEditClick.bind(this)
    this._handleCancelClick = this._handleCancelClick.bind(this)
  }

  componentDidMount() {
    this.setState({
      inputVal: this.props.initialValue
    })
  }

  _handleEditClick() {
    this.setState({
      isEdit: !this.state.isEdit
    })
    if (this.state.isEdit === true && this.props.onSave) {
      this.props.onSave(this.state.inputVal)
    }
  }

  _handleCancelClick() {
    this.setState({
      isEdit: false,
      inputVal: this.props.initialValue
    })
  }

  render() {
    const { display } = this.props

    return (
      <div>
        {
          this.props.label && <h2>{this.props.label}</h2>
        }
        {
          this.state.isEdit
            ? <Input
              value={this.state.inputVal}
              onChange={(e) => {
                this.setState({
                  inputVal: e.target.value
                })
              }}
            />
            : display || this.props.initialValue
        }
        <Button onClick={this._handleEditClick}>
          {
            this.state.isEdit
              ? '保存'
              : '编辑'
          }
        </Button>
        {
          this.state.isEdit && (
            <Button color="white" onClick={this._handleCancelClick}>取消</Button>
          )
        }
      </div>
    )
  }
}

export default EditableField
