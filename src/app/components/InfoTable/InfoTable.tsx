import React, { Component } from 'react'
import _ from 'lodash'
import classnames from 'classnames'
import CSSModules from 'react-css-modules'
import styles from './InfoTable.scss'

interface IProps {
  header: (string | JSX.Element)[]
  style?: React.CSSProperties
  rows?: ((string | JSX.Element)[])[]
}

@CSSModules(styles)
class InfoTable extends Component<IProps, {}> {

  constructor(props) {
    super(props)
  }

  render() {
    let { header, style, rows } = this.props

    const className = classnames({
      'info-table': true,
      'info-table--no-header': !header
    })

    return (
      <table styleName={className} style={style || {}}>
        <tbody>
          <tr>
            {header.map((item, index) => <th key={index}>{item}</th>)}
          </tr>
          {
            rows.map((row, index) => {
              if (row.length !== header.length) {
                console.warn('Row items should match head items!')
              }

              return (
                <tr key={index}>
                  {_.map(row, (item, key) => <td key={key}>{item}</td>)}
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

export default InfoTable
