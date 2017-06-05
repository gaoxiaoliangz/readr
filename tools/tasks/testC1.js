import runTask from '../runTask'
import testC2 from './testC2'

const testc1 = async () => {
  await runTask(testC2)
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('test c1')
      resolve()
    }, 1)
  })
}

export default testc1
