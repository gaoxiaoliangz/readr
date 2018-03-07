import React, { Component } from 'react'
import PT from 'prop-types'
import ReactDOM from 'react-dom'
import ContentRenderer from './ContentRenderer'
import calcBook from './layout/calcBook'
import './LayoutEstimator.scss?global' // eslint-disable-line

class LayoutEstimator extends Component {
  static propTypes = {
    sections: PT.array.isRequired,
    onCalcDone: PT.func,
    config: PT.object.isRequired,
  }

  componentDidMount() {
    if (this.props.onCalcDone) {
      this.props.onCalcDone(calcBook(this.estimator))
    }
  }

  renderContent() {
    const { sections, config } = this.props
    return (
      <div className="layout-estimator" ref={ref => { this.estimator = ref }}>
        {
          sections.map(section => {
            return <ContentRenderer config={config} id={section.sectionId} key={section.sectionId} nodes={section.nodes} />
          })
        }
      </div>
    )
  }

  render() {
    return ReactDOM.createPortal(
      this.renderContent(),
      document.getElementById('estimator'),
    )
  }
}

export default LayoutEstimator
