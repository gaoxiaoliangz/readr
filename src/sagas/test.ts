import { take, put, call, cancelled, fork, cancel } from 'redux-saga/effects'
import _ from 'lodash'

function someAsyncTask() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log('loaded')
      resolve('load done')
      // yield put({ type: 'LOADED'})
    }, 1000)
  })
}

function doLoad() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve('load done')
    }, 3000)
  })
}

function* doLoadWithCancel(): any {
  // while (true) {
  try {
    const res = yield someAsyncTask()
    yield put({type: 'done', res})
    // setTimeout(function () {
    //   // console.log('loaded')
    //   // resolve('load done')
    //   yield put({ type: 'LOADED'})
    // }, 3000)
  } catch (error) {

  } finally {
    if (yield cancelled()) {
      console.log('canceled')
      yield put({ type: 'CANCEL_LOAD' })
      // return Promise.resolve('canceled p')
    }
  }
  // }
}

function doSave() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve('save done')
    }, 3000)
  })
}

export default function* watchTest(): any {
  while (true) {
    const action = yield take(['LOAD', 'SAVE'])
    let res

    if (action.type === 'LOAD') {
      res = yield doLoad()
      console.log(res)
    }
    if (action.type === 'SAVE') {
      res = yield doSave()
      console.log(res)
    }
  }
}

export function* watchTest2(): any {
  while (true) {
    const loadAction = yield take('LOAD')
    const loadTask = yield fork(doLoadWithCancel)
    const saveAction = yield take('SAVE')
    if (saveAction.type === 'SAVE') {
      console.log('save?')
      yield cancel(loadTask)
    }
    yield put({ type: 'then what'})
  }
}
