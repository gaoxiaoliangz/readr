import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import Viewer2WithData from './Viewer2WithData'
import * as selectors from '../../selectors'

interface Props {
  params: any
  actions: typeof actions
  viewerConfig: Viewer.Config
}

// todo
const initialViewerConfig = {
  pageHeight: 900,
  fontSize: 18,
  lineHeight: 1.6,
  width: 600
}

const mapStateToProps = (state, ownProps) => {
  const config = selectors.viewer.config(state)
  return {
    viewerConfig: config
  }
}

class Viewer2 extends Component<Props, {}> {

  componentDidMount() {
    this.props.actions.viewer.setViewerId(this.props.params.id)
    this.props.actions.viewer.configViewer(initialViewerConfig)
  }

  render() {
    const { viewerConfig: { fontSize, width, pageHeight } } = this.props
    return (
      <Viewer2WithData
        params={this.props.params}
        config={{
          fontSize,
          width,
          pageHeight,
          lineHeight: 1.7
        }}
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
