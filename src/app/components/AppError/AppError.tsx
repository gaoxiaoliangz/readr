import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Logo from '../../components/Logo'
import styles from './AppError.scss'
import Container from '../Container/Container'

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
        <Container>
          <div styleName="body">
            <h1 styleName="title">{title}</h1>
            <div>{message}</div>
            {
              process.env.NODE_ENV !== 'production' && stack
            }
          </div>
        </Container>
      </div>
    )
  }
}

export default AppError
