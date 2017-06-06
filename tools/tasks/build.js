import run from '../runTask'
import bundle from './bundle'

async function build() {
  await run(bundle, 'dll')
  await run(bundle, 'static')
  await run(bundle, 'node')
}

export default build
