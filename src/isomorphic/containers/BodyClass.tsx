import React, { Component, PropTypes as pt } from 'react'
import withSideEffect from 'react-side-effect'
import _ from 'lodash'

interface Props {
  className: string
  styleName?: string
}

@withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)
class BodyClass extends Component<Props, void> { // eslint-disable-line

  static rewind: () => string

  render() {
    return (
      <div className="body-class">{this.props.children}</div>
    )
  }
}

BodyClass['propTypes'] = {
  children: pt.object
}

function reducePropsToState(propsList) {
  const innermostProps = _.last(propsList)

  if (innermostProps) {
    const props = _.pick(innermostProps, ['className']) as any

    const className = props.className = propsList
      .filter(prop => prop.className)
      .map(prop => prop.className)
      .join(' ')

    return className
  }

  return null
}

function handleStateChangeOnClient(className) {
  if (typeof className !== 'undefined') {
    document.body.className = className
  } else {
    document.body.removeAttribute('class')
  }
}

export default BodyClass
