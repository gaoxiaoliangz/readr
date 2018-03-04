// import _ from 'lodash'
// import React from 'react'
// import { select } from 'redux-saga/effects'
import { createModel } from '@gxl/redux-model'

const NAMESPACE = 'shelf'

const model = createModel({
  namespace: NAMESPACE,
  state: {}
})

export default model
