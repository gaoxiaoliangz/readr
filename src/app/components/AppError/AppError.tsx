import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Logo from '../../components/Logo'
const styles = require('./AppError.scss')

interface IProps {
  title: string
  message: string | JSX.Element
  stack?: string
}

@CSSModules(styles)
class AppError extends Component<IProps, {}> {
  render() {
    const { title, message, stack } = this.props

    return (
      <div>
        <div styleName="header">
          <Logo dark />
        </div>
        <div styleName="body">
          <h1 styleName="title">{title}</h1>
          <div>{message}</div>
          {
            process.env.NODE_ENV !== 'production' && stack
          }
        </div>
      </div>
    )
  }
}

export default AppError
