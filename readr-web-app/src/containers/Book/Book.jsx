import React, { Component } from 'react'
import pts from 'prop-types'
import { fetchBookFile } from '../../service'

class Book extends Component {
  static propTypes = {
    match: pts.shape({
      params: pts.shape({
        id: pts.string
      })
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      book: {},
      loading: true
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    fetchBookFile(id).then(book => {
      this.setState({
        book,
        loading: false
      })
    })
  }

  render() {
    const { book, loading } = this.state
    return (
      <div>
        {
          loading
            ? 'loading'
            : (
              <div>
                {book.info.title}
                {book.info.author}
              </div>
            )
        }
      </div>
    )
  }
}

export default Book
