import React, { Component } from 'react'
import { connect } from 'react-redux'

interface IProps {
}

interface IAllProps extends IProps {
  routing: any
  elements: any
  sendNotification: any
}

interface IState {
}

class AppMaster extends Component<IAllProps, IState> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default connect<{}, {}, IProps>(
  state => ({
    elements: state.elements,
    routing: state.routing.locationBeforeTransitions
}), {}
)(AppMaster as any)
