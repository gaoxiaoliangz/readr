import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import styles from './BookProgress.scss'
import PopBox from '../../../components/PopBox'
import reverse from '../../../../utils/reverse'

interface Props {
  localProgress: Viewer.LocalProgress[]
  onGoToRequest: (percentage: number) => void
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
    const { localProgress, onGoToRequest } = this.props
    const lastProgress = _.last(localProgress) || {} as any
    const percentage = ((lastProgress.percentage || 0) * 100).toFixed(2) + '%'

    return (
      <div styleName="loc-info">
        <div styleName="container">
          <div
            onClick={() => {
              this.setState({
                showPopBox: true
              })
            }}
            style={{
              cursor: 'pointer'
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
              <div>
                <h3 styleName="recent-title">最近位置</h3>
                {
                  reverse(localProgress).slice(0, 5).map((progress, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          onGoToRequest(progress.percentage)
                        }}
                      >
                        {(progress.percentage * 100).toFixed(2)}%
                      </div>
                    )
                  })
                }
              </div>
            </PopBox>
          </div>
        </div>
      </div>
    )
  }
}

export default BookProgress
