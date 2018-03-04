import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { Spin, Icon } from 'antd'
import BrandingContainer from '../../containers/BrandingContainer'
import Colophon from '../../components/Colophon/Colophon'
import './Shelf.scss'
import uuid from '../../utils/uuid'
import { logUploaded, fetchBookList, fetchBookSections } from '../../service'
import createDbModel from '../../local-db'
import model from './shelfModel'

const dbModel = createDbModel('books')

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />
const { firebase } = window

const store = firebase.storage()

class Shelf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: {},
      loading: true,
      downloading: null,
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
                    {
                      this.state.downloading === book.id && 'downloading'
                    }
                    <div onClick={() => {
                      if (this.state.downloading) {
                        return
                      }
                      this.setState({
                        downloading: book.id
                      })
                      fetchBookSections(book.id).then(sections => {
                        this.setState({
                          downloading: null
                        })
                        dbModel.add({
                          id: book.id,
                          sections
                        })
                      })
                    }}>download book</div>
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

export default model.connect(Shelf)
