import React, { Component } from 'react'
import _ from 'lodash'
import classnames from 'classnames'
import CSSModules from 'react-css-modules'
const styles = require('./InfoTable.scss')

interface IProps {
  header?: {
    key: string
    name: string | JSX.Element
  }[]
  data: any[]
  // todo
  enableTooltip?: boolean
  style?: any
  actions?: {
    name: string | JSX.Element
    fn: (rowData: any) => void
  }[]
  operationLabel?: string | JSX.Element
}

@CSSModules(styles)
class InfoTable extends Component<IProps, {}> {

  constructor(props) {
    super(props)
  }

  render() {
    let { header, data, enableTooltip, style, actions, operationLabel } = this.props
    actions = actions || []

    if (!header) {
      header = (data.length !== 0 && _.keys(data[0]).map(key => {
        return {
          key,
          name: key
        }
      })) || []
    }

    const className = classnames({
      'info-table': true,
      'info-table--no-header': !header
    })

    return (
      <table styleName={className} style={style || {}}>
        <tbody>
          {
            header
              ? (
                <tr>
                  {
                    header.map((item, index) => {
                      return (
                        <th key={index}>{item.name}</th>
                      )
                    })
                  }
                  {
                    actions.length !== 0 && (
                      <th>{ operationLabel || '操作' }</th>
                    )
                  }
                </tr>
              )
              : <tr></tr>
          }
          {
            data.map((row, index) => {
              return (
                <tr key={index}>
                  {
                    _.map(header, (item, key) => {
                      return (
                        <td key={key}>{row[item.key].toString() }</td>
                      )
                    })
                  }
                  {
                    actions.length !== 0 && (
                      <td
                        styleName="actions"
                        >
                        {
                          actions.length !== 0 && actions.map((action, index2) => {
                            return (
                              <div
                                styleName="action"
                                key={index2}
                                onClick={e => {
                                  action.fn(data[index])
                                } }
                                >
                                {action.name}
                              </div>
                            )
                          })
                        }
                      </td>
                    )
                  }
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
