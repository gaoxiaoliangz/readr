import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { sendNotification, reset, fetchBooks } from '../../store/actions'
import _ from 'lodash'
import AddCollectionForm from './components/AddCollectionForm'
import api from '../../services/api'
import DocContainer from '../../containers/DocContainer'

interface Props {
  session: any
  sendNotification?: any
  notification?: any
  reset: any
  fetchBooks?: (data: fetchBooks) => void
}

class AddCollection extends Component<Props, {}> {

  constructor(props) {
    super(props)
    this.handleSave = this.handleSave.bind(this)
    this.handleBooksValueChange = this.handleBooksValueChange.bind(this)
  }

  handleSave(data) {
    const creator = this.props.session.user.id
    const postData = Object.assign({}, data, {
      creator
    })

    api.addCollection(postData).then(result => {
      this.props.sendNotification('添加成功！')
      this.props.reset('addCollection')
    }, error => {
      this.props.sendNotification(error.message)
    })
  }

  handleBooksValueChange(newVal) {
    if (!_.isEmpty(newVal)) {
      this.props.fetchBooks({
        q: newVal
      })
    }
  }

  render() {
    return (
      <DocContainer title="添加合集">
        <h1 className="page-title">添加合集</h1>
        <AddCollectionForm
          onSave={this.handleSave}
          onBooksValueChange={this.handleBooksValueChange}
          />
      </DocContainer>
    )
  }
}

function mapStateToProps(state) {
  return {
    notification: state.components.notification,
    elements: state.elements,
    session: state.session
  }
}

export default connect(
  mapStateToProps,
  { sendNotification, reset, fetchBooks }
)(AddCollection as any)
