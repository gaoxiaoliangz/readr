import run from '../runTask'
import bundle from './bundle'

async function build() {
  await run(bundle, 'server')
}

export default build
