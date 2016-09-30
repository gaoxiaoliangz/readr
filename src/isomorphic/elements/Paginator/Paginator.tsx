import React, { Component } from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import utils from '../../utils'
import CSSModules from 'react-css-modules'
const styles = require('./Paginator.scss')

/* 栗子 🌰
 * range = 2
 * | range | current | rangge |
 *   2, 3,     [4],     5, 6
 */

type Ojb = {
  [key: string]: string
}

interface Props {
  all: number
  current: number
  range?: number // default 3
  url: {
    pathname: string
    query: Object
  }
  urlStyle?: 'query' | 'slash'
}

@CSSModules(styles)
class Paginator extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  parseUrl(pathname: string, query: Object, pageNum) {
    let urlStyle = this.props.urlStyle
      ? this.props.urlStyle
      : 'query'

    if (urlStyle === 'query') {
      let queryPart = utils.parseUrlencoded(_.omit(query, ['page']))
      return `${pathname}${queryPart ? `?${queryPart}&` : '?'}page=${pageNum}`
    }

    let queryPart = utils.parseUrlencoded(query)
    return `${pathname}/page/${pageNum}?${queryPart}`
  }

  render() {
    const range = this.props.range ? this.props.range : 3
    const totalRangeEndIndex = this.props.all - 1
    const currentIndex = parseInt(this.props.current as any) - 1
    let rangeStartIndex = currentIndex - range
    let rangeEndIndex = currentIndex + range
    let leftSpread = false
    let rightSpread = false
    let pages = []
    let url = this.props.url

    if (typeof this.props.all !== 'number') {
      throw new Error('all 必须为 number 类型！')
    }

    // 验证
    if (typeof currentIndex !== 'number') {
      console.error(`页码必须为数字，却得到 ${typeof currentIndex}`)
    }
    if (currentIndex > rangeEndIndex || currentIndex < 0) {
      console.error('页码不能大于所有页面数目或小于 1！')
    }

    if (range * 2 + 1 >= totalRangeEndIndex) {
      // 总长度小于 range 直径
      rangeEndIndex = totalRangeEndIndex
      rangeStartIndex = 0
    } else {
      // 处理右侧溢出
      if (rangeEndIndex >= totalRangeEndIndex) {
        rangeEndIndex = totalRangeEndIndex
        rangeStartIndex = totalRangeEndIndex - (range * 2 + 1)
      } else {
        rightSpread = true
      }

      if (rangeStartIndex <= 0) {
        rangeStartIndex = 0
        rangeEndIndex = range * 2 + 1
      } else {
        leftSpread = true
      }
    }

    for (let i = rangeStartIndex; i <= rangeEndIndex; i++) {
      pages = pages.concat([{
        pageNum: i + 1,
        isCurrent: i === currentIndex
      }])
    }

    // add spread
    if (leftSpread) {
      const spd = [
        {
          pageNum: 1
        },
        {
          isSpread: true
        }
      ]
      pages = spd.concat(pages)
    }

    if (rightSpread) {
      const spd = [
        {
          isSpread: true
        },
        {
          pageNum: totalRangeEndIndex + 1
        }
      ]
      pages = pages.concat(spd)
    }

    return (
      this.props.all !== 1 && (
        <div styleName="paginator">
          <ul>
            {
              pages.map((page, index) => {
                if (page.isCurrent) {
                  return (
                    <li key={index} styleName="page-num--current">{page.pageNum}</li>
                  )
                }
                if (page.isSpread) {
                  return (
                    <li key={index} styleName="page-spread">...</li>
                  )
                }

                return (
                  <li key={index} styleName="page-num"><Link to={this.parseUrl(url.pathname, url.query, page.pageNum) }>{page.pageNum}</Link></li>
                )
              })
            }
          </ul>
        </div>
      )
    )
  }
}

export default Paginator
