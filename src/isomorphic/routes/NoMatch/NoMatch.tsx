import React, { Component } from 'react'
import { Link } from 'react-router'
import DocContainer from '../../containers/DocContainer'
import AppError from '../../containers/AppError'

interface IProps {
  title?: string
  message?: string
}

class NoMatch extends Component<IProps, {}> {
  render() {
    return (
      <DocContainer title="页面未找到">
        <AppError
          title="抱歉，页面未找到！"
          message={(<div>你可以<Link className="border-link" to="/">返回首页</Link>继续浏览</div>)}
        />
      </DocContainer>
    )
  }
}

export default NoMatch
