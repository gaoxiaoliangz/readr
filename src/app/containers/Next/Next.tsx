import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import request from '../../../utils/network/request'
import Template from '../../../renderers/Template'

interface Props {
}

interface LocalState {
  pageData: Atom[][][],
  page: number
}

interface AllProps extends Props {
  routing: any
  // sendNotification: any
  // loadSomething: any
  // saveSomething: any
  actions: typeof actions
}

function mapStateToProps(state) {
  return {
    routing: state.routing.locationBeforeTransitions
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(_.assign({}, actions), dispatch)
//   }
// }

class Next extends Component<AllProps, LocalState> {

  constructor(props) {
    super(props)
    this.state = {
      pageData: [],
      page: 1
    }
  }

  componentDidMount() {
    this.loadPage()
  }

  loadPage(page = 1) {
    request(`/api/books/58dc6af101a79153db46b0b1/pages/${page}`, {
      query: {
        pageHeight: 600
      }
    }).then(data => {
      this.setState({
        pageData: data.json,
        page
      })
    })
  }

  render() {
    const pageData = this.state.pageData || {}
    const wrapperStyle: React.CSSProperties = {
      overflow: 'hidden',
      height: 600
    }
    const innerStyle: React.CSSProperties = {
      marginTop: (pageData['meta'] || {}).offset || 0
    }

    return (
      <div>
        <button onClick={() => {
          this.loadPage(this.state.page - 1)
        }}>prev</button>
        <button onClick={() => {
          this.loadPage(this.state.page + 1)
        }}>next</button>
        <div style={wrapperStyle}>
          <div style={innerStyle}>
            <Template
              htmlObjects={pageData['nodes'] || []}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
  // mapDispatchToProps
  // { actions: _.assign({}, actions) }
)(Next)
