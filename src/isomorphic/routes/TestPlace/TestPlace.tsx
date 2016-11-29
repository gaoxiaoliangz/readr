import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification, loadSomething, saveSomething } from '../../store/actions'
import { Button } from '../../elements/form'

interface Props {
}

// interface AllProps extends Props {
//   routing: any
//   sendNotification: any
//   loadSomething: any
//   saveSomething: any
// }

interface State {
}

function mapStateToProps(state) {
  return {
    routing: state.routing.locationBeforeTransitions
  }
}

function mapDispatchToProps(dispatch): any {
  return 'sdfsf' as any
}

@connect<{}, {}, Props>(
  mapStateToProps,
  mapDispatchToProps
  // { sendNotification, loadSomething, saveSomething }
)
class TestPlace extends Component<Props, State> {

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

// const a: typeof TestPlace = {
//   prototype: {}
// }

export default TestPlace
// export default connect<{}, {}, Props>(
//   state => ({
//     routing: state.routing.locationBeforeTransitions
//   }),
//   { sendNotification, loadSomething, saveSomething }
// )(TestPlace)
