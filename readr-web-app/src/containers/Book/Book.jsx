import React, { Component } from 'react'
import _ from 'lodash'
import PT from 'prop-types'
import { fetchBookMeta } from '../../service'
import model from './bookModel'

class Book extends Component {
  static propTypes = {
    bookSections: PT.array.isRequired,
    match: PT.shape({
      params: PT.shape({
        id: PT.string
      })
    })
  }

  // constructor(props) {
  //   super(props)
  //   // this.state = {
  //   //   meta: {},
  //   //   sections: [],
  //   //   loading: true
  //   // }
  // }

  componentDidMount() {
    const { id } = this.props.match.params
    if (_.isEmpty(this.props.bookSections)) {
      console.log('fetch sections')
    } else {
      console.log(this.props.bookSections)
    }
    // fetchBookMeta(id).then(meta => {
    //   this.setState({
    //     meta, 
    //     loading: false
    //   })
    // })
  }

  render() {
    return (
      <div>
        {/* {
          loading
            ? 'loading'
            : (
              <div>
                {meta.title}
                {meta.author}
              </div>
            )
        } */}
      </div>
    )
  }
}

export default model.connect(Book, (state, props) => {
  return {
    ...state.book,
    bookSections: _.get(state, ['shelf', 'localBooks', props.match.params.id], [])
  }
})
