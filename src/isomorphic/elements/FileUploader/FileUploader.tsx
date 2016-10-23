import React, { Component } from 'react'
import $ from 'jquery'

interface Callback {
  (data: any): any
}

interface Props {
  url: string
  fileType: string
  noAjax?: boolean
  onSuccess?: Callback
  onError?: Callback
  onComplete?: Callback
  name?: string
}

interface State {
  value: string
}

class FileUploader extends Component<Props, State> {

  fileInput: HTMLInputElement

  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
    this.handleFileChange = this.handleFileChange.bind(this)
  }

  handleFileChange(e) {
    // web 那边用的函数，有一些问题
    // const { endpoint, onComplete, onSuccess, onError } = this.props
    // helpers.uploadFile({
    //   url: `${apiRoot}/${endpoint}`,
    //   fileElementId: 'upload-file',
    //   success: data => {
    //     console.log(data)
    //   },
    //   error: data => {
    //     console.log(data)
    //   }
    // })

    // jquery 文件上传
    const { url, onComplete, onSuccess, onError } = this.props

    const files = e.target.files
    const data = new FormData()

    $.each(files, function (key, value) {
      data.append(key, value)
    })

    $.ajax({
      url,
      type: 'POST',
      data,
      cache: false,
      processData: false,

      // 如果这么设置 contentType 会导致不存在 boundary 的问题, 需要设置为 false
      // contentType: 'multipart/form-data',
      contentType: false,

      xhrFields: {
        withCredentials: true
      },
      complete: data2 => {
        if (onComplete) {
          onComplete(data2)
        }
      },
      success: function (data2, textStatus, jqXHR) {
        if (onSuccess) {
          onSuccess(data2)
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        if (onError) {
          onError(errorThrown)
        }
      }
    })
  }

  componentDidMount() {
  }

  render() {
    const { url, fileType, noAjax, children, name } = this.props

    // 如果页面上有两个上传组件可能会出错
    // input value 设为空会使得每次选中文件后都触发 onChange
    return (
      <div
        className="file-trigger"
        onClick={e => {
          if (!noAjax) {
            $(this.fileInput).click()
          }
        } }
        style={{
          cursor: 'pointer'
        }}
        >
        <form action={url} method="post" encType="multipart/form-data" style={noAjax ? {} : { display: 'none' }}>
          <input
            type="file"
            name={name || 'file'}
            id="upload-file"
            value={noAjax ? undefined : ''}
            ref={ref => { this.fileInput = ref } }
            onChange={e => {
              if (!noAjax) {
                this.handleFileChange(e)
              }
            } }
            accept={`.${fileType}` || '.*'}
            />
          <input type="submit" value="提交" />
        </form>
        {children}
      </div>
    )
  }
}

export default FileUploader
