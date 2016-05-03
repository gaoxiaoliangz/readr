import React, { Component } from 'react'
import ReactDom from 'react-dom'

class Container extends Component {
  render() {
    const defaultClass = 'dialog z1'

    let className = this.props.className?`${defaultClass} ${this.props.className}`:defaultClass
    let content = this.props.content
    let actions = this.props.actions

    return (
      <div className={className}>
        <p>{content}</p>
        <div className="actions">
          {
            actions.map((action, index) => {
              return <span key={index} onClick={action.function}>{action.text}</span>
            })
          }
        </div>
      </div>
    )
  }
}

export default Container
