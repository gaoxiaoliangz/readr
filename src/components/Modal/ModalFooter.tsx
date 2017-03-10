import React from 'react'
import { Button } from '../form'
const styles = require('./ModalFooter.scss')

type Props = {
  children?: any
  onConfirm: () => void
  onCancel?: () => void
}

function ModalFooter(props: Props) {
  const { onConfirm, onCancel } = props

  return (
    <div className={styles['modal-footer']}>
      <Button color="blue" onClick={onConfirm}>确认</Button>
      {
        onCancel && (
          <Button color="white" onClick={onCancel}>取消</Button>
        )
      }
    </div>
  )
}

export default ModalFooter
