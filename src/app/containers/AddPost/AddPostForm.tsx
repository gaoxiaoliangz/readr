import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { compose } from 'redux'
import { sendNotification } from '../../actions'
import { Field, reduxForm } from 'redux-form'
import Input from '../../components/Input/Input'
import Textarea from '../../components/Textarea/Textarea'


interface OwnProps {
  onSubmit: any
}

interface StateProps {
  sendNotification: typeof sendNotification
  handleSubmit: any
}

const renderInput = ({ input: { value, onChange }, ...rest }) => {
  return (
    <Input value={value} onChange={onChange} />
  )
}

const renderTextarea = ({ input: { value, onChange } }) => {
  return (
    <Textarea value={value} onChange={onChange} />
  )
}

class AddPostForm extends Component<OwnProps & StateProps, {}> {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>标题</label>
          <Field placeholder="输入标题..." name="title" component={renderInput} type="text" />
        </div>
        <div>
          <label>地址</label>
          <Field name="slug" component={renderInput} type="text" />
        </div>
        <div>
          <label>可见性</label>
          <Field name="visibility" component="select">
            <option>请选择...</option>
            <option value="PRIVATE">私有</option>
            <option value="PUBLIC">公开</option>
          </Field>
        </div>
        <div>
          <label>状态</label>
          <Field name="status" component="select">
            <option>请选择...</option>
            <option value="DRAFT">草稿</option>
            <option value="PUBLISHED">已发布</option>
            <option value="UNPUBLISHED">未发布</option>
          </Field>
        </div>
        <div>
          <label>分类</label>
          <Field name="category" component="select">
            <option>请选择...</option>
            <option value="BLOG">博客</option>
            <option value="BOOK_WEEKLY">书籍周刊</option>
            <option value="PAGES">页面</option>
          </Field>
        </div>
        <div>
          <label>图片</label>
          <Field name="image" component={renderInput} type="text" />
        </div>
        <div>
          <label htmlFor="markdown">内容</label>
          <Field name="markdown" component={renderTextarea} type="text" />
        </div>
        <button type="submit">保存</button>
      </form>
    )
  }
}

export default reduxForm<{}, OwnProps, {}>({
  form: 'addPost'
})(AddPostForm) as any

// export default compose<{}, OwnProps>(
//   connect(
//     () => ({})
//   ),
//   reduxForm({
//     form: 'addPost'
//   })
// )(AddPostForm)
