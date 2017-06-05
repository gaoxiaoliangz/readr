import run from '../runTask'
import bundle from './bundle'

async function build() {
  await run(bundle, 'dll')
  await run(bundle, 'node')
  await run(bundle, 'static')
}

export default build
