import React, { Component } from 'react'
import { Link } from 'react-router'
import BookList from 'components/BookList'

interface Props {
  list: Array<any>
  title: string
  moreLink?: Element
}

class CandyBox extends Component<Props, any> {
  render() {
    let list = this.props.list
    let title = this.props.title
    let moreLink = this.props.moreLink?this.props.moreLink:null

    return (
      <div className="candy-box">
        <h3 className="box-title">{title}</h3>
        {
          moreLink?(
            <Link to={moreLink}>查看更多</Link>
          ):null
        }
        <ul>
          {
            list.map((item, index) => (
              <li key={index}><Link to={item.link}>{item.name}</Link></li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default CandyBox
