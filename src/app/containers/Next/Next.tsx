import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import request from '../../../utils/network/request'

interface Props {
}

interface LocalState {
  pageData:  Atom[][][]
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
      pageData: []
    }
  }

  componentDidMount() {
    request('/api/test').then(data => {
      this.setState({
        pageData: data.json
      })
    })
  }

  render() {
    const pageData = this.state.pageData

    return (
      <div>
        {
          pageData.map((page, index) => {
            return (
              <div className="page" key={index}>
                {
                  page.map((line, _index) => {
                    return (
                      <div className="line" key={_index}>
                        {
                          line.map((char, __index) => {
                            return (
                              <span key={__index}>{char.text}</span>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
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
