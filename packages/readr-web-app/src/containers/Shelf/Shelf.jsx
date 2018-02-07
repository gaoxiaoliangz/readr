import React, { Component } from 'react'
import BrandingContainer from '../../containers/BrandingContainer'
import Colophon from '../../components/Colophon/Colophon'
import './Shelf.scss'

class Shelf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: null
    }
  }

  componentDidMount() {
  }

  handleChange = e => {
    const file = e.target.files[0]
    console.log(e.target.files)
    const store = firebase.storage()

    store.ref().child(file.name).put(file)
      .then((snapshot) => {
        // store.ref(file.name).getDownloadURL().then((url) => {
        //   this.setState({
        //     img: url
        //   })
        // })
        console.log('Uploaded a blob or file!', snapshot)
      })
  }

  render() {
    return (
      <div className="page-shelf">
        <BrandingContainer innerProps={{ dark: true }} />
        <div styleName="content">
          <input type="file" onChange={this.handleChange} />
          {
            this.state.img && (
              <img src={this.state.img} alt="img" />
            )
          }
        </div>
        <Colophon dark />
      </div>
    )
  }
}

export default Shelf
