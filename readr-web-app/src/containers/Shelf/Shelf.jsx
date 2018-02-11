import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import BrandingContainer from '../../containers/BrandingContainer'
import Colophon from '../../components/Colophon/Colophon'
import './Shelf.scss'
import guid from '../../utils/guid'
import { logUploaded } from '../../service'

const { firebase } = window

const store = firebase.storage()

class Shelf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: {}
    }
  }

  componentDidMount() {
    firebase.database().ref('files').limitToLast(100).orderByChild('created_at')
      .on('value', data => {
        this.setState({
          books: data.val()
        })
      })
  }

  handleChange = e => {
    const file = e.target.files[0]
    store.ref().child(file.name).put(file)
      .then(() => {
        logUploaded(guid(), file.name, file.type)
      })
  }

  render() {
    return (
      <div className="page-shelf">
        <BrandingContainer innerProps={{ dark: true }} />
        <div styleName="content">
          <input type="file" onChange={this.handleChange} />
          {
            _.map(this.state.books, (book, id) => {
              return (
                <div key={id}>
                  <Link to={'/book/' + id}>{book.filename}</Link>
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
