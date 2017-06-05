import run from '../runTask'
import bundle from './bundle'

const build = async () => {
  await run(bundle, 'dll')
  await run(bundle, 'node')
  await run(bundle, 'static')
}

export default build
