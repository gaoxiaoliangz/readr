import React, { Component } from 'react'

interface IProps {
}

interface IState {
}

class ViewerPanel extends Component<IProps, IState> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div styleName="viewer-panel">
        <div styleName="container">
          <div styleName="back">
            <Link to="/">
              <Icon name="back" />
              <span>返回</span>
            </Link>
          </div>
          <span styleName="title">{book.title}</span>
          <div onClick={this.toggleViewerPreference} styleName="preference">
            <Icon name="font" />
          </div>
          <div className="add">点击添加至书架</div>
          <Fade>
            {
              this.state.showViewerPreference ? (
                <ViewerPreference />
              ) : null
            }
          </Fade>
          {/*<span className="loc">{book.currentPage+"/"+pages.length}</span>*/}
        </div>
      </div>
    )
  }
}

export default ViewerPanel
