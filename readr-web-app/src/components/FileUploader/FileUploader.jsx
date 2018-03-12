import React, { Component } from 'react'
import $ from 'jquery'
import PT from 'prop-types'

class FileUploader extends Component {
  static defaultProps = {
    name: 'file',
    multiple: false,
    accept: '.*',
  }
  static propTypes = {
    onChange: PT.func.isRequired,
    accept: PT.string,
    style: PT.object,
    name: PT.string,
    multiple: PT.bool,
  }

  handleFileChange = e => {
    this.props.onChange(e)
  }

  render() {
    const { accept, children, style, multiple, name } = this.props

    // 如果页面上有两个上传组件可能会出错
    // input value 设为空会使得每次选中文件后都触发 onChange
    return (
      <div
        className="file-trigger"
        onClick={() => {
          $(this.fileInput).click()
        }}
        style={
          {
            ...{
              display: 'inline-block'
            },
            ...style
          }
        }
      >
        <form method="post" encType="multipart/form-data" style={{ display: 'none' }}>
          <input
            multiple={multiple}
            type="file"
            name={name || 'file'}
            id="upload-file"
            ref={ref => { this.fileInput = ref }}
            onChange={this.handleFileChange}
            accept={accept}
          />
        </form>
        {children}
      </div>
    )
  }
}

export default FileUploader
