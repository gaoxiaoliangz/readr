import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import styles from './BookProgress.scss'
import PopBox from '../../../components/PopBox'

interface Props {
  localProgress: Viewer.LocalProgress[]
}

interface State {
  showPopBox?: boolean
}

@CSSModules(styles)
class BookProgress extends Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      showPopBox: false
    }
  }

  render() {
    const { localProgress } = this.props
    const lastProgress = _.last(localProgress)
    const percentage = (lastProgress.percentage * 100).toFixed(2) + '%'

    return (
      <div styleName="loc-info">
        <div styleName="container">
          <div
            onClick={() => {
              this.setState({
                showPopBox: true
              })
            }}
          >
            <div>{lastProgress.page}<span styleName="sep">/</span>{lastProgress.pageCount}</div>
            <div styleName="sub-info">{percentage}</div>
            <PopBox
              show={this.state.showPopBox}
              onRequestClose={() => {
                this.setState({
                  showPopBox: false
                })
              }}
              position={{
                bottom: 55,
                left: '50%'
              }}
              width={200}
              style={{
                marginLeft: -100,
                padding: 20
              }}
            >
              {
                localProgress.slice(localProgress.length - 5, localProgress.length).map((progress, index) => {
                  return (
                    <div key={index}>{(progress.percentage * 100).toFixed(2)}%</div>
                  )
                })
              }
            </PopBox>
          </div>
        </div>
      </div>
    )
  }
}

export default BookProgress
