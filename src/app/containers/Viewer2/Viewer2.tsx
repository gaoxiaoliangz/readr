import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import Viewer2WithData from './Viewer2WithData'

interface Props {
}

interface AllProps extends Props {
  actions: typeof actions
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

class Viewer2 extends Component<AllProps, {}> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Viewer2WithData
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
