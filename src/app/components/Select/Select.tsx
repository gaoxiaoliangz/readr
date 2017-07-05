import React, { Component } from 'react'

const EMPTY_OPTION = {
  name: '请选择...',
  value: ''
}

export interface IOptionalProps {
  className?: string
  label?: string
  width?: number | string
  onClick?: any
  style?: any
}

export type Options = Array<{name: string; value: string}>

interface IProps extends IOptionalProps {
  options: Options
  value: string
  onChange: (event: any) => void
}

class Select extends Component<IProps, {}> {
  constructor(props) {
    super(props)
  }

  render() {
    let label = this.props.label ? this.props.label : null
    let customClassName = this.props.className ? this.props.className : ''
    let method = this.props.onClick
    let className = `select-wrap ${customClassName}`.trim()
    let style = {} as any

    if (this.props.width) {
      style.width = this.props.width
    }

    return (
      <div className={className} onClick={method} style={this.props.style ? this.props.style : {}}>
        {
          label ? (
            <label className="form-label">{label}</label>
          ) : null
        }
        <select style={style} value={this.props.value} onChange={this.props.onChange} >
          {
            [EMPTY_OPTION].concat(this.props.options).map((option, index) => {
              return <option value={option.value} key={index}>{option.name}</option>
            })
          }
          {
            this.props.options.length === 0 && (
              <option value="">空</option>
            )
          }
        </select>
      </div>
    )
  }
}

export default Select
