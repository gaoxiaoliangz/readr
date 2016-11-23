import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification } from '../../../store/actions'
import BookPage from './BookPage'
import CSSModules from 'react-css-modules'
import classnames from 'classnames'
const styles = require('./BookPageList.scss')

interface Props {
  pages: TBookPage[]
  pageHeight?: number
  fluid?: boolean
}

interface AllProps extends Props {
  routing: any
  sendNotification: any
}

@CSSModules(styles)
class BookPages extends Component<AllProps, {}> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const { pages, fluid, pageHeight } = this.props
    const className = classnames({
      'pages': !fluid,
      'pages--fluid': fluid
    })

    return (
      <div>
        <ul styleName={className}>
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
      </div>
    )
  }
}

export default connect<{}, {}, Props>(
  state => ({
    routing: state.routing.locationBeforeTransitions
  }),
  { sendNotification }
)(BookPages)
