import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { sendNotification, changeValue, openModal, searchDoubanBooks, closeModal } from '../../store/actions'
import _ from 'lodash'
import apis from '../../apis'
import DocContainer from '../../containers/DocContainer'
import AddBookForm from './components/AddBookForm'

interface Props {
  elements?: any
  changeValue?: any
  sendNotification?: any
  openModal?: (data: openModal) => void
  searchDoubanBooks?: any
  closeModal?: any
}

interface State {
  addBookFormInitialData?: any
}

class AddBook extends Component<Props, State> {

  defaultState: {}
  fetchDoubanBooks: any

  constructor(props) {
    super(props)
    this.defaultState = {
      bookTitle: [],
      bookAuthor: [],
      authorResults: [],
      isAddAuthorModalVisible: false
    }
    this.state = Object.assign({}, this.defaultState, {
      AddBookFormInitialData: {}
    })

    // todo
    // this.fetchDoubanBooks = _.debounce(fetchDoubanBooks, 150)
    this.handleTitleValueChange = this.handleTitleValueChange.bind(this)
    this.addAuthor = this.addAuthor.bind(this)
  }

  addBook(data) {
    apis.addBook(data).then(result => {
      this.props.sendNotification('添加成功')
    }, error => {
      this.props.sendNotification(error.message)
    })
  }

  addAuthor(data) {
    apis.addAuthor(data).then(result => {
      this.props.sendNotification('添加成功')
      const id = result.json.ops[0]._id
      const name = result.json.ops[0].name

      this.setState({
        addBookFormInitialData: {
          _authorValues: [{
            name: name,
            value: id
          }],
          _authorValue: ''
        }
      })

      this.props.closeModal()
    }, error => {
      this.props.sendNotification(error.message)
    })
  }

  searchAuthors(query) {
    // if (query !== '') {
    //   apis.searchAuthors(query).then(response => {
    //     this.setState({
    //       optionsOfBookAuthor: response.map(r => ({
    //         name: r.name,
    //         value: r.id
    //       }))
    //     })
    //   })
    // } else {
    //   this.setState({
    //     optionsOfBookAuthor: []
    //   })
    // }
  }

  handleTitleValueChange(newVal) {
    if (!_.isEmpty(newVal)) {
      this.props.searchDoubanBooks(newVal)
    }
  }

  render() {
    return (
      <DocContainer title="添加书籍">
        <h1 className="page-title">Add Book</h1>
        <AddBookForm
          onTitleInputChange={this.handleTitleValueChange}
          onSaveAuthor={this.addAuthor}
          initialData={this.state.addBookFormInitialData}
        />
      </DocContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    notification: state.components.notification,
    elements: state.elements
  }
}

export default connect(
  mapStateToProps,
  { sendNotification, changeValue, openModal, searchDoubanBooks, closeModal }
)(AddBook as any)
