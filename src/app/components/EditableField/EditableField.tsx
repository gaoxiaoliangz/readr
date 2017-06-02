import React, { Component } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import CSSModules from 'react-css-modules'
import styles from './EditableField.scss'

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

@CSSModules(styles)
class EditableField extends Component<Props, State> {

  input: any

  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      inputVal: ''
    }
    this._edit = this._edit.bind(this)
    this._cancel = this._cancel.bind(this)
  }

  componentDidMount() {
    this.setState({
      inputVal: this.props.initialValue
    })
  }

  _edit() {
    this.setState({
      isEdit: !this.state.isEdit
    }, () => {
      if (this.state.isEdit) {
        this.input.focus()
      }
    })
    if (this.state.isEdit === true && this.props.onSave) {
      this.props.onSave(this.state.inputVal)
    }
  }

  _cancel() {
    this.setState({
      isEdit: false,
      inputVal: this.props.initialValue
    })
  }

  render() {
    const { display } = this.props

    return (
      <div styleName="editable-field" className="clearfix">
        <div className="left">
          {
            this.props.label && <h2>{this.props.label}</h2>
          }
          {
            this.state.isEdit
              ? <Input
                ref={ref => this.input = ref}
                className={styles['input']}
                value={this.state.inputVal}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    this._edit()
                  }
                }}
                onChange={(e) => {
                  this.setState({
                    inputVal: e.target.value
                  })
                }}
              />
              : <span styleName="input-normal">{display || this.props.initialValue}</span>
          }
        </div>
        <div styleName="right">
          <Button color={this.state.isEdit ? 'green' : 'white'} styleName="btn" onClick={this._edit}>
            {
              this.state.isEdit
                ? '保存'
                : '编辑'
            }
          </Button>
          {
            this.state.isEdit && (
              <Button styleName="btn" color="white" onClick={this._cancel}>取消</Button>
            )
          }
        </div>
      </div>
    )
  }
}

export default EditableField
