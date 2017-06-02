import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import ReaderDataLayer from './ReaderDataLayer'
import * as selectors from '../../selectors'
import Loading from '../../components/Loading/Loading'

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
    const { viewerConfig: { fontSize, width, pageHeight, lineHeight } } = this.props
    const config = {
      fontSize,
      width,
      pageHeight,
      lineHeight
    }
    const _config = _.pickBy(config, (val) => {
      return !_.isUndefined(val)
    })

    if (_.isEmpty(_config)) {
      return <Loading useNProgress />
    }

    return (
      <ReaderDataLayer
        params={this.props.params}
        config={config}
        fromHistory
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
