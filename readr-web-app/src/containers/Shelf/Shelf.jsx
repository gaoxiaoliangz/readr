import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { Spin, Icon } from 'antd'
import BrandingContainer from '../../containers/BrandingContainer'
import Colophon from '../../components/Colophon/Colophon'
import './Shelf.scss'
import uuid from '../../utils/uuid'
import { logUploaded, fetchBookList } from '../../service'

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />
const { firebase } = window

const store = firebase.storage()

class Shelf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: {},
      loading: true,
    }
  }

  componentDidMount() {
    firebase.database().ref('books')
      .limitToLast(100)
      .on('value', () => {
        this.fetchBookList()
      })
  }

  fetchBookList = () => {
    this.setState({
      loading: true,
    })
    fetchBookList()
      .then(books => {
        this.setState({
          loading: false,
          books
        })
      })
  }

  handleChange = e => {
    const file = e.target.files[0]
    store.ref().child(file.name).put(file)
      .then(() => {
        logUploaded(uuid(), file.name, file.type)
      })
  }

  render() {
    const { loading } = this.state
    return (
      <div className="page-shelf">
        <BrandingContainer innerProps={{ dark: true }} />
        <div styleName="content">
          <input type="file" onChange={this.handleChange} />
          {
            loading
              ? <Spin indicator={antIcon} />
              : _.map(this.state.books, (book) => {
                return (
                  <div key={book.id}>
                    <Link to={'/book/' + book.id}>{book.title}</Link>
                  </div>
                )
              })
          }
        </div>
        <Colophon dark />
      </div>
    )
  }
}

export default Shelf
