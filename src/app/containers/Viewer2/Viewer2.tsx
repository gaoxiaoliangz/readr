import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import Viewer2WithData from './Viewer2WithData'

interface Props {
  params: any
  actions: typeof actions
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

class Viewer2 extends Component<Props, {}> {
  render() {
    return (
      <Viewer2WithData
        params={this.props.params}
        config={{
          pageHeight: 900,
          fontSize: 19,
          lineHeight: 1.6,
          width: 600
        }}
      />
    )
  }
}

export default connect(
  mapStateToProps,
    dispatch => ({
    actions: bindActionCreators(actions as any, dispatch)
  })
)(Viewer2)
