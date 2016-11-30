import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification } from '../../../store/actions'
import BookPage from './BookPage'
import CSSModules from 'react-css-modules'
import classnames from 'classnames'
const styles = require('./BookPages.scss')

interface Props {
  pages: TBookPage[]
  pageHeight?: number
  fluid?: boolean
  totalHeight?: number
}

interface AllProps extends Props {
  routing?: any
  sendNotification?: any
}

@connect<AllProps>(
  state => ({
    routing: state.routing.locationBeforeTransitions
  }),
  { sendNotification }
)
@CSSModules(styles)
export default class BookPages extends Component<AllProps, {}> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const { pages, fluid, pageHeight, totalHeight } = this.props
    const className = classnames({
      'pages': !fluid,
      'pages--fluid': fluid
    })

    return (
      <ul styleName={className} style={{height: totalHeight || 'auto'}}>
        {
          pages.map((page, index) => {
            return (
              <BookPage
                fluid={fluid}
                page={page}
                pageHeight={pageHeight}
                key={index}
                />
            )
          })
        }
      </ul>
    )
  }
}
