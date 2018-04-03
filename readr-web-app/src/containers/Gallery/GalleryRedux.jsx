import React from 'react'
import { connect } from 'react-redux'
import PT from 'prop-types'
import './Gallery.scss?global' // eslint-disable-line
import { transition } from './actions'

class Gallery extends React.Component {
  static propTypes = {
    gallery: PT.string.isRequired,
    items: PT.array.isRequired,
    transition: PT.func.isRequired,
    photo: PT.object.isRequired
  }

  constructor() {
    super()

    this.state = {
      query: '',
    }
  }

  handleSubmit(e) {
    e.persist()
    e.preventDefault()

    this.props.transition('SEARCH', this.state.query)
  }

  handleChangeQuery(value) {
    this.setState({ query: value })
  }

  renderForm(state) {
    const searchText = {
      loading: 'Searching...',
      error: 'Try search again',
      start: 'Search'
    }[state] || 'Search'

    return (
      <form className="ui-form" onSubmit={e => this.handleSubmit(e)}>
        <input
          type="search"
          className="ui-input"
          value={this.state.query}
          onChange={e => this.handleChangeQuery(e.target.value)}
          placeholder="Search Flickr for photos..."
          disabled={state === 'loading'}
        />
        <div className="ui-buttons">
          <button
            className="ui-button"
            disabled={state === 'loading'}
            data-flip-key="search">
            {searchText}
          </button>
          {state === 'loading' &&
            <button
              className="ui-button"
              type="button"
              onClick={() => this.props.transition('CANCEL_SEARCH')}>
              Cancel
            </button>
          }
        </div>
      </form>
    )
  }
  renderGallery(state) {
    return (
      <section className="ui-items" data-state={state}>
        {state === 'error'
          ? <span className="ui-error">Uh oh, search failed.</span>
          : this.props.items.map((item, i) =>
            (<img
              src={item.media.m}
              className="ui-item"
              style={{ '--i': i }}
              key={item.link}
              onClick={() => this.props.transition('SELECT_PHOTO', item)}
            />)
          )
        }
      </section>
    )
  }
  renderPhoto(state) {
    if (state !== 'photo') return

    return (
      <section
        className="ui-photo-detail"
        onClick={() => this.props.transition('EXIT_PHOTO')}>
        <img src={this.props.photo.media.m} className="ui-photo" />
      </section>
    )
  }
  render() {
    const galleryState = this.props.gallery

    return (
      <div className="ui-app" data-state={galleryState}>
        {this.renderForm(galleryState)}
        {this.renderGallery(galleryState)}
        {this.renderPhoto(galleryState)}
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      gallery: state.gallery,
      ...state.galleryStates
    }
  },
  {
    transition
  }
)(Gallery)
