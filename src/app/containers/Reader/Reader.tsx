import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import ReaderDataLayer from './ReaderDataLayer'
import * as selectors from '../../selectors'
import Loading from '../../components/Loading/Loading'
import getScreenInfo from '../../utils/browser/getScreenInfo'

interface Props {
  params: any
  actions: typeof actions
  viewerConfig: Viewer.Config
  routing: State.Routing
}

interface State {
  initialLocation?: string
}

const mapStateToProps = (state, ownProps) => {
  const config = selectors.viewer.config(state)
  return {
    viewerConfig: config,
    routing: selectors.routing(state),
  }
}

class Reader extends Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      initialLocation: ''
    }
  }

  componentDidMount() {
    this.props.actions.viewer.setViewerId(this.props.params.id)
    this.props.actions.viewer.configViewer(this.determineConfig())
    const fromLocation = this.props.routing.hash.substr(1)
    this.setState({
      initialLocation: fromLocation
    })
  }

  determineConfig() {
    const windowWidth = getScreenInfo().width
    return {
      pageHeight: 900,
      fontSize: 18,
      lineHeight: 1.6,
      // todo
      width: windowWidth > 700 ? 600 : windowWidth - 120
    }
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
        fromLocation={this.state.initialLocation}
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
)(Reader)
