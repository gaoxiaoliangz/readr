import React, { Component } from 'react'
import Paginator from '../../elements/Paginator'
import { connect } from 'react-redux'
import * as selectors from '../../store/selectors'

type PaginationLink = {
  page: number
  url: string
}

interface Props {
  pagination: {
    name: string
    key?: string
  }
}

interface AllProps extends Props {
  routing: any
  paginationLinks: {
    next: PaginationLink
    last: PaginationLink
  }
}

class ContentPage extends Component<AllProps, {}> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const { children, routing, paginationLinks: { next, last } } = this.props

    return (
      <div>
        {children}
        <Paginator
          all={last.page || 1}
          current={next.page - 1 || 1}
          url={{
            pathname: routing.pathname,
            query: routing.query || {}
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { pagination: { name, key } } = ownProps

  return {
    routing: state.routing.locationBeforeTransitions,
    paginationLinks: selectors.paginationLinkSelector(name, key)(state)
  }
}

export default connect<{}, {}, Props>(
  mapStateToProps,
  {}
)(ContentPage)
