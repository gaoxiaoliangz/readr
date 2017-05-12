import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import Viewer2WithData from './Viewer2WithData'

interface Props {
  params: any
  actions: typeof actions
}

const viewerConfig = {
  pageHeight: 900,
  fontSize: 19,
  lineHeight: 1.6,
  width: 600
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

class Viewer2 extends Component<Props, {}> {

  componentDidMount() {
    this.props.actions.viewer.setViewerId(this.props.params.id)
    this.props.actions.viewer.configViewer(viewerConfig)
  }

  render() {
    return (
      <Viewer2WithData
        params={this.props.params}
        config={viewerConfig}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  dispatch => ({
    actions: {
      viewer: bindActionCreators(actions.viewer as {}, dispatch)
    }
  })
)(Viewer2)
