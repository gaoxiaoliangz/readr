import React, { Component } from 'react'
// import { Link } from 'react-router'
// import * as styles from '../constants/STYLES'
import BookPage from './BookPage'
import * as utils from './BookPageList.utils'
import CSSModules from 'react-css-modules'
const styles: any = require('./_book-page-list.scss')

interface IProps {
  nodes: string[]
  nodeHeights: number[]
  startPage: number
  pageCount: number
}

interface IState {
  calculatedPages: utils.TPageList
}

@CSSModules(styles)
class BookPageList extends Component<IProps, IState> {

  constructor(props) {
    super(props)
    this.state = {
      calculatedPages: []
    }
  }

  calcPages() {
    const { nodeHeights, nodes } = this.props
    const calculatedPages = utils.groupNodesByPage(nodes, nodeHeights, 900)

    this.setState({
      calculatedPages: calculatedPages
    })
  }

  componentDidMount() {
    this.calcPages()
  }

  render() {
    // let style = styles.BOOK_HD_STYLE
    // if(this.props.view.mode === "MOBILE") {
    //   style = styles.BOOK_MOBILE_STYLE
    // }

    // if(!this.props.isCalculated) {
    //   style.height = "100%"
    // }

    const { calculatedPages: pages } = this.state
    // todo
    const totalHeight = pages.length * 900

    return (
      <ul styleName="pages" style={{ height: totalHeight || 'auto' }}>
        {
          pages.map((page, index) => {
            return <BookPage key={index} page={page}></BookPage>
          })
        }
      </ul>
    )
  }
}

export default BookPageList
