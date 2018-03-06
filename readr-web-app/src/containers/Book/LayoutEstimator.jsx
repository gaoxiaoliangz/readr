import React, { Component } from 'react'
import PT from 'prop-types'
import ReactDOM from 'react-dom'
import ContentRenderer from './ContentRenderer'
import calcBook from './layout/calcBook'
import './LayoutEstimator.scss?global' // eslint-disable-line

class LayoutEstimator extends Component {
  static propTypes = {
    sections: PT.array.isRequired,
    onCalcDone: PT.func
  }

  componentDidMount() {
    if (this.props.onCalcDone) {
      this.props.onCalcDone(calcBook(this.estimator))
    }
  }

  renderContent() {
    const { sections } = this.props
    return (
      <div className="layout-estimator" ref={ref => { this.estimator = ref }}>
        {
          sections.map(section => {
            return <ContentRenderer id={section.sectionId} className="layout-estimator__section" key={section.sectionId} nodes={section.nodes} />
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
