import React, { Component } from 'react'
import Paginator from '../../elements/Paginator'
import { connect } from 'react-redux'

type PaginationLink = {
  page: number
  url: string
}

interface Props {
  pagination: {
    next: PaginationLink
    last: PaginationLink
  }
}

interface AllProps extends Props {
  routing: any
}

class ContentPage extends Component<AllProps, {}> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const { children, routing, pagination: { next, last } } = this.props

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

const mapStateToProps = state => {
  return {
    routing: state.routing.locationBeforeTransitions,
  }
}

export default connect<{}, {}, Props>(
  mapStateToProps,
  {}
)(ContentPage)
