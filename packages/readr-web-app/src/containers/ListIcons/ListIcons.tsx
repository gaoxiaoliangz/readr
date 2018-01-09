import React from 'react'
import _ from 'lodash'
import Icon from '../../components/Icon/Icon'
import svgIcons from '../../components/Icon/svg-icons'

type Props = {
  children?: any
}

const ListIcons = (props: Props) => {
  return (
    <div>
      {
        _.map(svgIcons, (icon, key) => {
          return (
            <span>
              <span>{key}</span>
              <Icon name={key} />
            </span>
          )
        })
      }
    </div>
  )
}

export default ListIcons
