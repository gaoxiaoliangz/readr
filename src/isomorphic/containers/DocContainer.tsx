import React, { Component } from 'react'
import withSideEffect from 'react-side-effect'
import _ from 'lodash'

const defaultTitle = 'Readr'

interface Props {
  className?: string
  styleName?: string
  bodyClass?: string
  title?: string
  useAsMasterTitle?: boolean
}

class DocContainer extends Component<Props, {}> {
  render() {
    const { className } = this.props

    return (
      className
        ? (
          <div className={'gb-doc-container' + className}>
            {this.props.children}
          </div>
        )
        : <div className="gb-doc-container">{this.props.children}</div>
    )
  }
}

function reducePropsToState(propsList) {
  const innermostProps = propsList[propsList.length - 1]
  let data: any = {}

  if (innermostProps) {
    data = _.pick(innermostProps, ['title', 'bodyClass'])
    if (data.title && !innermostProps.useAsMasterTitle) {
      data.title = `${data.title} | ${defaultTitle}`
    } else {
      data.title = data.title || defaultTitle
    }
  }

  data.bodyClass = propsList
    .filter(prop => prop.bodyClass)
    .map(prop => prop.bodyClass)
    .join(' ')

  return data
}

function handleStateChangeOnClient(propList) {
  const { title, bodyClass } = propList

  if (typeof bodyClass !== 'undefined') {
    document.body.className = bodyClass
  } else {
    document.body.removeAttribute('class')
  }

  if (typeof title !== 'undefined') {
    document.title = title
  } else {
    document.title = defaultTitle
  }
}

export default withSideEffect<Props>(
  reducePropsToState,
  handleStateChangeOnClient
)(DocContainer)
