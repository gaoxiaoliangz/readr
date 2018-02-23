import React, { Component } from 'react'
import pts from 'prop-types'
import { fetchBookMeta, fetchBookSections } from '../../service'

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
      meta: {},
      sections: [],
      loading: true
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    fetchBookMeta(id).then(meta => {
      this.setState({
        meta,
        loading: false
      })
    })
  }

  render() {
    const { meta, loading } = this.state
    return (
      <div>
        {
          loading
            ? 'loading'
            : (
              <div>
                {meta.title}
                {meta.author}
              </div>
            )
        }
      </div>
    )
  }
}

export default Book
