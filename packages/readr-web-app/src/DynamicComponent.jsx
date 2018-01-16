import React from 'react'

class DynamicComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      compState: 'none'
    }
  }

  componentWillMount() {
    this.setState({
      compState: 'loading'
    })
    this.props.loader()
      .then(comp => {
        this.comp = comp.default
        this.setState({
          compState: 'loaded'
        })
      })
      .catch(err => {
        this.errMsg = err.message
        this.setState({
          compState: 'failed'
        })
      })
  }

  render() {
    return (
      <div className="dynamic-component">
        {
          this.state.compState === 'loading' && 'loading'
        }
        {
          this.state.compState === 'failed' && this.errMsg
        }
        {
          this.state.compState === 'loaded' && <this.comp />
        }
      </div>
    )
  }
}

export default DynamicComponent
