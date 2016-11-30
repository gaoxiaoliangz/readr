import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification, loadSomething, saveSomething } from '../../store/actions'
// import * as actions from '../../store/actions'
import { bindActionCreators } from 'redux'
import { Button } from '../../elements/form'

interface Props {
}

interface LocalState {
}

interface AllProps extends Props {
  routing: any
  sendNotification: any
  loadSomething: any
  saveSomething: any
}

function mapStateToProps(state) {
  return {
    routing: state.routing.locationBeforeTransitions
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendNotification, loadSomething, saveSomething }, dispatch)
}

@connect<AllProps>(
  mapStateToProps,
  mapDispatchToProps
)
export default class TestPlace extends Component<AllProps, LocalState> {

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
