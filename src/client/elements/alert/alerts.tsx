import React from 'react'
import Alert from './alert'
const styles: any = require('./_alert.scss')

type TProps = {
  children?: any
  onRequestClose?: (id: string) => void
  messages: {
    content: string
    visible: boolean
    type: 'success' | 'error' | 'warning'
    id: string
  }[]
}

function Alerts(props: TProps) {
  return (
    <div className={styles.alerts}>
      {
        props.messages.map((msg, index) => (
          <Alert
            key={index}
            type={msg.type}
            message={msg.content}
            visible={msg.visible}
            onRequestClose={() => {
              props.onRequestClose(msg.id)
            }}
          />
        ))
      }
    </div>
  )
}

export default Alerts
