import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification, loadSomething, saveSomething } from '../../store/actions'
import { Button } from '../../elements/form'

interface Props {
}

interface AllProps extends Props {
  routing: any
  sendNotification: any
  loadSomething: any
  saveSomething: any
}

interface State {
}

class TestPlace extends Component<AllProps, State> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Test Place</h1>
        <Button onClick={e => { this.props.loadSomething() } }>load</Button>
        <span> </span>
        <Button onClick={e => { this.props.saveSomething() } }>save</Button>
      </div>
    )
  }
}

export default connect<{}, {}, Props>(
  state => ({
    routing: state.routing.locationBeforeTransitions
  }),
  { sendNotification, loadSomething, saveSomething }
)(TestPlace)
