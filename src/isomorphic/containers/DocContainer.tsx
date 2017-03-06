import React, { Component } from 'react'
import _ from 'lodash'
import Helmet from 'react-helmet'
import BodyClass from './BodyClass'

interface Props {
  className?: string
  styleName?: string
  bodyClass?: string

  // from helmet
  head: {
    base?: any
    defaultTitle?: string
    htmlAttributes?: any
    title?: string
    link?: Array<any>
    meta?: Array<any>
    script?: Array<any>
    style?: Array<any>
    titleTemplate?: string
    onChangeClientState?: (newState: any) => void
  }
}

class DocContainer extends Component<Props, void> {

  static rewind: () => {
    bodyClass: string
    head: object
  }

  render() {
    const { bodyClass } = this.props

    return (
      <div className={'gb-doc-container'}>
        <Helmet {...this.props.head} />
        <BodyClass className={bodyClass}>{this.props.children}</BodyClass>
      </div>
    )
  }
}

DocContainer.rewind = () => {
  const bodyClass = BodyClass.rewind()
  const head = Helmet.rewind()

  return {
    head,
    bodyClass
  }
}

export default DocContainer
