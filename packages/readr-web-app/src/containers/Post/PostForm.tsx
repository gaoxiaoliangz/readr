import React, { Component } from 'react'
import { sendNotification } from '../../actions'
import { Field, reduxForm } from 'redux-form'
import { InputField } from '../../components/Input/Input'
import { renderTextarea } from '../../components/Textarea/Textarea'
import Button from '../../components/Button/Button'
import styles from './Post.scss'
import { SelectField } from '../../components/Select/Select'

interface OwnProps {
  onSubmit: any
  initialValues?: any
}

interface StateProps {
  sendNotification: typeof sendNotification
  handleSubmit: any
}

export const visibilityOptions = [
  {
    name: '私有',
    value: 'PRIVATE'
  },
  {
    name: '公开',
    value: 'PUBLIC'
  }
]

export const statusOptions = [
  {
    name: '草稿',
    value: 'DRAFT'
  },
  {
    name: '发布',
    value: 'PUBLISHED'
  },
  {
    name: '未发布',
    value: 'UNPUBLISHED'
  },
]

export const categoryOptions = [
  {
    name: '博客',
    value: 'BLOG'
  },
  {
    name: '书籍周刊',
    value: 'BOOK_WEEKLY'
  },
  {
    name: '页面',
    value: 'PAGES'
  },
]

class AddPostForm extends Component<OwnProps & StateProps, {}> {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-8">
            <div>
              <label>标题</label>
              <Field placeholder="输入标题..." name="title" component={InputField} type="text" />
            </div>
            <div>
              <label htmlFor="markdown">内容</label>
              <Field className={styles.longText} name="markdown" component={renderTextarea} type="text" />
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <label>地址</label>
              <Field name="slug" component={InputField} type="text" />
            </div>
            <div>
              <label>图片</label>
              <Field name="image" component={InputField} type="text" />
            </div>
            <div>
              <label>可见性</label>
              <Field
                name="visibility"
                component={SelectField}
                options={visibilityOptions}
              />
            </div>
            <div>
              <label>状态</label>
              <Field
                name="status"
                component={SelectField}
                options={statusOptions}
              />
            </div>
            <div>
              <label>分类</label>
              <Field
                name="category"
                component={SelectField}
                options={categoryOptions}
              />
            </div>
            <Button type="submit">保存</Button>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm<{}, OwnProps, {}>({
  form: 'addPost'
})(AddPostForm) as React.ComponentClass<OwnProps>
