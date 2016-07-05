import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { sendNotification, changeValue } from 'actions/index'
import Button from 'elements/Button'
import SelectizeInput from 'elements/SelectizeInput'
import apis from 'utils/apis'
import getElement_R from 'utils/getElement_R'
import InputR from 'elements-wrapped/InputR'
import TextareaR from 'elements-wrapped/TextareaR'


const syls = {
  inputCollectionName: Symbol('inputCollectionName'),
  inputBookName: Symbol('inputBookName'),
  textareaCollectionDesc: Symbol('textareaCollectionDesc')
}

interface Props {
  elements?: any
  changeValue?: any
  sendNotification?: any
  notification?: any
  session?: any
}

interface State {
  optionsOfBooks?: Array<any>
  valuesOfBooks?: Array<any>
}

class AddCollection extends Component<Props, State> {

  defaultState: {}

  constructor(props) {
    super(props)
    this.defaultState = {
      optionsOfBooks: [],
      valuesOfBooks: [],
    }
    this.state = Object.assign({}, this.defaultState)
    this.addCollection = this.addCollection.bind(this)
  }

  resetForm() {
    this.props.changeValue(syls.inputCollectionName, '')
    this.props.changeValue(syls.textareaCollectionDesc, '')
    this.setState(this.defaultState)
  }

  addCollection() {
    let name = this.props.elements[syls.inputCollectionName].value
    let items = this.state.valuesOfBooks.map(a => a.value) as any
    let description = this.props.elements[syls.textareaCollectionDesc].value
    const data = { name, items, description, creator: this.props.session.user.id }

    apis.addCollection(data).then(result => {
      this.props.sendNotification('添加成功！')
      this.resetForm()
    }, error => {
      this.props.sendNotification(error.message)
    })
  }

  searchBooks(query) {
    if (query !== '') {
      apis.searchBooks(query).then(response => {
        this.setState({
          optionsOfBooks: response.map(r => ({
            name: r.title,
            value: r.id
          }))
        })
      })
    }
  }

  // searchTags(query) {
  //   if(query !== '') {
  //     apis.searchTags(query).then(response => {
  //       console.log(response)
  //       this.setState({
  //         tagResults: response
  //       })
  //     })
  //   }
  // }

  componentDidMount() {
  }

  render() {
    return (
      <form>
        <h1 className="page-title">Add Collection</h1>
        <InputR symbol={syls.inputCollectionName} placeholder="Name" />
        <SelectizeInput
          placeholder="Books"
          onInputChange={newValue => {
            this.searchBooks(newValue)
            this.props.changeValue(syls.inputBookName, newValue)
          } }
          value={getElement_R(this.props.elements, syls.inputBookName).value}
          onValuesChange={newValues => {
            this.setState({
              valuesOfBooks: newValues
            })
          } }
          options={this.state.optionsOfBooks}
          values={this.state.valuesOfBooks}
        />
        <TextareaR symbol={syls.textareaCollectionDesc}  placeholder="Description" />
        <Button onClick={this.addCollection}>Add</Button>
      </form>
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
  { sendNotification, changeValue }
)(AddCollection as any)
