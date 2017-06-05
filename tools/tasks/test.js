import testC1 from './testC1'
import runTask from '../runTask'

const test = async () => {
  await runTask(testC1, { fuck: 1 })
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('main test')
      resolve()
    }, 1000)
  })
}

export default test
